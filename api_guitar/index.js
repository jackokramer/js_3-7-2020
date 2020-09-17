const volume = document.getElementById('volume')
const bass = document.getElementById('bass')
const mid = document.getElementById('mid')
const treble = document.getElementById('treble')
const visualizer = document.getElementById('visualizer')

const context = new AudioContext()
const analyzerNode = new AnalyserNode(context, {fftSize: 1024})
const gainNode = new GainNode(context, {gain: volume.value})
const bassEQ = new BiquadFilterNode(context, {
    type: 'lowshelf',
    frequency: 500,
    gain: bass.value
})
const midEQ = new BiquadFilterNode(context, {
    type: 'peaking',
    Q: Math.SQRT1_2,
    frequency: 1500,
    gain: mid.value
})

const trebleEQ = new BiquadFilterNode(context, {
    type: 'highshelf',
    frequency: 3000,
    gain: treble.value
})

setUpEventListener()
setUpContext()
resize()
drawVisualizer()

function setUpEventListener(){
    window.addEventListener('resize', resize)

    volume.addEventListener('input', e => {
        const value = parseFloat(e.target.value)
        gainNode.gain.setTargetAtTime(value, context.currentTime, .01) // removes popping or clicking sounds
    })
    bass.addEventListener('input', e => {
        const value = parseInt(e.target.value)
        bassEQ.gain.setTargetAtTime(value, context.currentTime, .01) // removes popping or clicking sounds
    })
    mid.addEventListener('input', e => {
        const value = parseInt(e.target.value)
        midEQ.gain.setTargetAtTime(value, context.currentTime, .01) // removes popping or clicking sounds
    })
    treble.addEventListener('input', e => {
        const value = parseInt(e.target.value)
        trebleEQ.gain.setTargetAtTime(value, context.currentTime, .01) // removes popping or clicking sounds
    })
}


async function setUpContext (){
    const guitar = await getGuitar()
    if (context.state === 'suspended'){
        await context.resume()
    }
    const source = context.createMediaStreamSource(guitar)
    source
    .connect(bassEQ)
    .connect(midEQ)
    .connect(gainNode)
    .connect(trebleEQ)
    .connect(analyzerNode)
    .connect(context.destination)
}

function getGuitar(){
    return navigator.mediaDevices.getUserMedia({
        audio: {
            echoCancellation: false,
            autoGainControl: false,
            noiseSuppression: false,
            latency: 0
        }
    })
}

function drawVisualizer(){
    requestAnimationFrame(drawVisualizer)

    const bufferLength = analyzerNode.frequencyBinCount // how many frequencies we are measuring
    const dataArray = new Uint8Array(bufferLength)
    analyzerNode.getByteFrequencyData(dataArray)
    const width = visualizer.width;
    const height = visualizer.height;
    const barWidth =  width/ bufferLength;

    const canvasContext = visualizer.getContext('2d')
    canvasContext.clearRect(0,0, width, height)
    dataArray.forEach((item, index)=>{
        const y = item /255 * height/2
        const x = barWidth * index;

        canvasContext.fillStyle= `hsl(${y/height*400}, 100%, 50%)`
        canvasContext.fillRect(x, height - y, barWidth, y)
    })
}

function resize(){
    visualizer.width = visualizer.clientWidth * window.devicePixelRatio
    visualizer.height = visualizer.clientHeight * window.devicePixelRatio
}