export interface Characters {
  info?: Info;
  results?: Characters[];
}

export interface Info {
  count?: number;
  pages?: number;
  next?: string;
  prev?: null;
}

export interface Result {
  id?: number;
  url?: string;
  name?: string;
  type?: string;
  image?: string;
  created?: string;
  status?: Status;
  gender?: Gender;
  species?: Species;
  origin?: Location;
  episode?: string[];
  location?: Location;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}
export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface Character {
  id?: number;
  url?: string;
  name?: string;
  type?: string;
  image?: string;
  created?: string;
  status?: Status;
  gender?: Gender;
  species?: Species;
  origin?: Location;
  episode?: string[];
  location?: Location;
}

export interface Location {
  name: string;
  url: string;
}
