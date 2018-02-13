package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.services.entityservices.ReservationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/reservations/")
public class ReservationsController {
    private final ReservationsService reservationsService;

    @Autowired
    public ReservationsController(ReservationsService reservationsService) {
        this.reservationsService = reservationsService;
    }
}
