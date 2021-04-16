import { connect } from 'react-redux';
import ticketsListMapStateToProps from "../store/mappers/ticketsList";
import Ticket from "./Ticket";

function TicketsList({tickets, dispatch})
{
    console.log(tickets);

    return ( tickets.length ?
        tickets.map((ticket) => (<Ticket ticket={ticket} />)) :
            <div className="text-center text-white">There is no tickets available</div>
    )
}

export default connect(ticketsListMapStateToProps)(TicketsList)