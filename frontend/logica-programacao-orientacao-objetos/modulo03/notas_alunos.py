import pandas as pd

dataframe = pd.read_csv("notas_alunos.csv")

medias = (dataframe["nota_1"] + dataframe["nota_2"]) / 2

dataframe["media"] = medias

dataframe.loc[dataframe["media"] >= 7, "situacao"] = "APROVADO"
dataframe.loc[dataframe["media"] < 7, "situacao"] = "REPROVADO"
dataframe.loc[dataframe["faltas"] > 5, "situacao"] = "REPROVADO"

dataframe.to_csv("alunos_situacao.csv", index=False)

maior_faltas = dataframe["faltas"].max()
media_geral = dataframe["media"].mean()
maior_media = dataframe["media"].max()

print("Maior número de faltas: " + str(maior_faltas))
print("Média geral dos alunos: " + "{:.2f}".format(media_geral))
print("Maior média: " + str(maior_media))
