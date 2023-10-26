import { UserDTO } from "./user.dto";

export class SingInDTO implements Pick<UserDTO,'email' | 'password'> {
    email: string;
    password: string;

}
