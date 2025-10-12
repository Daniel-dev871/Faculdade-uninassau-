notas = []  

for i in range(4):
    nota = float(input(f"Digite a nota {i + 1}: "))
    notas.append(nota)

media = sum(notas) / 4

print("Sua media é:", media)