package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.CommentsEntity;
import org.springframework.data.repository.CrudRepository;

public interface CommentsRepository extends CrudRepository<CommentsEntity, Integer> {
}
