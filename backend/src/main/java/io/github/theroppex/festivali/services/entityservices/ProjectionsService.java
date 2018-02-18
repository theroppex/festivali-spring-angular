package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.FestivalsEntity;
import io.github.theroppex.festivali.data.entities.ProjectionsEntity;
import io.github.theroppex.festivali.data.entities.ReservationsEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.data.repositories.ProjectionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

@Service
public class ProjectionsService {
    private static final String EDITED_MESSAGE = "Projection has been edited:";
    private final ProjectionsRepository projectionsRepository;
    private final MessagesService messagesService;
    private final ReservationsService reservationsService;

    @Autowired
    public ProjectionsService(ProjectionsRepository projectionsRepository, MessagesService messagesService, ReservationsService reservationsService) {
        this.projectionsRepository = projectionsRepository;
        this.messagesService = messagesService;
        this.reservationsService = reservationsService;
    }

    public ProjectionsEntity createOrUpdate(ProjectionsEntity projection) {
        return this.projectionsRepository.save(projection);
    }

    public ProjectionsEntity getProjection(Integer id) {
        return this.projectionsRepository.findOne(id);
    }

    public ProjectionsEntity update(ProjectionsEntity projection) {
        List<UsersEntity> users = this.projectionsRepository.getUsersWithActiveReservations(projection.getId());
        this.messagesService.broadcast(users, EDITED_MESSAGE + projection.getDate() + "::" + projection.getHour() + ":00");

        FestivalsEntity festival = this.projectionsRepository.getFestivalByProjectionId(projection.getId());
        projection.setFestival(festival);
        return this.projectionsRepository.save(projection);
    }

    public Iterable<ProjectionsEntity> getProjectionsByMovie(String title) {
        Date date = new Date(Calendar.getInstance().getTime().getTime());
        return this.projectionsRepository.getProjectionsByMovie(date, title);
    }

    public Iterable<ProjectionsEntity> getActiveProjections() {
        return this.projectionsRepository.getActiveProjections();
    }

    public void cancelProjection(ProjectionsEntity projection) {
        projection.setCancelled(true);

        List<ReservationsEntity> reservations = this.projectionsRepository.getActiveReservationsForProjection(projection.getId());
        for(ReservationsEntity r : reservations) {
            r.setStopped(true);
            this.messagesService.unicast(r.getUser(), "Reservation " + r.getCode() + " has been cancelled");
            this.reservationsService.createOrUpdate(r);
        }

        FestivalsEntity festival = this.projectionsRepository.getFestivalByProjectionId(projection.getId());
        projection.setFestival(festival);

        this.projectionsRepository.save(projection);
    }
}
