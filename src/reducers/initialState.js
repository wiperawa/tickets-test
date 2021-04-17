
export const PRICE_ASC = 'price_asc';
export const PRICE_DESC = 'price_desc';
export const ALL_TRANSFERS = 'all';
export const NO_TRANSFERS = 0;
export const ONE_TRANSFER = 1;
export const TWO_TRANSFERS = 2;
export const THREE_TRANSFERS = 3;

const tickets = localStorage.getItem('ticketsList') ? JSON.parse(localStorage.getItem('ticketsList')) : [];

export  const initialState = {
    tickets: [...tickets],
    sorting: PRICE_ASC,
    filter: {
        transfers: ALL_TRANSFERS
    }
}