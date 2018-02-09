import { Projection } from "./projection";

export class Movie {
    id : number;
    title : string;
    rating : number;
    count : number;
    projections : Projection[];
}