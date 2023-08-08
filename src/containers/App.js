import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots'; //複数のexportは{}でデストラクトする
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super(); //App component 呼び出し
        this.state = { //App の状態
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() { //サーバーからfetchして、受け取ったモノをrobotsに代入
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => { //入力をstateのsearchfieldにいれる
        this.setState({ searchfield: event.target.value }) //setStateを使う
    }

    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => { //filteredRobots関数わかるだろおい
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //配列内で条件に合う要素の配列を返す
        })

        if (this.state.robots.length === 0) { //fetchに時間がかかってるとき
            return (<h1 className='tc'>Now on loading...</h1>);
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll> {/*他のcomponentをwrapするcomponent props.childrenとしてwrapしてるcomponentを持つ */}
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} /> {/* CardListarrow関数にrobotsで渡してる*/}
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
