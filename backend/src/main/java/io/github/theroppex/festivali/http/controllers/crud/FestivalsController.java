package io.github.theroppex.festivali.http.controllers.crud;


import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.services.entityservices.FestivalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
