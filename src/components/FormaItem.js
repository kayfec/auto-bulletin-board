import React from 'react';

export class FormatItem extends React.Component {

    format(value) {
        return (value + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
    }

    render() {
        return <span>{this.format(this.props.value)}</span>
    }
} 