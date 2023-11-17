import { Gender, Species, Status } from "./character-info";

export type QueryFilter = {
    charFilter: characterFilters;
    episodeFilter: EpisodeFilters;
    locFilter: LocationFilters;
}

export type characterFilters = {
    name?: string;
    status?: Status;
    species?: Species;
    type?: string;
    gender?: Gender;
    page?: number;
}

export type EpisodeFilters = {
    name?: string;
    episode?: string;
    page?: number;
}

export type LocationFilters = {
    name?: string;
    type?: string;
    dimension?: string;
    page?: number;
}