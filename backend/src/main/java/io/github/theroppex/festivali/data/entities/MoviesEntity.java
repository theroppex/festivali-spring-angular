package io.github.theroppex.festivali.data.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "movies", schema = "pia")
public class MoviesEntity {
    private int id;
    private String title;
    private int rating;
    private int count;
    private Set<ProjectionsEntity> projections = new HashSet<>();

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "rating")
    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Basic
    @Column(name = "count")
    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MoviesEntity that = (MoviesEntity) o;
        return id == that.id &&
                rating == that.rating &&
                count == that.count &&
                Objects.equals(title, that.title);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, title, rating, count);
    }

    @OneToMany(targetEntity = ProjectionsEntity.class, mappedBy = "movie", fetch = FetchType.EAGER)
    public Set<ProjectionsEntity> getProjections() {
        return this.projections;
    }

    public void setProjections(Set<ProjectionsEntity> projections) {
        this.projections = projections;
    }

    public void addProjection(ProjectionsEntity projection) {
        projection.setMovie(this);
        this.projections.add(projection);
    }
}
