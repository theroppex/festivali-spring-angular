package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.ReservationsEntity;
import org.springframework.data.repository.CrudRepository;

public interface ReservationsRepository extends CrudRepository<ReservationsEntity, Integer> {
}
