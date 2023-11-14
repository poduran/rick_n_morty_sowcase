export type LocationInfo = {
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
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}
