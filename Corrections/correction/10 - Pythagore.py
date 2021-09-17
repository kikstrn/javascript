"""

Ecrire l'algorithme qui permet de vérifier si un triangle est rectangle

Rappel un triangle est rectangele si il respecte le triplet pythagoricien a²+b²=c²


"""
arr = []

# Tant que l'utilisateur n'a pas rentrer 3 chiffres il recommence
while len(arr) != 3:
    numbers = input("Entrez les 3 longueurs (séparée d'un espace) :")
    arr = numbers.split()  # split est une méthode qui s'applique sur des chaines de caractères pour les transformer en tableau de "mots"
    # "15 2 8" devient [ "15" , "2" , "8" ]

arr.sort() # on trie le tableau pour que le dernier nombre soit le plus grand

if int(arr[0])**2 + int(arr[1])**2 == int(arr[2])**2 :
    print("C'est un triangle rectangle")
else:
    print("Ce n'est PAS un triangle rectangle")