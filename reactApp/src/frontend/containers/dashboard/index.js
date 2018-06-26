import React from 'react';
import CreateUserForm from '../../components/createUserForm';

import SimpleExpansionPanel from '../../components/expansionPanel';
import TabContainer from '../../components/tabs';


function Dashboard() {
        return (
            <div className='dashboard-page'>
                <div className="col-md-12">
                    <SimpleExpansionPanel title={'Tweets Timelines'} component={<CreateUserForm />}/>

                </div>
                <div className="col-md-12" style={{marginTop: 50}}>
                    <TabContainer />
                </div>
            </div>
        )
}

export default Dashboard;



