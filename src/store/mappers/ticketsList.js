
export default function ticketsListMapStateToProps(state) {
    return {
        tickets: state.displayedTickets
    }
}
