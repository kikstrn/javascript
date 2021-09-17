"""

ecrire l'algorithme qui inverse l'ordre des mots d'une phrase

"""


phrase = input("Saisir une phrase :")
print(phrase)
reverseLetter = ""
reverseWord = ""

# Pour inverser les lettres (non demander dans la consigne)
# for letter in phrase:
#     reverseLetter = letter + reverseLetter

# Pour inverser les mots
phrase = phrase.split()
for word in phrase:
    reverseWord = word +" "+ reverseWord

print(reverseLetter)
print(reverseWord)