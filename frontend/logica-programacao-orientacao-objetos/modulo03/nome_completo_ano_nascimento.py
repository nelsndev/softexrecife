from datetime import date

nome_completo = input("Nome completo: ")

repita = True
while (repita):
  try:
    ano_nascimento = int(input("Ano de Nascimento: "))
  except:
    print("\nErro: o ano informado é inválido\n")
    continue
  
  if (ano_nascimento >= 1922) and (ano_nascimento <= 2021):
    repita = False
  else:
    print("\nErro: o ano informado deve está entre 1922 e 2021\n")

print()
print(nome_completo)
print(str(date.today().year - ano_nascimento) + " anos")
