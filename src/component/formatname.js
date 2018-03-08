import React from 'react';
import {USER as user} from './const';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
 


const Element =()=> (
<h1>
    Hello, {formatName(user)}!
</h1>
);



export default Element;