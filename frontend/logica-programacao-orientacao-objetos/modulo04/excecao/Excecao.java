import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Excecao {

    private static int FIM_DO_ARQUIVO = -1;

    public static void main(String[] args) {
        try {
            File arquivo = new File("texto.txt");
            FileInputStream fis = new FileInputStream(arquivo);
            int c = fis.read();
            while (c != FIM_DO_ARQUIVO) {
                System.out.print((char) c);
                c = fis.read();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println();
    }
}
