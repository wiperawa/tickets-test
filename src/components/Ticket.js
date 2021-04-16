import {Card} from "react-bootstrap";

export default function Ticket({ticket: {name='', cost = 0, transfers = 0}}) {
    return <Card className="m-3">
        <Card.Body>
            <div className="col d-flex justify-content-between">
                <div className="text-left">{cost}</div>
                <div className="text-right">{name}</div>
            </div>

        </Card.Body>
    </Card>
}