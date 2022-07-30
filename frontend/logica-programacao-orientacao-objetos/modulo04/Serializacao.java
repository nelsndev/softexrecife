import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.IOException;
import java.io.FileInputStream;
import java.io.ObjectInputStream;
import java.io.Serializable;

public class Serializacao {

    public static void main(String[] args) {
        try {
            // Serializacao
            FileOutputStream fos = new FileOutputStream("arquivo.txt");
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            Aluno alunoSerializado = new Aluno("Fulano", "12345");
            oos.writeObject(alunoSerializado);
            oos.close();

            // Desserializacao
            FileInputStream fis = new FileInputStream("arquivo.txt");
            ObjectInputStream ois = new ObjectInputStream(fis);
            Aluno alunoDesserializado = (Aluno) ois.readObject();
            ois.close();

            System.out.println("Nome: " + alunoDesserializado.getNome() + 
                    ", Matricula: " + alunoDesserializado.getMatricula());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class Aluno implements Serializable {

    private String nome;
    private String matricula;

    public Aluno(String nome, String matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }

    public String getNome() {
        return this.nome;
    }

    public String getMatricula() {
        return this.matricula;
    }
}
