import React from 'react'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


class ConfirmDialog extends React.Component {

    render() {
        return (
            <Dialog
                open={this.props.isOpen}
                onClose={this.props.onReject}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.props.bodyText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onConfirm} color="primary">
                        Yes
                    </Button>
                    <Button onClick={this.props.onReject} color="primary" >
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
ConfirmDialog.defaultProps = {
    title: 'title',
    bodyText: 'bodyText',
    onReject: () => {return null},
    onConfirm: () => {return null},
    isOpen: false
};
ConfirmDialog.propTypes = {
    title: PropTypes.string,
    bodyText: PropTypes.string,
    onReject: PropTypes.func,
    onConfirm: PropTypes.func,
    isOpen: PropTypes.bool
};

export default  ConfirmDialog
