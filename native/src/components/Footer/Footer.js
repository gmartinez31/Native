import React from 'react';

import { Segment, Container, Grid, Header } from 'semantic-ui-react';

const footer = (props) => {
    //stuff
    return(
            <Segment inverted vertical 
                style={{
                    padding: '5em 0em',
                    position: 'absolute',
                    right: '0',
                    bottom: '0',
                    left: '0'
                    }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h4' inverted
                                    style= {{
                                        textAlign: 'center'
                                    }}>Copyright © 2017 | Gustavo Martinez</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
    )
}

export default footer;