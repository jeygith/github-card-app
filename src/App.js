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


const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile}/>)}

    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt=""/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component {
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" placeholder="Github Username"/>
                    <button>Add card</button>
                </form>
            </div>
        )
    }
}

class App extends React.Component {
    //constructor
    // this

    /*constructor(props) {
        super(props);
        this.state = {
            profiles: testData
        };
    }*/
    // class properties without using the constructor method
    state = {
        profiles: testData
    }

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form/>
                <CardList profiles={this.state.profiles}/>
            </div>
        )
    }
}

/*const App = ({title}) => (
    <div className="header">{title}</div>
);*/

export default App;
