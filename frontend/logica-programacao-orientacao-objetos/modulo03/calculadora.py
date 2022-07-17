def calculadora(a, b, operacao):
  if (operacao == 1):
    return a + b
  elif (operacao == 2):
    return a - b
  elif (operacao == 3):
    return a * b
  elif (operacao == 4) and (b != 0):
    return a / b
  else:
    return 0
