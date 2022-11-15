import React from 'react';
import PropTypes from "prop-types";

const EditArea = ({markdown, setMarkdown}) => {

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    }

    return (
        <textarea
            name="editor" id="editor" cols="30" rows="20" onChange={handleChange}
            value={markdown}
            className={"w-full h-full bg-blue-200 px-2 resize-none"}/>
    );
};

EditArea.prototype = {
    markdown: PropTypes.string.isRequired,
}


export default EditArea;
