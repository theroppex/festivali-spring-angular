package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.ReservationsEntity;
import io.github.theroppex.festivali.services.entityservices.ReservationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservations/")
public class ReservationsController {
    private final ReservationsService reservationsService;

    @Autowired
    public ReservationsController(ReservationsService reservationsService) {
        this.reservationsService = reservationsService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ReservationsEntity createReservation(@RequestBody ReservationsEntity res) {
        return this.reservationsService.createOrUpdate(res);
    }
}
