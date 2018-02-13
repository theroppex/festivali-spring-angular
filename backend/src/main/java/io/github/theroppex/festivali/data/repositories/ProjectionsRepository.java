package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.data.entities.ProjectionsEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.sql.Date;

public interface ProjectionsRepository extends CrudRepository<ProjectionsEntity, Integer> {
    @Query("select p.festival from ProjectionsEntity p where p.id = :id")
    FestivalsEntity getFestivalByProjectionId(@Param("id") Integer id);

    @Query("select p from ProjectionsEntity p where p.date >= :date and p.movie.title = :title")
    Iterable<ProjectionsEntity> getProjectionsByMovie(@Param("date") Date date, @Param("title") String title);
}
