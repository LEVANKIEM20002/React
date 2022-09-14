import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
// Import css files





class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2022 Le Van Kiem. More information, please visit my Github. 
                    <a  target='_blank' href='https://github.com/LEVANKIEM20002/React'>
                        &#8594; Click here &#8592;</a></p>               
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language, 
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);