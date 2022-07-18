from enum import Enum

class candidato(Enum):
  X = 889
  Y = 847
  Z = 515

votos_x = 0
votos_y = 0
votos_z = 0
votos_brancos_nulos = 0

while (True):
  try:
    print()
    voto = int(input("Qual o seu voto? "))
  except:
    print("Voto inválido. Vote novamente.")
    continue
  
  if (voto == candidato.X.value):
    votos_x = votos_x + 1
  elif (voto == candidato.Y.value):
    votos_y = votos_y + 1
  elif (voto == candidato.Z.value):
    votos_z = votos_z + 1
  else:
    votos_brancos_nulos = votos_brancos_nulos + 1

  resposta = input("Deseja finalizar a votação(s ou n)? ")
  if (resposta == "s") or (resposta == "S"):
    break

maior_votacao = max(votos_x, votos_y, votos_z)

if (maior_votacao == votos_x):
  vencedor = candidato.X.name
elif (maior_votacao == votos_y):
  vencedor = candidato.Y.name
else:
  vencedor = candidato.Z.name

print()
print("Vencedor: " + vencedor)
print("Candidato X: " + str(votos_x) + " votos")
print("Candidato Y: " + str(votos_y) + " votos")
print("Candidato Z: " + str(votos_z) + " votos")
print("Brancos e nulos: " + str(votos_brancos_nulos) + " votos")
