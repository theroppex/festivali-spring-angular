import { Festival } from "./festival";
import { Location } from "./location";
import { Movie } from "./movie";

export class Projection {
    id : number;
    festival : Festival;
    location : Location;
    movie : Movie;
    date : Date;
    hour : number;
    tickets : number;
    cancelled : boolean;
}