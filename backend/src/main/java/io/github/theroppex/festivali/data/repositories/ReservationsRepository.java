package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.ReservationsEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ReservationsRepository extends CrudRepository<ReservationsEntity, Integer> {
    @Query("select count(r) from ReservationsEntity r where r.user.userId = :id and r.cancelled = true")
    public Integer getNumberOfCancelledReservations(@Param("id") Integer id);

    @Query("select case when count(r) > 0 then 'true' else 'false' end from ReservationsEntity r where r.user.userId = :user and r.projection.id = :projection")
    public Boolean isReserved(@Param("user") Integer user, @Param("projection") Integer projection);

    @Query("select r from ReservationsEntity r where r.cancelled = false and r.fulfilled = false and r.projection.date >= current_date")
    public Iterable<ReservationsEntity> getReservationsForSeller();

    @Query("select r from ReservationsEntity r where r.user.userId = :id")
    public Iterable<ReservationsEntity> getReservationsForUser(@Param("id") Integer id);
}
