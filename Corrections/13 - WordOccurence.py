"""

    écrire l'algorithme permettant de compter le nombre d'occurence des mots dans un fichier

"""

import sys, string

def printDico(dico : dict):
    for elem in sorted (dico.items(), key=lambda kv:( kv[1], kv[0])):
        print(elem)

f = open("./mots.txt", "r")

dico = dict()

countLine = 0
countWord = 0
for line in f:
    countLine += 1
    for word in line.split():
        countWord +=1
        word = word.translate(str.maketrans('', '', string.punctuation))
        if word in dico :
            dico[word] += 1
        else:
            dico[word] = 1
f.close()
printDico(dico)
print("Le document est constitué de ", countLine, " ligne(s), ", countWord," mots dont ", len(dico), " mots différents")
