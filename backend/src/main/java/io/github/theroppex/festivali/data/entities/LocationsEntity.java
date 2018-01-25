package io.github.theroppex.festivali.data.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "locations", schema = "pia", catalog = "")
public class LocationsEntity {
    private int id;
    private String name;
    private double lon;
    private double lat;
    private PlacesEntity place;

    @Id
    @Column(name = "id")
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
    @Column(name = "lon")
    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    @Basic
    @Column(name = "lat")
    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    @ManyToOne(targetEntity = PlacesEntity.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER, optional = false)
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
        LocationsEntity that = (LocationsEntity) o;
        return id == that.id &&
                Double.compare(that.lon, lon) == 0 &&
                Double.compare(that.lat, lat) == 0 &&
                Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, lon, lat);
    }
}
