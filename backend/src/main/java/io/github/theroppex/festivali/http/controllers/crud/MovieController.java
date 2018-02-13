package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.MoviesEntity;
import io.github.theroppex.festivali.services.entityservices.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movies/")
public class MovieController {
    private final MovieService movieService;


    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<MoviesEntity> getMovies() {
        return this.movieService.getMovies();
    }

    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public MoviesEntity getMovie(@PathVariable("id") Integer id) {
        return this.movieService.getMovie(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public MoviesEntity createMovie(@RequestBody MoviesEntity movie) {
        return this.movieService.createOrUpdate(movie);
    }
}
