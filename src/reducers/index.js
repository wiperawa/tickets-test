import {ADD_TICKET, FETCH_TICKETS, CHANGE_FILTER, CHANGE_ORDER} from "../actions";
import {initialState} from "./initialState";

function applyFiltersSorting(tickets)
{

    return tickets;
}

export default function reducer (state = initialState, action)
{
    switch(action.type) {
        case ADD_TICKET:
            return {...state, tickets: [...state.tickets, action.ticket]}

        case FETCH_TICKETS:
            return state.tickets;

        case CHANGE_FILTER:

            return {...state, tickets: applyFiltersSorting(state.tickets), filter: action.filter}

        case CHANGE_ORDER:
            return {...state, tickets: applyFiltersSorting(state.tickets), sorting: action.sorting}

        default:
            return state;
    }
}