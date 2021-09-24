import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionsEnum } from "./types";

export const EventActionCreators = {
  setGuests: (payload: IUser[]) => ({ type: EventActionsEnum.SET_GUESTS, payload }),
  setEvents: (payload: IEvent[]) => ({ type: EventActionsEnum.SET_EVENTS, payload }), 
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      
    } catch (error) {
      console.error(error);
      
    }
  }
}