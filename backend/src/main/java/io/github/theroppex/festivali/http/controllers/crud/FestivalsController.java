package io.github.theroppex.festivali.http.controllers.crud;


import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.services.entityservices.FestivalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/festivals/")
public class FestivalsController {
    private final FestivalsService festivalsService;

    @Autowired
    public FestivalsController(FestivalsService festivalsService) {
        this.festivalsService = festivalsService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<FestivalsEntity> getFestivals() {
        return this.festivalsService.getFestivals();
    }

    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public FestivalsEntity getFestival(@PathVariable("id") Integer id) {
        return this.festivalsService.getFestival(id);
    }


    @RequestMapping(method = RequestMethod.POST)
    public FestivalsEntity createFestival(@RequestBody FestivalsEntity festival) {
        return this.festivalsService.createOrUpdate(festival);
    }

    @RequestMapping(method = RequestMethod.PATCH)
    public FestivalsEntity updateFestival(@RequestBody FestivalsEntity festival) {
        return this.festivalsService.createOrUpdate(festival);
    }

    @RequestMapping(method = RequestMethod.GET, value = "movie")
    public Iterable<FestivalsEntity> getFestivalsByMovieName(@RequestParam("title") String movieName) {
        return this.festivalsService.getFestivalsByMovieName(movieName);
    }
}
