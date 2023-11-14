export type EpisodeInfo = {
    info:    Info;
    results: Result[];
}

export type Info = {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export type Result = {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}
