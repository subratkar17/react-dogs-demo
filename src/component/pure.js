import React, { PureComponent } from 'react';

class Log extends PureComponent {
    render(){
        console.log("PureComponent" ,this.props)
        return null;
    }
}

export default Log;