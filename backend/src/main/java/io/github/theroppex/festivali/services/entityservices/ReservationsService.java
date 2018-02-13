package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.ReservationsEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.data.repositories.ReservationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class ReservationsService {
    private static final Integer MAX_NUMBER_OF_CANCELLED_RESERVATIONS = 3;

    private final ReservationsRepository reservationsRepository;

    @Autowired
    public ReservationsService(ReservationsRepository reservationsRepository) {
        this.reservationsRepository = reservationsRepository;
    }

    public ReservationsEntity createOrUpdate(ReservationsEntity reservation) {
        UsersEntity user = (UsersEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if(this.reservationsRepository.getNumberOfCancelledReservations(user.getUserId()) > MAX_NUMBER_OF_CANCELLED_RESERVATIONS)
            return null;

        if(this.reservationsRepository.isReserved(user.getUserId(), reservation.getProjection().getId()))
            return null;

        reservation.setUser(user);
        return this.reservationsRepository.save(reservation);
    }

    public ReservationsEntity cancelReservation(Integer id) {
        ReservationsEntity reservation = this.reservationsRepository.findOne(id);
        UsersEntity user = (UsersEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(user.getUserId() == reservation.getUser().getUserId()) {
            reservation.setCancelled(true);
        }
        return this.reservationsRepository.save(reservation);
    }

    public ReservationsEntity fulfillReservation(Integer id) {
        ReservationsEntity reservation = this.reservationsRepository.findOne(id);
        reservation.setFulfilled(true);
        return this.reservationsRepository.save(reservation);
    }
}
