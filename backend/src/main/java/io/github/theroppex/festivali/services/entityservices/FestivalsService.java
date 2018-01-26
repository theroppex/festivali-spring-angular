package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.data.repositories.FestivalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
