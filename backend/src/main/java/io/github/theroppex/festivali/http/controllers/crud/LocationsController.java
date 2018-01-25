package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.LocationsEntity;
import io.github.theroppex.festivali.services.entityservices.LocationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/locations/")
public class LocationsController {
    private final LocationsService locationsService;

    @Autowired
    public LocationsController(LocationsService locationsService) {
        this.locationsService = locationsService;
    }


    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public LocationsEntity getLocation(@PathVariable("id") Integer id) {
        return this.locationsService.getLocation(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<LocationsEntity> getLocations() {
        return this.locationsService.getLocations();
    }
}
