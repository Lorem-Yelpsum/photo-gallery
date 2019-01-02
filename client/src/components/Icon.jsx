import React from 'react';
import './icons.svg';

const Icon = (props) => {
    return (
        <svg width={props.width} height= {props.height} fill= {props.fill || `#000`}>
            <use xlinkHref= {`#icons_${props.name}`} />
        </svg>
    );
}

export default Icon;