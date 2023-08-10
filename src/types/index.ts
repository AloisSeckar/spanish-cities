type Nullable<T> = T | null;
type Coordinates = { latitude: Nullable<number>, longitude: Nullable<number> };
type Links = {
  wikipedia: Nullable<string>;
  geohack: Nullable<string>;
}

export interface optionsAutonomy {
  code?: string | number;
  name?: string;
  with_provinces?: boolean;
  with_cities?: boolean;
}

export interface optionsProvince {
  code?: string | number;
  code_autonomy?: string | number;
  name?: string;
  with_autonomy?: boolean;
  with_cities?: boolean;
}

export interface OptionsCity {
  code?: string | number;
  code_autonomy?: string | number;
  code_province?: string | number;
  name?: string;
  with_autonomy?: boolean;
  with_province?: boolean;
}

export interface Autonomy {
  code: string;
  name: string;
  flag: Nullable<string>;
  coat_of_arms: Nullable<string>;
  hymn: Nullable<string>;
  coordinates: Coordinates;
  links: Links;
  provinces?: Province[]
  cities?: City[]
}

export interface Province {
  code: string;
  name: string;
  code_autonomy: string;
  autonomy?: Autonomy
  cities?: City[]
}

export interface City {
  code: string;
  name: string;
  code_autonomy: string;
  code_province: string;
  autonomy?: Autonomy
  province?: Province
}
