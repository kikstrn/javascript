"""

    écrire l'algorithme qui permet de compter le nombre de mots présents dans une phrase

"""

phrase = input("écrire une phrase: ")

arr = phrase.split()
compteur = 0
for mot in arr:
    compteur += 1

print(compteur)