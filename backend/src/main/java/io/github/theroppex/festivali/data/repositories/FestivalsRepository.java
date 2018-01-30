package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface FestivalsRepository extends CrudRepository<FestivalsEntity, Integer> {
    @Query("select p.festival from ProjectionsEntity  p where p.movie.title = :movieName and p.cancelled = false and p.festival.visible = true")
    Iterable<FestivalsEntity> getFestivalsByMovieName(@Param("movieName") String movieName);
}
