package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.LocationsEntity;
import io.github.theroppex.festivali.data.repositories.LocationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationsService {
    private final LocationsRepository locationsRepository;

    @Autowired
    public LocationsService(LocationsRepository locationsRepository) {
        this.locationsRepository = locationsRepository;
    }

    public Iterable<LocationsEntity> getLocations() {
        return this.locationsRepository.findAll();
    }

    public LocationsEntity getLocation(Integer id) {
        return this.locationsRepository.findOne(id);
    }

    public LocationsEntity createOrUpdate(LocationsEntity location) {
        return this.locationsRepository.save(location);
    }

    public void delete(Integer location) {
        this.locationsRepository.delete(location);
    }

    public Iterable<LocationsEntity> getLocationsForPlace(Integer id) {
        return this.locationsRepository.getLocationsForPlace(id);
    }
}
