import {ADD_TICKET, CHANGE_FILTER, CHANGE_SORTING} from "../actions";
import {initialState, PRICE_ASC} from "./initialState";

//
function applyFilters(tickets)
{
    return tickets;
}

const sortTickets = (tickets, order) => tickets.sort(
    (a, b) => ( (order === PRICE_ASC) ? (a.price - b.price) : b.price - a.price )
);

export default function reducer (state = initialState, action)
{
    let newState = {}

    switch(action.type) {
        case ADD_TICKET:
            newState = {...state, tickets: [...state.tickets, action.ticket]}
            break;
        case CHANGE_FILTER:
            newState = {...state, filter: action.filter}
            break;
        case CHANGE_SORTING:
           newState = {...state, sorting: action.sorting}
            break;
        default:
            newState = {...state}
            break;
    }

    return {...newState, tickets: sortTickets([...newState.tickets], newState.sorting)};
}