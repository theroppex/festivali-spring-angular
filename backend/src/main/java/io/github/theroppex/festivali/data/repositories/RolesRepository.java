package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.RolesEntity;
import org.springframework.data.repository.CrudRepository;

public interface RolesRepository extends CrudRepository<RolesEntity, Integer> {

    public RolesEntity findFirstByName(String name);
}
