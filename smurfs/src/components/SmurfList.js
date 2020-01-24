import React from 'react';
import { connect } from 'react-redux';
import {fetchActivity} from './actions'
import axios from 'axios';
import Form from './Form';

const SmurfList= props => {


    

    
    const handleSubmit = (value) => {
        console.log("Submitting...", value)
        axios.post("http://localhost:3333/smurfs", value)
        .then(response => {
            console.log(response)
            props.fetchActivity(value)
        })
        .catch(error => console.log(error.response))
        console.log(value)
    }

    const addNewSmurf = smurf => {
        const newSmurf = {
            id: Date.now(),
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
        }
        handleSubmit(newSmurf)
    }



    return (
        <div>
            <button onClick={props.fetchActivity}>Load Smurf Village</button>
            <h2>Add to your Village!</h2>
            <Form addNewSmurf={addNewSmurf} />

          {
            props.smurf && props.smurf.map(data=> {
            return (
                <div key={data.id}>
                    <h2>Name:{data.name}</h2>
                    <p>Height: {data.height}</p>
                    <p>Age: {data.age}</p>
                </div>
              )
            })
            }
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        smurf:state.smurf
    }
}

export default  connect(mapStateToProps, {fetchActivity})(SmurfList);