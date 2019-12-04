import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// card
// list

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75" alt=""/>
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    //constructor
    // this

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>

                <Card/>
            </div>
        )
    }
}

/*const App = ({title}) => (
    <div className="header">{title}</div>
);*/

export default App;
