import { EventActions, EventActionsEnum, IEventState } from "./types";

const initialState: IEventState = {
  guests: [],
  events: []
}

export default function eventReducer(state = initialState, action: EventActions): IEventState  {
  switch (action.type) {
    case EventActionsEnum.SET_GUESTS:
      return { ...state, guests: action.payload }
    case EventActionsEnum.SET_EVENTS:
      return { ...state, events: action.payload }
    default:
      return state
  }
}