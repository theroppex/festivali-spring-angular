package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.ProjectionsEntity;
import io.github.theroppex.festivali.data.repositories.ProjectionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectionsService {
    private final ProjectionsRepository projectionsRepository;

    @Autowired
    public ProjectionsService(ProjectionsRepository projectionsRepository) {
        this.projectionsRepository = projectionsRepository;
    }

    public ProjectionsEntity createOrUpdate(ProjectionsEntity projection) {
        return this.projectionsRepository.save(projection);
    }
}
