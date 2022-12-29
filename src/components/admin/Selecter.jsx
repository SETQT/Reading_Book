import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from './docs/data';
const colourOptions = [
    { value: "ok", label: "asdsd" },
    { value: "oddk", label: "asdsd" },
    { value: "dok", label: "adsdsd" },
    { value: "oddk", label: "asdsd" },
    { value: "odddk", label: "asdsadsdsd" },
    { value: "odssxk", label: "assssssssdsd" },

]

const animatedComponents = makeAnimated();

export default function AnimatedMulti(props) {
    console.log(props);
    return (
        <Select
            closeMenuOnSelect={false}
            className="react-select-container"
            classNamePrefix="react-select"
            components={animatedComponents}
            defaultValue={props.default}
            isMulti
            options={props.list}
        />
    );
}
