import React from 'react';
import { connect } from 'react-redux'
// import './App.css';
function App(props) {
    console.log(props);
    const handleInc = (evt) => {
        props.dispatch({
            type: 'INCREMENT'
            })
        }
        const handleDec = (evt) => {
            props.dispatch({
                type: 'DECREMENT'
            })
        };
        
    return (
        <div className="App">
        <header className="App-header">
        <h1>Counter</h1>
        <h1>{props.count}</h1>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        </header>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        count: state.number
    }
}
export default connect(mapStateToProps)(App);