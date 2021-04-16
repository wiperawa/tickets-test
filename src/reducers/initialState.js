
const PRICE_ASC = 'price_asc';
const PRICE_DESC = 'price_desc';
const ALL_TRANSFERS = 4;

export  const initialState = {
    tickets: [],
    sorting: PRICE_ASC,
    filter: {
        transfers: ALL_TRANSFERS
    }
}