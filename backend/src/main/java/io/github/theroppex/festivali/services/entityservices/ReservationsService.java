package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.ReservationsEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.data.repositories.ReservationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class ReservationsService {
    private static final Integer MAX_NUMBER_OF_CANCELLED_RESERVATIONS = 3;
    private static final int CODE_LEN = 10;
    private static final String SEED = "QWERTYUIOPASDFGHJKLZXCVBNM";
    private static final Random rand = new Random();

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

        reservation.setCode(getCode());
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

    public Iterable<ReservationsEntity> getReservationsForSeller() {
        return this.reservationsRepository.getReservationsForSeller();
    }

    private static int getRand() {
        return rand.nextInt(SEED.length());
    }

    private static String getCode() {
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < CODE_LEN; i++) {
            sb.append(SEED.charAt(getRand()));
        }
        return sb.toString();
    }
}
