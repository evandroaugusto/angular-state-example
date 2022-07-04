export type UserName = {
  firstname: string;
  lastname: string;
}

export type LatLng = {
  lat: string;
  long: string;
}

export type Address = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: LatLng;
}

export type UserDTO = {
  id?: number;
  email: string;
  username: string;
  password: string;
  name?: UserName;
  address?: Address;
  phone?: string;
}