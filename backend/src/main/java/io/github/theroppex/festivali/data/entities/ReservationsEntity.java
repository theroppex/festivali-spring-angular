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
    private boolean stopped;
    private UsersEntity user;
    private ProjectionsEntity projection;
    private Date date;
    private int tickets;
    private String code;

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
    @Column(name = "stopped")
    public boolean getStopped() {
        return this.stopped;
    }

    public void setStopped(boolean stopped) {
        this.stopped = stopped;
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

    @Basic
    @Column(name = "code")
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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
