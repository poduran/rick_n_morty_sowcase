import { Gender, Species, Status } from "./character-info";

export type QueryFilter = {

}

export type characterFilters = {
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
}

export type EpisodeFilters = {
    name:string;
    episode: string;
}

export type LocationFilters = {
    name:string;
    type:string;
    dimension: string;
}