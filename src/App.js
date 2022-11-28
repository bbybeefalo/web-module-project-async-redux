import React from 'react';
import { connect } from 'react-redux'
import { getDoggo } from './actions/actions';
import './App.css';

function App(props) {

  const handleGetDoggo = () => {
    props.getDoggo();
  }

  return (
    <div className="App">
      <h1>Human Cheerer Upper</h1>
      <div className='container'>
      <img src={props.img} />
      <div>
      <button onClick = {handleGetDoggo}>see a good boi</button>
      </div>
      </div>
    </div>
    
   
  );
}

const mapStateToProps = (state) => {
  return{
    img: state.img,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { getDoggo })(App);