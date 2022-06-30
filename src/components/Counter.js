import React, { Component } from 'react';
import { connect } from "react-redux"
import { Container } from "reactstrap"

class Counter extends Component {
    render() {
        return (

            <div>

                <Container align="center">
                    <h1>Counter Yapısı</h1>
                    <h1>{this.props.counter}</h1>
                </Container>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return { counter: state.counterReducer }
}

export default connect(mapStateToProps)(Counter);