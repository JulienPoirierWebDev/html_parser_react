import React from 'react';
import PropTypes from 'prop-types';


const Header = ({title, primary}) => {
    const htmlTitle = primary ?
        <h1 className={"text-4xl text-center text-blue-800"}>{title}</h1> :
        <h2 className={"text-2xl text-center text-blue-800 bg-gray-200 rounded-t-xl"}>{title}</h2>

    return (
        htmlTitle
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Header"
}
