import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import TicketsList from "./components/TicketsList";
import {addTicketAction} from "./actions";

function App({dispatch}) {
    const addTicket = () => {
        dispatch(addTicketAction({name: 'test', price: 10000, transfers: 3}))
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-container container">
          <button className="btn btn-info" onClick={addTicket}>Add Ticket</button>
        <TicketsList />
      </div>
    </div>
  );
}

export default connect()(App);
