import {connect} from "react-redux";
import FiltersMapStateToProps from "../store/mappers/Filters";
import {Card, Form} from "react-bootstrap";
import {ALL_TRANSFERS, NO_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS} from "../reducers/initialState";
import {changeFilter} from "../actions";

function Filters ({filters, dispatch})
{

    console.log(filters);
    const toggleFilter = (filter) => {
        dispatch(changeFilter(filter));
    }
    return (
        <div className="col">
            <Card>
                <Card.Header>
                    Filter:
                </Card.Header>
                <Card.Body className="text-left">
                    <Form.Check
                        type="checkbox"
                        value="all"
                        label="All"
                        checked={filters.includes(ALL_TRANSFERS)}
                        onChange={() => toggleFilter(ALL_TRANSFERS)}
                    />

                    <Form.Check
                        type="checkbox"
                        label="No transfers"
                        checked={filters.includes(NO_TRANSFERS)}
                        onChange={() => toggleFilter(NO_TRANSFERS)}
                    />

                    <Form.Check
                        type="checkbox"
                        label="1 Transfer"
                        checked={filters.includes(ONE_TRANSFER)}
                        onChange={() => toggleFilter(ONE_TRANSFER)}
                    />

                    <Form.Check
                        type="checkbox"
                        label="2 Transfers"
                        checked={filters.includes(TWO_TRANSFERS)}
                        onChange={() => toggleFilter(TWO_TRANSFERS)}
                    />

                    <Form.Check
                        type="checkbox"
                        label="3 Transfers"
                        checked={filters.includes(THREE_TRANSFERS)}
                        onChange={() => toggleFilter(THREE_TRANSFERS)}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(FiltersMapStateToProps)(Filters)
