#
"""
    Ecrire un programme de tri a bulle:

    Le principe du tri a bulle est de comparer un element d'un tableau avec son voisin suivant,
    si l'element est plus grand que son voisin, on inverse les positions
    sinon passe à l'élément suivant

"""
#

arr = [8 , 5 , 1 , 7 , 6 , 4]
flag = True

print(arr)

while flag:
    flag = False
    for i in range(len(arr)-1):
        if arr[i+1]<arr[i]:
            flag = True
            temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = temp

print(arr)
