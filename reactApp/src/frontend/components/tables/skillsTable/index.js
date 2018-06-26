import React, {Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {fetchSkills} from '../../../actions';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose} from 'redux'
import Spinner from '../../spinner'




class SkillsTable extends Component {

    constructor(props) {
        super(props);
        this.props.fetchSkills();
    }

    render() {
        const data = this.props.skills.data;
        let tableRows = [];
        if(data.length){
            tableRows = this.props.skills.data.map(skill => {
                return (
                    <TableRow  key={skill._id}>
                        <TableCell component="th" scope="row">{skill.name}</TableCell>
                        <TableCell component="th" scope="row">{skill._id}</TableCell>
                        <TableCell component="th" scope="row">{skill.__v}</TableCell>
                    </TableRow>
                );
            });
        }
        const TableS = (
            <Paper  style={{margin:"30px 0px"}} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Skill Name</TableCell>
                            <TableCell>Skill ID</TableCell>
                            <TableCell>Skill Version</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {tableRows}
                    </TableBody>

                </Table>
            </Paper>
        );



        return ( <Spinner loading={false} component={TableS} />);
    }
}

const mapStateToProps = (state) => {

    return {
        skills: state.skills
    }
};

const mapDispatchToProps = {
    fetchSkills
};
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(SkillsTable)
