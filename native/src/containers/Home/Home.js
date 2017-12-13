import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import './Home.css';
import Aux from '../../hoc/Aux/Aux';
import Navbar from '../../components/Navbar/Navbar';
import SearchForm from '../../components/SearchForm/SearchForm';
import Footer from '../../components/Footer/Footer';
import googleMap from '../../components/GoogleMap/GoogleMap';


class Home extends Component {
    state = {
        language: 'english'
    }
    // methods

    render() {
        return(
            <Aux>
                <Navbar />
                <Header as='h1' textAlign='center'>Please fill out the form below to obtain a list of specific resources you may need.</Header>
                <SearchForm />
                <googleMap 
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <Footer />
            </Aux>
        )
    }
}

export default Home;