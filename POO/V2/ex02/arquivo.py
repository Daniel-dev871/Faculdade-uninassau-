nome = input("diga seu nome")
idade = int(input("digite sua idade"))
try:
    nome = str()
except ValueError:
    print("erro nome")
try:
    idade = float()
    print(idade)
except ValueError:
    print("erro, digite um numero")
