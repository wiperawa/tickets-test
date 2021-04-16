export const ADD_TICKET = 'ADD_TICKET';
export const FETCH_TICKETS = 'GET_TICKETS';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_ORDER = 'CHANGE_ORDER';

export const fetchTicketsAction = (offset) => ({
    type: FETCH_TICKETS,
    offset: offset
})

export const addTicketAction = (ticket) => ({
    type: ADD_TICKET,
    ticket: ticket
})

export const changeFilter = (filter) => ({
    type: CHANGE_FILTER,
    filter: filter
})

export const ChangeOrder = (order) => ({
    type: CHANGE_ORDER,
    order: order
})