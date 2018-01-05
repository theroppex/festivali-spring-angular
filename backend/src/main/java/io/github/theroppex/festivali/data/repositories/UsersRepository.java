package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;


public interface UsersRepository extends JpaRepository<UsersEntity, Integer> {

    public boolean existsByUsername(String username);

    public UsersEntity findFirstByUsername(String username);

    public Collection<UsersEntity> findAllByActive(Boolean active);
}
