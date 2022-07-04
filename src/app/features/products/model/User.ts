import { Address, UserDTO, UserName } from "../api/dto/User.dto";

type UserProps = { [P in keyof User]: User[P] };

export class User {
  id?: number;
  email: string;
  username: string;
  password: string;
  name?: UserName;
  address?: Address;
  phone?: string;

  constructor(model?:Partial<UserProps>) {
    this.id =  model?.id;
    this.email = model?.email || '';
    this.username = model?.username || '';
    this.password = model?.password || '';
    this.name = model?.name;
    this.address = model?.address;
    this.phone = model?.phone;
  }

  static fromDTO(dto: UserDTO): User {
    return new User(dto)
  }

  static toDTO(User: User): UserDTO {
    return User;
  }
}