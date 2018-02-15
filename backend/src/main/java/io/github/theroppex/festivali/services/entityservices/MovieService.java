package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.CommentsEntity;
import io.github.theroppex.festivali.data.entities.MoviesEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.data.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Iterable<MoviesEntity> getMovies() {
        return this.movieRepository.findAll();
    }

    public MoviesEntity createOrUpdate(MoviesEntity movie) {
        return this.movieRepository.save(movie);
    }

    public MoviesEntity getMovie(Integer id) {
        return this.movieRepository.findOne(id);
    }

    public Iterable<CommentsEntity> getComments(Integer id) {
        return this.movieRepository.getComments(id);
    }

    public Boolean canComment(Integer movie) {
        UsersEntity user = (UsersEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return this.movieRepository.canComment(user.getUserId(), movie);
    }
}
