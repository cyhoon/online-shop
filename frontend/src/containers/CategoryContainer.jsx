import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Category Container
            </div>
        );
    };
};

const mapStateToProps = () => {

};

export default connect(mapStateToProps, null)(CategoryContainer);