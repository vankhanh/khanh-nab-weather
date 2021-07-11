import { IAction } from "../../../../interfaces/action";
import { ILocationPayload } from "../../../../interfaces/location";

import { ActionTypeKeys } from "./actionTypes";

export interface ILocationAction extends IAction<ILocationPayload> {
    type: ActionTypeKeys.UPDATED_LOCATION;
}

export function updateLocationAction(location: string): ILocationAction {
    return {
        type: ActionTypeKeys.UPDATED_LOCATION,
        payload: {
            location,
        },
    };
}
