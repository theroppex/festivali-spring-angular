package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.CommentsEntity;
import io.github.theroppex.festivali.data.entities.MoviesEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MovieRepository extends CrudRepository<MoviesEntity, Integer> {
    @Query("select c from CommentsEntity c where c.movie.id = :id")
    public Iterable<CommentsEntity> getComments(@Param("id") Integer id);
}
