package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.PlacesEntity;
import io.github.theroppex.festivali.data.repositories.PlacesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlacesService {
    private final PlacesRepository placesRepository;

    @Autowired
    public PlacesService(PlacesRepository placesRepository) {
        this.placesRepository = placesRepository;
    }

    public Iterable<PlacesEntity> getPlaces() {
        return this.placesRepository.findAll();
    }

    public PlacesEntity getPlace(Integer id) {
        return this.placesRepository.findOne(id);
    }
}
