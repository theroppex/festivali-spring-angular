package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.data.entities.MoviesEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.sql.Date;

public interface FestivalsRepository extends CrudRepository<FestivalsEntity, Integer> {
    @Query("select p.festival from ProjectionsEntity  p where p.movie.title = :movieName and p.cancelled = false and p.festival.visible = true")
    Iterable<FestivalsEntity> getFestivalsByMovieName(@Param("movieName") String movieName);

    @Query("select distinct p.movie from ProjectionsEntity p where p.festival.id = :id")
    Iterable<MoviesEntity> getMoviesByFestival(@Param("id") Integer id);

    @Query("select f from FestivalsEntity f where f.visible = true and f.endDate >= :date")
    public Iterable<FestivalsEntity> getValidFestivals(@Param("date")Date date);

    @Query("select distinct f.festival from ProjectionsEntity f where f.festival.endDate >= :date and f.festival.visible = true and f.movie.title like :title")
    public Iterable<FestivalsEntity> getValidFestivalsByMovie(@Param("date")Date date, @Param("title") String title);
}
