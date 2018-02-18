package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.data.entities.ProjectionsEntity;
import io.github.theroppex.festivali.data.entities.ReservationsEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface ProjectionsRepository extends CrudRepository<ProjectionsEntity, Integer> {
    @Query("select p.festival from ProjectionsEntity p where p.id = :id")
    FestivalsEntity getFestivalByProjectionId(@Param("id") Integer id);

    @Query("select p from ProjectionsEntity p where p.date >= :date and p.movie.title = :title")
    Iterable<ProjectionsEntity> getProjectionsByMovie(@Param("date") Date date, @Param("title") String title);

    @Query("select r.user from ReservationsEntity r where r.projection.id = :id and r.cancelled = false")
    List<UsersEntity> getUsersWithActiveReservations(@Param("id") Integer id);

    @Query("select p from ProjectionsEntity p where p.date >= CURRENT_DATE and p.cancelled = false")
    Iterable<ProjectionsEntity> getActiveProjections();

    @Query("select r from ReservationsEntity r where r.cancelled = false and r.projection.id = :id")
    List<ReservationsEntity> getActiveReservationsForProjection(@Param("id") Integer id);
}
