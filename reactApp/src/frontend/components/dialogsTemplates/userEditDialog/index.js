import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class UserEditDialog extends React.Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = () => {
        const editedUser = {
            _id: this.props.user._id,
            email: this.email.value,
            firsName: this.firstName.value,
            lastName: this.lastName.value
        };
        this.props.onUserEdit(editedUser, this.props.user);
    };

    render() {

        return (
            <Dialog
                open={this.props.isOpen}
                onClose={this.props.onCancel}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{this.props.user.firstName+" "+this.props.user.lastName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are available to edit this user, but be careful! With great power comes great responsibility
                    </DialogContentText>
                    <TextField
                        autoFocus
                        defaultValue={this.props.user._id}
                        margin="dense"
                        label="User ID"
                        id="name"
                        disabled={true}
                        type="email"
                        fullWidth
                    />
                    <TextField
                        inputRef={el => this.email = el}
                        autoFocus
                        defaultValue={this.props.user.email}
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        inputRef={el => this.firstName = el}
                        autoFocus
                        defaultValue={this.props.user.firstName}
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        inputRef={el => this.lastName = el}
                        autoFocus
                        defaultValue={this.props.user.lastName}
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.submitHandler} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}

UserEditDialog.defaultProps = {
 isOpen: false,
 user: {
     email:'email',
     firstName:'firstName',
     lastName:'lastName'
 }
 };