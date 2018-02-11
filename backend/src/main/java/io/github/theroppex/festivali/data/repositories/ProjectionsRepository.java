package io.github.theroppex.festivali.data.repositories;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.data.entities.ProjectionsEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ProjectionsRepository extends CrudRepository<ProjectionsEntity, Integer> {
    @Query("select p.festival from ProjectionsEntity p where p.id = :id")
    FestivalsEntity getFestivalByProjectionId(@Param("id") Integer id);
}
