package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.PlacesEntity;
import io.github.theroppex.festivali.services.entityservices.PlacesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/places/")
public class PlacesController {
    private final PlacesService placesService;

    @Autowired
    public PlacesController(PlacesService placesService) {
        this.placesService = placesService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<PlacesEntity> getPlaces() {
        return this.placesService.getPlaces();
    }

    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public PlacesEntity getPlace(@PathVariable("id") Integer id) {
        return this.placesService.getPlace(id);
    }
}
