class Aluno:
  total_de_alunos = 0 # variável estática

  def __init__(self, nome, matricula):
    self.nome = nome
    self.matricula = matricula
    Aluno.total_de_alunos = Aluno.total_de_alunos + 1

aluno_1 = Aluno("Aluno 1", "123")
aluno_2 = Aluno("Aluno 2", "456")
aluno_3 = Aluno("Aluno 3", "789")

print(aluno_1.total_de_alunos)
print(aluno_2.total_de_alunos)
print(aluno_3.total_de_alunos)
print(Aluno.total_de_alunos)
