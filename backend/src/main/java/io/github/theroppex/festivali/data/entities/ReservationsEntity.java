package io.github.theroppex.festivali.data.entities;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "reservations", schema = "pia")
public class ReservationsEntity {
    private int id;
    private boolean cancelled;
    private boolean fulfilled;
    private UsersEntity user;
    private ProjectionsEntity projection;
    private Date date;
    private int tickets;

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
    @Column(name = "cancelled")
    public boolean isCancelled() {
        return cancelled;
    }

    public void setCancelled(boolean cancelled) {
        this.cancelled = cancelled;
    }

    @Basic
    @Column(name = "fulfilled")
    public boolean isFulfilled() {
        return fulfilled;
    }

    public void setFulfilled(boolean fulfilled) {
        this.fulfilled = fulfilled;
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
    @Column(name = "tickets")
    public int getTickets() {
        return tickets;
    }

    public void setTickets(int tickets) {
        this.tickets = tickets;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReservationsEntity that = (ReservationsEntity) o;
        return id == that.id &&
                cancelled == that.cancelled &&
                fulfilled == that.fulfilled;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, cancelled, fulfilled);
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
    @JoinColumn(name = "projection", referencedColumnName = "id", nullable = false)
    public ProjectionsEntity getProjection() {
        return projection;
    }

    public void setProjection(ProjectionsEntity projection) {
        this.projection = projection;
    }
}
