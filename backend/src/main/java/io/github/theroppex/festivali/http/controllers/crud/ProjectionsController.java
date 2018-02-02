package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.ProjectionsEntity;
import io.github.theroppex.festivali.services.entityservices.ProjectionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projections/")
public class ProjectionsController {
    private final ProjectionsService projectionsService;

    @Autowired
    public ProjectionsController(ProjectionsService projectionsService) {
        this.projectionsService = projectionsService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ProjectionsEntity createProjection(@RequestBody ProjectionsEntity projection) {
        return this.projectionsService.createOrUpdate(projection);
    }
}
