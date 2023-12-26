export type CreateUserParams = {
  username: string;
  password: string;
}

export type UpdateUserParams = {
  username: string;
  password: string;
}

export type CreateEstablishmentParams = {
  name: string;
  cnpj: string;
  address: string;
  phone: string
  qtdMotorcycle: number;
  qtdCar: number;
}

export type UpdateEstablishmentParams = {
  name: string;
  cnpj: string;
  address: string;
  phone: string
  qtdMotorcycle: number;
  qtdCar: number;
}

export type CreateVehicleParams = {
  brand: string;
  model: string;
  color: string;
  plate: string;
  type: string;
}

export type UpdateVehicleParams = {
  brand: string;
  model: string;
  color: string;
  plate: string;
}