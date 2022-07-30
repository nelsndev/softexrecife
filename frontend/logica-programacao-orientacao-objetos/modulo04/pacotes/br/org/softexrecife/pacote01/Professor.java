package br.org.softexrecife.pacote01;

public class Professor {

    private String nome;
    private String titulacao;

    public Professor(String nome, String titulacao) {
        this.nome = nome;
        this.titulacao = titulacao;
    }

    public String getNome() {
        return this.nome;
    }

    public String getTitulacao() {
        return this.titulacao;
    }
}
