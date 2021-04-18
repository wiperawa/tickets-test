import {ADD_TICKET, CHANGE_FILTER, CHANGE_SORTING} from "../actions";
import {ALL_TRANSFERS, initialState, PRICE_ASC} from "./initialState";

const sortTickets = (tickets, order) => tickets.sort(
    (a, b) => ( (order === PRICE_ASC) ? (a.price - b.price) : b.price - a.price )
);

const toggleFilter = (currentFilters, filter) => {
    if (filter === ALL_TRANSFERS && !currentFilters.includes(ALL_TRANSFERS)) {
        return [ALL_TRANSFERS];
    }

    if (currentFilters.includes(filter)) {
        currentFilters.splice(currentFilters.indexOf(filter), 1);
    } else {
        currentFilters.push(filter);
        if (currentFilters.includes(ALL_TRANSFERS)) {
            currentFilters.splice(currentFilters.indexOf(ALL_TRANSFERS), 1);
        }
    }
    if (!currentFilters.length) {
        currentFilters.push(ALL_TRANSFERS);
    }
    return [...currentFilters];
}

const applyFilters = (tickets, filters) => {
    let newTickets = [];
    if (filters.includes(ALL_TRANSFERS)) {
        return [...tickets];
    }
    filters.forEach((filter) => {
        newTickets = newTickets.concat(tickets.filter((ticket) => (parseInt(ticket.transfers) === filter)));
    })

    return newTickets;
}

export default function reducer (state = initialState, action)
{
    let newState = {}

    switch(action.type) {
        case ADD_TICKET:
            newState = {...state, tickets: [...state.tickets, action.ticket]}
            break;
        case CHANGE_FILTER:
            const newFilters = toggleFilter(state.filters, action.filter);
            newState = {...state, filters: [...newFilters]}
            break;
        case CHANGE_SORTING:
           newState = {...state, sorting: action.sorting}
            break;
        default:
            newState = {...state}
            break;
    }

    return {
        ...newState,
        displayedTickets: sortTickets(
            applyFilters(newState.tickets, newState.filters),
            newState.sorting
        )
    };
}