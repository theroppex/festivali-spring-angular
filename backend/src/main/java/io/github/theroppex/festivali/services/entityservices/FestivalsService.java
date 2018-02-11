package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.data.entities.MoviesEntity;
import io.github.theroppex.festivali.data.repositories.FestivalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Calendar;

@Service
public class FestivalsService {
    private final FestivalsRepository festivalsRepository;

    @Autowired
    public FestivalsService(FestivalsRepository festivalsRepositroy) {
        this.festivalsRepository = festivalsRepositroy;
    }

    public Iterable<FestivalsEntity> getFestivals() {
        return this.festivalsRepository.findAll();
    }

    public FestivalsEntity getFestival(Integer id) {
        return this.festivalsRepository.findOne(id);
    }

    public FestivalsEntity createOrUpdate(FestivalsEntity festival) {
        return this.festivalsRepository.save(festival);
    }

    public Iterable<FestivalsEntity> getFestivalsByMovieName(String movieName) {
        return this.festivalsRepository.getFestivalsByMovieName(movieName);
    }

    public Iterable<MoviesEntity> getMoviesByFestival(Integer id) {
        return this.festivalsRepository.getMoviesByFestival(id);
    }

    public Iterable<FestivalsEntity> getValidFestivals() {
        Date date = new Date(Calendar.getInstance().getTime().getTime());
        return this.festivalsRepository.getValidFestivals(date);
    }

    public Iterable<FestivalsEntity> getValidFestivalsByMovie(String title) {
        Date date = new Date(Calendar.getInstance().getTime().getTime());
        return this.festivalsRepository.getValidFestivalsByMovie(date, title);
    }
}
