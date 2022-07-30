package br.org.softexrecife.pacote02;

public class Computador {

    private Long id;
    private int memoriaRAM;
    private int ssd;

    public Computador(Long id, int memoriaRAM, int ssd) {
        this.id = id;
        this.memoriaRAM = memoriaRAM;
        this.ssd = ssd;
    }

    public Long getId() {
        return this.id;
    }

    public int getMemoriaRAM() {
        return this.memoriaRAM;
    }

    public int getSSD() {
        return this.ssd;
    }
}
