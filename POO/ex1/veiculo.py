class Veiculo:
    def pedir_dados(self):
        self.modelo = input('Qual o modelo do seu veiculo?')
        self.marca = input('Qual a marca do seu veiculo?')
    def pedir_consumo(self):
        self.gasolina = float(input('Quanto de gasolina foi gasto?'))
        self.distancia = float(input('Qual foi a distancia pecorrida?'))
    def exibir_dados(self):
        print(f'O seu modelo é {self.modelo} e a marca é {self.marca}.')
        print(f'Distância percorrida: {self.distancia} km')
        print(f'Gasolina gasta: {self.gasolina:.2f} litros')
        print(f'Consumo médio: {self.distancia / self.gasolina:.2f} km/l')