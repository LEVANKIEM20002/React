import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userService'


class UserManage extends Component {

    constructor(props){
        super(props);
        this.state={
            arrUses:[]
        }
    }

    async componentDidMount() {
        let response  = await getAllUsers('ALL');
        if(response && response.errCode === 0){
            this.setState({
                 arrUses: response.users
            } )

        } 

    }



    render() {
        console.log('check render ', this.state)
        let arrUses = this.state.arrUses;
        return (
            <div className="users-container">
                <div className='title text-center'>Manage users with Eric</div>
                <div className='users-table mt-3 mx-1'>
                <table id="customers">
                     <tr>
                       <th>Email</th>
                       <th>First name</th>
                       <th>Last name</th>
                       <th>Address</th>
                       <th>Actions</th>
                     </tr>
                   
                        {
                            arrUses && arrUses.map((item, index) =>{
                                console.log('kiem check map ', item, index)
                                return(
                                    <tr> 
                                      <td>{item.email}</td>
                                      <td>{item.firstName}</td>
                                      <td>{item.lastName}</td>
                                      <td>{item.address}</td>
                                      <td>
                                        <button className='btn-edit'><i className='fas fa-pencil-alt'></i></button>
                                        <button className='btn-delete'><i className='fas fa-trash'></i></button>
                                      </td>
                                      </tr>
                                ) 
                            }) 
                        } 

                      
                </table>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
