package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.MessagesEntity;
import org.springframework.data.repository.CrudRepository;

public interface MessagesRepository extends CrudRepository<MessagesEntity, Integer> {
}
