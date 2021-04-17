import {Card} from "react-bootstrap";

const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'});
    return formatter.format(price)
}
export default function Ticket({ticket: {company='', price = 0, transfers = 0}})
{
    return <Card className="m-3">
        <Card.Body>
            <div className="col d-flex justify-content-between">
                <div className="text-left">
                    <strong>Price: </strong>
                    {formatPrice(price)}
                </div>
                <div className="text-right">{company}</div>
            </div>
            <div className="col text-left">
                <strong>Number of transfers: </strong><span>{transfers}</span>
            </div>
        </Card.Body>
    </Card>
}