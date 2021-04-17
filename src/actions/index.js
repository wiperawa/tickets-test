export const ADD_TICKET = 'ADD_TICKET';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_SORTING = 'CHANGE_SORTING';

const safeTicketToLocalStorage = (ticket) =>
{
    let tickets = localStorage.getItem('ticketsList') ? JSON.parse(localStorage.getItem('ticketsList')) : [];
    tickets.push(ticket);
    localStorage.setItem('ticketsList', JSON.stringify(tickets));
}

export const addTicketAction = (ticket) =>
{
    safeTicketToLocalStorage(ticket);
    return {
        type: ADD_TICKET,
        ticket: ticket
    }
};

export const changeFilter = (filter) => ({
    type: CHANGE_FILTER,
    filter: filter
})

export const changeSorting = (sorting) => ({
    type: CHANGE_SORTING,
    sorting: sorting
})