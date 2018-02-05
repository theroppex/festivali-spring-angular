package io.github.theroppex.festivali.data.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "projections", schema = "pia")
public class ProjectionsEntity {
    private int id;
    private Date date;
    private int hour;
    private int tickets;
    private boolean cancelled;
    private MoviesEntity movie;
    private FestivalsEntity festival;
    private LocationsEntity location;

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
    @Column(name = "date")
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Basic
    @Column(name = "hour")
    public int getHour() {
        return hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }

    @Basic
    @Column(name = "tickets")
    public int getTickets() {
        return tickets;
    }

    public void setTickets(int tickets) {
        this.tickets = tickets;
    }

    @Basic
    @Column(name = "cancelled")
    public boolean getCancelled() {
        return cancelled;
    }

    public void setCancelled(boolean cancelled) {
        this.cancelled = cancelled;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProjectionsEntity that = (ProjectionsEntity) o;
        return id == that.id &&
                hour == that.hour &&
                tickets == that.tickets &&
                cancelled == that.cancelled &&
                Objects.equals(date, that.date);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, date, hour, tickets, cancelled);
    }

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(name = "movie", referencedColumnName = "id", nullable = false)
    public MoviesEntity getMovie() {
        return movie;
    }

    public void setMovie(MoviesEntity moviesByMovie) {
        this.movie = moviesByMovie;
    }

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(name = "festival", referencedColumnName = "id", nullable = false)
    public FestivalsEntity getFestival() {
        return this.festival;
    }

    public void setFestival(FestivalsEntity festival) {
        this.festival = festival;
    }

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(name = "location", referencedColumnName = "id", nullable = false)
    public LocationsEntity getLocation() {
        return this.location;
    }

    public void setLocation(LocationsEntity location) {
        this.location = location;
    }
}
