export const ADD_TICKET = 'ADD_TICKET';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const CHANGE_SORTING = 'CHANGE_SORTING';

const saveTicketToLocalStorage = (ticket) =>
{
    let tickets = localStorage.getItem('ticketsList') ? JSON.parse(localStorage.getItem('ticketsList')) : [];
    tickets.push(ticket);
    localStorage.setItem('ticketsList', JSON.stringify(tickets));
}

export const addTicketAction = (ticket) =>
{
    saveTicketToLocalStorage(ticket);
    return {
        type: ADD_TICKET,
        ticket: ticket
    }
};

export const toggleFilterAction = (filter) => ({
    type: TOGGLE_FILTER,
    filter: filter
})

export const changeSortingAction = (sorting) => ({
    type: CHANGE_SORTING,
    sorting: sorting
})