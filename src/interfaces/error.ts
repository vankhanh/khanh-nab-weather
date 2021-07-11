export interface IErrorWrapper extends Error {
    [key: string]: any;
}

export interface IErrorPayload {
    error: IErrorWrapper;
}

export interface IErrorAction {
    type: string;
    payload: IErrorPayload;
}

export type ErrorState = IErrorWrapper | null;
