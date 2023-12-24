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
  qtdMotorcicle: number;
  qtdCar: number;
}

export type UpdateEstablishmentParams = {
  name: string;
  cnpj: string;
  address: string;
  phone: string
  qtdMotorcicle: number;
  qtdCar: number;
}