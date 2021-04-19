import { connect } from 'react-redux';
import ticketsListMapStateToProps from "../store/mappers/ticketsList";
import Ticket from "./Ticket";

function TicketsList({tickets})
{

    return (tickets.length ?
        tickets.map((ticket, idx) => (<Ticket key={idx} ticket={ticket} />)) :
            <div className="text-center">There is no tickets available</div>
    )
}

export default connect(ticketsListMapStateToProps)(TicketsList)