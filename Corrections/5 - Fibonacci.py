"""
Ecrire l'algorithme de la suite de fibonacci:

C'est une suite définie par Un = Un-1 + Un-2

Si vous trouvez ça trop facile, passez par une fonction récursive

"""
def fibo(n, un=1, un1=1):
    print(un)
    return fibo(n-1,un1,un1+un) if n else un

fibo(10)