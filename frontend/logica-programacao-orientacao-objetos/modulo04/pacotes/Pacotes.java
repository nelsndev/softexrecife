import br.org.softexrecife.pacote01.Aluno;
import br.org.softexrecife.pacote01.Professor;
import br.org.softexrecife.pacote02.Computador;
import br.org.softexrecife.pacote02.Laboratorio;

public class Pacotes {

    public static void main(String[] args) {
        Aluno a = new Aluno("Fulano", "12345");
        Professor p = new Professor("Beltrano", "Mestre em I.A.");
        Computador c1 = new Computador(1L, 8192, 240);
        Computador c2 = new Computador(2L, 4096, 120);
        Computador[] computadores = {c1, c2};
        Laboratorio l = new Laboratorio("lab01", computadores);
    }
}
