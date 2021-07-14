export interface ILocationRes {
    title: string;
    location_type: string;
    woeid: number;
    latt_long?: string; // Ex: latt_long: "52.883560,-1.974060"
}

export interface ILocation {
    id: number;
    title: string;
    type: string;
}

export interface ILocationPayload {
    location: string;
}
