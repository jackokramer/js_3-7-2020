#### Task
##Given an integer, , perform the following conditional actions:

##If  is odd, print Weird
##If  is even and in the inclusive range of  to , print Not Weird
##If  is even and in the inclusive range of  to , print Weird
##If  is even and greater than , print Not Weird
##Input Format

#A single line containing a positive integer, .

#Constraints

#Output Format

# Print Weird if the number is weird; otherwise, print Not Weird.

import math
import os
import random
import re
import sys


n = int(input().strip())
check = {True: "Not Weird", False: "Weird"}

print(check[
        n%2==0 and (
            n in range(2,6) or 
            n > 20)
    ])

n = 3

#if n%2 = 1:
#    print('Weird')
#else n%2 = 0:
#    print('Not weird')

#if n%2 =0 and n<5:
#  print('Not weird')

#if n%2 = 0 and n< 20 and n%2=0:
#   print('Weird')


if __name__ == '__main__':
    n = 7