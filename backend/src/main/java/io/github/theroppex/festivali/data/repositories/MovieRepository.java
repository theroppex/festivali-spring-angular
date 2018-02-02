package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.MoviesEntity;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<MoviesEntity, Integer> {
}
