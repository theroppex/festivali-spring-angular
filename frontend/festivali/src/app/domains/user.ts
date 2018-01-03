import { Role } from './role';

export class User {
    userId : number;
    username : string;
    name : string;
    lastname : string;
    email : string;
    active : boolean;
    banned : boolean;
    roles : Role[];
}