def comp(n):
    if(n==1):
        return [0,1]
    else:
        return comp(n-1)

print(comp(4))