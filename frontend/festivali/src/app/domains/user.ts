import { Role } from './role';
import { Message } from './message'

export class User {
    userId : number;
    username : string;
    name : string;
    lastname : string;
    email : string;
    active : boolean;
    banned : boolean;
    roles : Role[];
    messages : Message[];
}