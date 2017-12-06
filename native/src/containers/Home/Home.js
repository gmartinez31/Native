import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Navbar from '../../components/Navbar/Navbar';
import SearchForm from '../../components/SearchForm/SearchForm'
import Footer from '../../components/Footer/Footer'

class Home extends Component {
    state = {
        language: 'english'
    }
    // methods

    render() {
        return(
            <Aux>
                <Navbar />
                <div><h1>Choose your language.</h1></div>
                <SearchForm />
                <Footer />
            </Aux>
        )
    }
}

export default Home;