
export const PRICE_ASC = 'price_asc';
export const PRICE_DESC = 'price_desc';
export const ALL_TRANSFERS = 4;

const tickets = localStorage.getItem('ticketsList') ? JSON.parse(localStorage.getItem('ticketsList')) : [];

export  const initialState = {
    tickets: [...tickets],
    sorting: PRICE_ASC,
    filter: {
        transfers: ALL_TRANSFERS
    }
}