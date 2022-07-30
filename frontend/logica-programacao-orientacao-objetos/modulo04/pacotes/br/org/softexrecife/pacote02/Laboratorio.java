package br.org.softexrecife.pacote02;

public class Laboratorio {

    private String nome;
    private Computador[] computadores;

    public Laboratorio(String nome, Computador[] computadores) {
        this.nome = nome;
        this.computadores = computadores;
    }

    public String getNome() {
        return this.nome;
    }

    public Computador[] getComputadores() {
        return this.computadores;
    }
}
