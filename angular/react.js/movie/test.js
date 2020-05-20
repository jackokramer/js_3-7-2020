import React from 'react';
export default function SearchMovie(){
    return(
        <form className='form'>
            <label className='label' htmlFor='query'>Movie Title </label>
                <input className="inpuy" type='text' name='query' placeholder='Get the Gringo'/>
                <button className='button' type='button'>Search</button>
            </form>
        )
}