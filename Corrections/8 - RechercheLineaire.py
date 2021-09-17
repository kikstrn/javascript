"""
Algorithme pour recherche lineaire:

Cet algo a pour but de chercher trés simplement un element dans un tableau et de retourner sa postion.

Il suffit de parcourir un par un les elements d'un tableau jusqu'a trouver celui demander.


"""

import random # import de la librairie random pour generer un nombre aléatoire
arr = []

# bout de code pour remplir un tableau de 500 nombres aléatoires compris entre 0 et 1000
for i in range(500):
    arr.append(random.randrange(0,1000))

# élément a trouver
elem = 42

def linearSearch(element, array):
    for i in range(len(array)):
        if array[i] == elem:
            return i
    return -1

pos = linearSearch(elem , arr)
if pos != -1:
    print("L'élement ", arr[pos]," a été trouvé à la position ",pos)
else:
    print("L'élement ",elem," n'a pas été trouvé")