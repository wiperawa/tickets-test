import {connect} from "react-redux";
import FiltersMapStateToProps from "../store/mappers/Filters";
import {Card, Form} from "react-bootstrap";

function Filters ({filter, dispatch})
{

    return (
        <div className="col">
            <Card>
                <Card.Header>
                    Filter:
                </Card.Header>
                <Card.Body className="text-left">
                    <Form.Check type="checkbox" value="all" label="All"  />
                    <Form.Check type="checkbox" label="No transfers" />
                    <Form.Check type="checkbox" label="1 Transfer" />
                    <Form.Check type="checkbox" label="2 Transfers" />
                    <Form.Check type="checkbox" label="3 Transfers" />
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(FiltersMapStateToProps)(Filters)
