package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.LocationsEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface LocationsRepository extends CrudRepository<LocationsEntity, Integer> {

    @Query("select l from LocationsEntity l where l.place.id = :id")
    public Iterable<LocationsEntity> getLocationsForPlace(@Param("id") Integer id);
}
