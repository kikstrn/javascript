#
"""
    Ecrire un programme de tri par selection:

    Le tri par selection a pour principe de chercher l'element le plus petit d'un tableau puis de le placer au debut du tableau

    par exemple:

    tableau de depart: 8 , 5 , 1 , 7 , 6 , 4

    premiere iteration: 1 , 5 , 8 , 7 , 6 , 4

    deuxieme iteration: 1 , 4 , 8 , 7 , 6 , 5

    troisieme iteration: 1 , 4 , 5 , 7 , 6 , 8

    quatrieme iteration: 1 , 4 , 5 , 6 , 7 , 8

    cinquieme iteration: le tableau est dans l'ordre fin du tri

"""
#

arr = [8 , 5 , 1 , 7 , 6 , 4]

for i in range(len(arr)):
    min_idx = i
    # trouver le nombre le plus petit
    for j in range(i+1 , len(arr)):
        if arr[j] < arr[min_idx]:
            min_idx = j
    # inverser le nombre le plus petit et celui à la position i
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
print(arr)