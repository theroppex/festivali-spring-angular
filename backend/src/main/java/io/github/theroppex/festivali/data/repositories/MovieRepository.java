package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.CommentsEntity;
import io.github.theroppex.festivali.data.entities.MoviesEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MovieRepository extends CrudRepository<MoviesEntity, Integer> {
    @Query("select c from CommentsEntity c where c.movie.id = :id")
    public Iterable<CommentsEntity> getComments(@Param("id") Integer id);

    @Query("select case when count(r) > 0 then 'true' else 'false' end from ReservationsEntity r where r.projection.movie.id = :movie and r.user.userId = :user and r.fulfilled = true")
    public Boolean canComment(@Param("user") Integer user, @Param("movie") Integer movie);
}
