package io.github.theroppex.festivali.data.util;

import io.github.theroppex.festivali.services.entityservices.ReservationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class OldReservationsResetter {
    private final static long RATE = 3600 * 24 * 1000; // once a day

    private final ReservationsService reservationsService;

    @Autowired
    public OldReservationsResetter(ReservationsService reservationsService) {
        this.reservationsService = reservationsService;
    }

    @Scheduled(fixedRate = RATE)
    public void reset() {
        System.out.println("Resseting old reservations");
        reservationsService.clearOldReservations();
    }
}
