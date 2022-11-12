class AlunoCRUD {
  constructor() {
    this.id = 0;
    this.alunos = new Map();
  }

  create(aluno) {
    this.alunos.set(++this.id, aluno);
  }

  read(id) {
    return this.alunos.get(id);
  }

  readAll() {
    return Array.from(this.alunos.values());
  }

  update(id, aluno) {
    for (let key of this.alunos.keys()) {
      if (key === id) {
        this.alunos.set(id, aluno);
        break;
      }
    }
  }

  delete(id) {
    this.alunos.delete(id);
  }
}

module.exports = AlunoCRUD;
