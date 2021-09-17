# -*- coding: utf-8 -*-
"""
Created on Wed Jun 19 10:35:21 2019

@author: Guillaume
"""

"""
FizzBuzz !

But de l'exercice :
    
Afficher en console les nombres de 1 à 35 (un par ligne) en remplaçant les
multiples de 3 par "Fizz!" et les multiples de 5 par "Buzz!". Les
multiples de 3 et 5 seront remplacés par "FizzBuzz!".

"""

#Correction :

for i in range(1,35):
    if i%3 == 0 and i%5 == 0:
        print("FizzBuzz!")
    elif i%3 == 0:
        print("Fizz!")
    elif i%5 == 0:
        print("Buzz!")
    else:
        print(i)