import { Place } from "./place";

export class Festival {
    id : number;
    name : string;
    description : string;
    visible : boolean;
    place : Place;
    startDate : Date;
    endDate : Date;
}