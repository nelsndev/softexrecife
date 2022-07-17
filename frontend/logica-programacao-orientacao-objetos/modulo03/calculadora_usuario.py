def calculadora():
  while (True):
    print("1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair")
    opcao = int(input("\nOpção: "))

    if (opcao == 1):
      valor1 = float(input("Primeiro valor: "))
      valor2 = float(input("Segundo valor: "))
      print("Resultado: " + str(valor1 + valor2) + "\n")
    elif (opcao == 2):
      valor1 = float(input("Primeiro valor: "))
      valor2 = float(input("Segundo valor: "))
      print("Resultado: " + str(valor1 - valor2) + "\n")
    elif (opcao == 3):
      valor1 = float(input("Primeiro valor: "))
      valor2 = float(input("Segundo valor: "))
      print("Resultado: " + str(valor1 * valor2) + "\n")
    elif (opcao == 4):
      valor1 = float(input("Primeiro valor: "))
      valor2 = float(input("Segundo valor: "))
      if (valor2 == 0.0):
        print("Não se pode dividir número por zero\n")
        continue
      print("Resultado: " + str(valor1 / valor2) + "\n")
    elif (opcao == 0):
      break
    else:
      print("Essa opção não existe\n")
