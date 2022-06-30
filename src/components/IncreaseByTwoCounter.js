import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterAction"
import { connect } from "react-redux"
import { Button } from 'reactstrap';

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <Button color="danger" onClick={e => {
                    this.props.dispatch(increaseByTwoCounter());
                }}>
                    2 Arttır
                </Button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);