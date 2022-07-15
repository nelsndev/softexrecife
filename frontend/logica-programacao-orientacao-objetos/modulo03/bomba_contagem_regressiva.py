import time

segundos = int(input("Segundos: "))

print("Iniciando contagem regressiva")

for i in range(segundos, 0, -1):
    print(i)
    time.sleep(1)

print("BUM!")
