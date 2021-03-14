import React from 'react';

const Option = (props) => {
    const { option, setAnswer } = props

    return(
        <div onClick={() => setAnswer(option)}>
            {option}
        </div>
    );
}

export default Option;