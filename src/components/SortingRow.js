import {connect} from "react-redux";
import OrderRowMapStateToProps from "../store/mappers/SortingRow";
import {PRICE_ASC, PRICE_DESC} from "../reducers/initialState";
import {Button} from "react-bootstrap";
import {changeSortingAction} from "../actions";

function SortingRow({sorting, dispatch})
{

    return (
        <div className="col d-flex justify-content-between">
            <Button
                variant={sorting === PRICE_ASC ? "primary" : "outline-primary"}
                onClick={() => dispatch(changeSortingAction(PRICE_ASC))}
            >
                Order by Price Ascending
            </Button>
            <Button
                variant={sorting === PRICE_DESC ? "primary" : "outline-primary"}
                onClick={() => dispatch(changeSortingAction(PRICE_DESC))}
            >
                Order by Price Descending
            </Button>
        </div>
    )
}

export default connect(OrderRowMapStateToProps)(SortingRow)

