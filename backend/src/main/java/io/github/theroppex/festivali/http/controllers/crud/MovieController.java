package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.MoviesEntity;
import io.github.theroppex.festivali.services.entityservices.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
