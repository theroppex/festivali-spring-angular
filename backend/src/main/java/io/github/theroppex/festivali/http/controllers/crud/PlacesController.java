package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.PlacesEntity;
import io.github.theroppex.festivali.services.entityservices.PlacesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(method = RequestMethod.POST)
    public PlacesEntity createPlace(@RequestBody PlacesEntity place) {
        return this.placesService.createOrUpdate(place);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void deletePlace(@RequestBody PlacesEntity place) {
        this.placesService.delete(place);
    }
}
