import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ label, color = 'blue', size = 'medium', onClick }) => { 
    const buttonStyles = {
        backgroundColor: color,
        padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
        fontSize: size === 'small' ? '12px' : size === 'large' ? '18px' : '14px',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        display: 'block',
        cursor: 'pointer',
    };

return (
    <button style={buttonStyles} onClick={onClick}>
        {label}
    </button>
    );
};

Button.propTypes={
    label:PropTypes.string.isRequired,
    color:PropTypes.string,
    size:PropTypes.oneOf(['small', 'medium', 'large']), 
    onClick:PropTypes.func.isRequired,
}
export default Button;