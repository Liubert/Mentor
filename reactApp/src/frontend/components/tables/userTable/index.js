import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose} from 'redux'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {fetchUsers} from '../../../actions'
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Spinner from '../../spinner'

import ConfirmDialog from '../../dialogsTemplates/confirmDialog';
import UserEditDialog from '../../dialogsTemplates/userEditDialog';




class UserTable extends Component {
    constructor (props) {
        super(props);
        this.props.fetchUsers();
        this.openUpdateUserDialog = this.openUpdateUserDialog.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.closeConfirmDialog = this.closeConfirmDialog.bind(this);

        this.handleUserEdit = this.handleUserEdit.bind(this);
        this.cancelUserEdit = this.cancelUserEdit.bind(this);

    }
    state = {
        isConfirmDialogOpen: false,
        isUserEditDialogOpen: false
    };

    handleUserEdit(editedUser, user) {
        console.log(editedUser);
        console.log(user);

        this.setState({
            isUserEditDialogOpen: false
        });
    }
    cancelUserEdit() {
        this.setState({
            isUserEditDialogOpen: false
        });
    }

    showConfirmDialog(onConfirm, onReject, title, text){
        this.setState({
            isConfirmDialogOpen: true,
            onConfirm,
            onReject,
            title,
            text
        });
    };

    openUpdateUserDialog(user){
        this.setState({
            isUserEditDialogOpen: true,
            userBeingUpdated: user
        });
    }

    deleteUser (userId) {
        this.setState({
            isConfirmDialogOpen: false
        });

        alert(`Action for delete user with id ${userId}`);
    };
    closeConfirmDialog = () => {
        alert('canceled');
        this.setState({
            isConfirmDialogOpen: false
        });
    };

    render () {
        let TableRows = [];
        if(this.props.users.length){
            TableRows = this.props.users.map((user) =>
            <TableRow key={user._id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user._id}</TableCell>
                <TableCell>
                    <IconButton  onClick={() => this.openUpdateUserDialog(user)}>
                        <EditIcon  />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        onClick={() => this.showConfirmDialog(() =>
                            this.deleteUser(user._id),
                            this.closeConfirmDialog,
                            'Delete User from Mentor App?',
                            `Are you sure? ${user.firstName} won't be happy about this`) }>
                        <DeleteIcon  />
                    </IconButton>
                </TableCell>
            </TableRow>
            );
        }
        const UserTable = (
            <div>
                <Paper style={{margin:"30px 0px"}}>
                    <Table className={'table-font'}>
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Id</TableCell>
                                <TableCell>Update</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TableRows}
                        </TableBody>
                    </Table>
                </Paper>
                <div>
                    <UserEditDialog
                        onUserEdit={this.handleUserEdit}
                        onCancel={this.cancelUserEdit}
                        user={this.state.userBeingUpdated}
                        isOpen={this.state.isUserEditDialogOpen}/>

                    <ConfirmDialog
                        isOpen={this.state.isConfirmDialogOpen}
                        title={this.state.title}
                        bodyText={this.state.text}
                        onConfirm={this.state.onConfirm}
                        onReject={this.state.onReject} />
                </div>
            </div>
        );
               return (
                   <Spinner loading={this.props.loading} component={UserTable} />
               );
           }



}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.data,
        loading:state.users.loading,
        ownProps: ownProps
    }
};

const mapDispatchToProps = {
    fetchUsers
};
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(UserTable)