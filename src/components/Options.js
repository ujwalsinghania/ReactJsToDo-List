import React from 'react'
import {Option} from "./Option";


class Options extends React.Component {

    render() {
        const optionsArray = this.props.arrays.map((option) => {
            return (
                <Option key={option.task}
                        task={option.task}
                        time={option.time}
                        priority={option.priority}
                        handleDel={this.props.handleDelete}
                />
            );
        });

        return (
            <div>
                {optionsArray}
            </div>
        );
    };
}
export {Options}