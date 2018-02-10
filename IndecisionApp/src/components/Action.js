import React from 'react';

const Action = (props) => (
    <div>
        <button className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What shoud I do?
        </button>
    </div>
);

export default Action;