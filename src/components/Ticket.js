import {Card} from "react-bootstrap";

export default function Ticket({ticket: {name='', cost = 0, transfers = 0}}) {
    return <Card className="m-3">
        <Card.Body>
            <div className="col">
                <div className="price-col">{cost}</div>
            </div>

        </Card.Body>
    </Card>
}