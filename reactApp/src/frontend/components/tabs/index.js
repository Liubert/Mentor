import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountBox from '@material-ui/icons/AccountBox';
import GradeIcon from '@material-ui/icons/Grade';
import ListIcon from '@material-ui/icons/FormatListNumbered';
import DoneIcon from '@material-ui/icons/DoneAll';
import Typography from '@material-ui/core/Typography';
import UserTable from '../../components/tables/userTable';
import QuestionStatesTable from '../../components/tables/questionStatesTable';
import QuestionTable from '../../components/tables/questionsTable';
import SkillsTable from '../../components/tables/skillsTable';

function TabContainer(props) {
    return (
        <Typography component="div">
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
});

class ScrollableTabsButtonForce extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        console.log(this.props.components);
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Users" icon={<AccountBox />} />
                        <Tab label="Skills" icon={<GradeIcon />} />
                        <Tab label="Questions" icon={<ListIcon />} />
                        <Tab label="Questions-states" icon={<DoneIcon />} />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><UserTable/></TabContainer>}
                {value === 1 && <TabContainer><SkillsTable/></TabContainer>}
                {value === 2 && <TabContainer><QuestionTable/></TabContainer>}
                {value === 3 && <TabContainer><QuestionStatesTable/></TabContainer>}
            </div>
        );
    }
}



export default withStyles(styles)(ScrollableTabsButtonForce);