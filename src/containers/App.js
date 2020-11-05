import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import SButton from '../components/SButton';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
            title: 'robofriends'
        };
    }

    componentDidMount() {
        if (this.state.title === 'robofriends') {
            fetch('https://raw.githubusercontent.com/LazaroIII/Users/main/db.json')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        } else {
            fetch('https://gist.githubusercontent.com/rubenCodeforges/ef1f0ce6a055bbb985c0848d8b0c04d5/raw/f91e3d0d2a6d14233fb8fd70c893821effbac5a6/users.json')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        }

    }



    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    onToggle = () => {
        const title = this.state.title;
        this.setState({title: document.querySelector('.f1').innerHTML = (title === 'monsterfriends') ? 'robofriends' : 'monsterfriends'});
        if (title === 'monsterfriends') {
            fetch('https://raw.githubusercontent.com/LazaroIII/Users/main/db.json')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        } else if (title === 'robofriends') {
            fetch('https://gist.githubusercontent.com/rubenCodeforges/ef1f0ce6a055bbb985c0848d8b0c04d5/raw/f91e3d0d2a6d14233fb8fd70c893821effbac5a6/users.json')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        }

    }


    render() {
        const { robots, searchfield, title } = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        return !robots.length ? <h1 className='tc'>Loading your friends</h1> :
        (
            <React.Fragment>
                <div className='tc'>
                    <h1 className='f1'>robofriends</h1>
                    
                    <SButton Toggle={this.onToggle}/>
                    
                    <SearchBox searchChange={this.onSearchChange} type={title}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList type={title} robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            </React.Fragment>
        );


        }
        

    }

export default App;