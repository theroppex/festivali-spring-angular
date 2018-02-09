import { Place } from "./place";
import { Projection } from "./projection";

export class Festival {
    id : number;
    name : string;
    description : string;
    visible : boolean;
    place : Place;
    startDate : Date;
    endDate : Date;
    projections : Projection[];
}