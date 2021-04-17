import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import TicketsList from "./components/TicketsList";
import {useState} from "react";
import AddTicketModal from "./components/AddTicketModal";
import SortingRow from "./components/SortingRow";
import Filters from "./components/Filters";

function App() {

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="App">
            <AddTicketModal handleClose={closeModal} show={isModalOpen}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="App-container container">
                <button className="btn btn-info" onClick={openModal}>Add Ticket</button>
                <div className="row mt-4">
                    <div className="col-md-3 filters-row">
                        <Filters/>
                    </div>
                    <div className="col-md-9">
                        <SortingRow />
                        <TicketsList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect()(App);
