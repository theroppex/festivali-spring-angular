package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.data.repositories.FestivalsRepositroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FestivalsService {
    private final FestivalsRepositroy festivalsRepositroy;

    @Autowired
    public FestivalsService(FestivalsRepositroy festivalsRepositroy) {
        this.festivalsRepositroy = festivalsRepositroy;
    }

    public Iterable<FestivalsEntity> getFestivals() {
        return this.festivalsRepositroy.findAll();
    }

    public FestivalsEntity getFestival(Integer id) {
        return this.festivalsRepositroy.findOne(id);
    }
}
