import { User } from "./user";
import { Movie } from "./movie";

export class Comment {
    id : number;
    post : string;
    movie : Movie;
    user : User;
}