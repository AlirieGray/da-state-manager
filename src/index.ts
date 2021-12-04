import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({
  worldStates: [
    {
      name: "default",
      ficLinks: [],
      warden: {
        name: "Kallian Tabris",
        origin: "City Elf",
        class: "Warrior",
        romance: "Alistair",
        ruler: "Anora",
      },
      hawke: {
        name: "Marian Hawke",
        class: "Mage",
        romance: "Isabela",
        sided: "mages",
      },
      inky: {
        name: "Herah Adaar",
        class: "Rogue",
        romance: "Cassandra",
        disband: true,
      },
    },
    
  ],
}))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
