"""

Recherche binaire:

Cet algorythme de recherche est un peu plus compliqué mais plus performant que la recherche linéaire
car au pire des cas on ne cherchera que dans la moitié du tableau

Il n'est utilisable qu'avec des tableaux trié.

Le principe est de comparer l'élément a trouver avec l'élément au milieu du tableau:

    si le milieu du tableau est inférieur à l'element a trouver on divise le tableau en 2 et on répéte la recherche sur cette moitié du tableau
    si le milieu du tableau est supérieur à l'element a trouver on divise le tableau en 2 et on répéte la recherche sur cette moitié du tableau

C'est un cas typique d'utilisation de la récursivité

"""
import random

arr = []
elem = 42    # element a trouver dans le tableau

# remplissage du tableau avec 500 valeurs aléatoires comprisent entre 0 et 1000
for i in range(500):
    arr.append(random.randrange(0, 1000))

# fonction de tri de python
arr.sort()

# Fonction de recherche binaire, elle prend en paramètre l'élément a trouver,
# le tableau dans lequel chercher, et les indice du début et de la fin du tableau.

# def binarySearch():
# TODO
# 
# 

