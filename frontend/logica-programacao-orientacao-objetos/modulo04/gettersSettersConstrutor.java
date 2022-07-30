class Comentario {
    
    private String autor;
    private String comentario;

    public Comentario(String autor, String comentario) { // construtor
        this.autor = autor;
        this.comentario = comentario;
        if (comentario.length() > 300)
            throw new IllegalArgumentException("Comentário deve possuir no máximo 300 caracteres.");
    }

    public String getAutor() {
        return this.autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getComentario() {
        return this.comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}

public class gettersSettersConstrutor {

    public static void main(String[] args) {
        String comentario = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate " +
        "hendrerit elit in fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. " +
        "Nulla ut hendrerit dui, vel accumsan est. Aenean luctus massa a neque efficitur vulputate.";
        String autor = "Fulano";
        
        Comentario c = new Comentario(autor, comentario);
        
        System.out.println(c.getAutor());
        System.out.println(c.getComentario());
    }
}
