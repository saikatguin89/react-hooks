import React from 'react';

import UseContextFunctional from './UseContextFunctional';
import {DataProvider} from './DataContext'
import UseContextClass from './UseContextClass';


function UseContextHook(){
    return (
        <DataProvider>
            <UseContextFunctional/>
            <UseContextClass/>
        </DataProvider>
    );
}

export default UseContextHook;