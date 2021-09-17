"""

    écrire l'algorithme permettant de compter le nombre d'occurence des mots dans un fichier

"""

import sys, string

def printDico(dico : dict):
    for index, mot in enumerate(dico):
        print(index, " -> ", mot, " : ", dico[mot] )

f = open(sys.argv[1], "r")

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
printDico(dico)
print("Le document est constitué de ", countLine, " ligne(s), ", countWord," mots dont ", len(dico), " mots différents")
f.close()