package io.github.theroppex.festivali.data.entities;

import org.hibernate.criterion.Projections;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "festivals", schema = "pia")
public class FestivalsEntity implements Serializable {
    private int id;
    private String name;
    private String description;
    private Date start;
    private Date end;
    private boolean visible;
    private PlacesEntity place;
    private Set<ProjectionsEntity> projections = new HashSet<>();

    @Id
    @Column(name = "id", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "start")
    public Date getStartDate() {
        return start;
    }

    public void setStartDate(Date startDate) {
        this.start = startDate;
    }

    @Basic
    @Column(name = "end")
    public Date getEndDate() {
        return end;
    }

    public void setEndDate(Date endDate) {
        this.end = endDate;
    }

    @Basic
    @Column(name = "visible")
    public boolean getVisible() {
        return visible;
    }

    public void setVisible(boolean visible) {
        this.visible = visible;
    }

    @ManyToOne(optional = false)
    @JoinColumn(name = "place", referencedColumnName = "id", nullable = false)
    public PlacesEntity getPlace() {
        return this.place;
    }

    public void setPlace(PlacesEntity place) {
        this.place = place;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FestivalsEntity that = (FestivalsEntity) o;
        return id == that.id &&
                visible == that.visible &&
                Objects.equals(name, that.name) &&
                Objects.equals(description, that.description) &&
                Objects.equals(start, that.start) &&
                Objects.equals(end, that.end);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, description, start, end, visible);
    }


    @OneToMany(targetEntity = ProjectionsEntity.class, mappedBy = "festival", fetch = FetchType.EAGER)
    public Set<ProjectionsEntity> getProjections() {
        return this.projections;
    }

    public void setProjections(Set<ProjectionsEntity> projections) {
        this.projections = projections;
    }

    public void addProjection(ProjectionsEntity projection) {
        projection.setFestival(this);
        this.projections.add(projection);
    }
}
