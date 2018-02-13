import { User } from "./user";
import { Projection } from "./projection";

export class Reservation {
    id : number;
    cancelled : boolean;
    fulfilled : boolean;
    date : Date;
    tickets : number;
    user : User;
    projection : Projection;
}