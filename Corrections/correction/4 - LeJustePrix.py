# -*- coding: utf-8 -*-
"""
Created on Wed Jun 19 10:35:21 2019

@author: Guillaume
"""

"""
LeJustePrix !

But de l'exercice :
    
Votre programme génère un nombre aléatoire entre 1 et 1 000.

Il demande ensuite à l'utilisateur de proposer un nombre.

L'utilisateur entre un nombre dans la console :
    - Si celui-ci est plus petit que le nombre généré, le programme affiche :
    "C'est PLUS !" et demande un nouveau nombre.
    - Si celui-ci est plus grand que le nombre généré, le programme affiche :
    "C'est MOINS !" et demande un nouveau nombre.
    - Si celui-ci est le nombre généré aléatoirement, le programme affiche :
    "C'est GAGNÉ !" puis l'exécution du programme se termine.

Le nombre d'essaie de l'utilisateur est limité à 10 :
    - Chaque tour, le programme affiche le nombre de tours restants à
    l'utilisateur
    - Si au bout de 10 essais l'utilisateur n'a pas trouvé le nombre,
    le programme affiche : "C'est PERDU ! Le nombre était : nombreAleatoire"
    puis l'exécution du programme se termine.

"""

#Correction

import random

nombreAleatoire = random.randint(1,1000)

print("Bienvenue dans le Juste Prix !")

for i in range(1,11):
    prop = int(input("Entrez un nombre : "))
    if prop < nombreAleatoire:
        print("C'est PLUS !")
    elif prop > nombreAleatoire:
        print("C'est MOINS !")
    else:
        print("C'est GAGNÉ !")
        break
    if i == 10:
        print("C'est PERDU ! Le nombre était :",nombreAleatoire)
    else:
        print("Il vous reste",10-i,"essais.")

