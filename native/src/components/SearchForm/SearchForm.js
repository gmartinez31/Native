import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


// import Button from '../Button/Button';
import './SearchForm.css';
import axios from 'axios';

class SearchForm extends Component {
    state = {
        language: 'english'
    }

    submitSearchHandler = (event) => {
        event.preventDefault();
        let query = //data from form
        //normally would not include API key in code like this but for this simple project it's alright
        axios.post('https://maps.googleapis.com/maps/api/place/textsearch/json?query=&key=AIzaSyAtxDITNL0x-8V5gnUAmeHoXrQ9YAZVzm0', )
    
    }

    render() {

        return(
            <Form 
                className='homeform' 
                size='massive'
                onSubmit={this.submitSearchHandler}>
                <Form.Field>
                    <label>Your preferred language:</label>
                    <input />
                    <label>Location:</label>
                    <input />
                    <label>Type of resource needed:</label>
                    <input />
                </Form.Field>
                <Button 
                    color='black'
                    onClick={this.submitSearchHandler}>Submit</Button>
            </Form>
        )
    }
}

export default SearchForm;