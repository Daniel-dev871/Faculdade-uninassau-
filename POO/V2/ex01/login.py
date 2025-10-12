while True:
    nome = input("Digite seu nome de usuário: ")
    senha = input("Digite sua senha: ")

    if senha == nome:
        print("Erro: a senha não pode ser igual ao nome de usuário. Tente novamente!")
    else:
        print("Cadastro realizado com sucesso!")
        break
