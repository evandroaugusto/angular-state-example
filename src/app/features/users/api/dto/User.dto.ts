type Name = {
  firstname: string,
  lastname: string
};

type Address = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
};

export type UserDTO =             {
  id: number,
  email: string,
  username: string,
  password: string,
  name: Name,
  address: Address,
  phone: string
}