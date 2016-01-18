import React from 'react';

class Component extends React.Component {
    render() {
        return <div>Hi Everybody! Hi {this.props.name}!</div>;
    }
}

export default Component;
