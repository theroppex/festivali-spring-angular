package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.ReservationsEntity;
import io.github.theroppex.festivali.services.entityservices.ReservationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(method = RequestMethod.POST, value = "complete/{id}")
    public void completeReservation(@PathVariable("id") Integer id) {
        this.reservationsService.fulfillReservation(id);
    }

    @RequestMapping(method = RequestMethod.GET, value = "seller/")
    public Iterable<ReservationsEntity> getReservationsForSeller() {
        return this.reservationsService.getReservationsForSeller();
    }
}
