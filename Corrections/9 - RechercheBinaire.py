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
def binarySearch(element, array, debutArray, finArray):
    # condition pour éviter la boucle infini si on ne trouve pas l'élément
    if finArray >= debutArray:
        # calcul du mileu du tableau
        milieu = debutArray + (finArray - debutArray)//2
        # si l'élément du mileu de tableau est celui qu'on cherche on retourne l'indice du milieu
        if array[milieu] == element:
            return milieu
        # si l'élément du milieu est plus petit que celui qu'on cherche...
        elif array[milieu] > element:
            # on appelle récursivement la fonction sur la moitié inférieure du tableau
            return binarySearch(element, array, debutArray, milieu-1)
        else:
            # sinon on appelle récursivement la fonction sur la moitié supérieure du tableau
            return binarySearch(element, array, milieu+1, finArray)
    else:
        # si on a pas trouver retourne -1
        return -1

# appel de notre fonction
pos = binarySearch(elem, arr, 0, len(arr)-1)
if pos != -1:
    # si l'élément a été trouvé
    print("L'élément ",elem," a été trouvé à la positison ", pos)
else :
    # sinon
    print("L'élément ",elem," n'a pas été trouvé")
