package io.github.theroppex.festivali.data.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "comments", schema = "pia", catalog = "")
public class CommentsEntity {
    private int id;
    private String post;
    private MoviesEntity movie;
    private UsersEntity user;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "post")
    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CommentsEntity that = (CommentsEntity) o;
        return id == that.id &&
                Objects.equals(post, that.post);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, post);
    }

    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "user_id", nullable = false)
    public UsersEntity getUser() {
        return user;
    }

    public void setUser(UsersEntity user) {
        this.user = user;
    }

    @ManyToOne
    @JoinColumn(name = "movie", referencedColumnName = "id", nullable = false)
    public MoviesEntity getMovie() {
        return movie;
    }

    public void setMovie(MoviesEntity movie) {
        this.movie = movie;
    }
}
