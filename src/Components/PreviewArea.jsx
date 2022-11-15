import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import parser from "@deskeen/markdown";



const PreviewArea = ({markdown}) => {

    const [html, setHtml] = React.useState("");

    const markdownToHtml = (markdown) => {
        setHtml(DOMPurify.sanitize(parser.parse(markdown).innerHTML));
    }

    useEffect(() => {
            markdownToHtml(markdown);
        }
        , [markdown]);


    return (
        <div id={"preview"} className={" bg-red-200 p-2"} dangerouslySetInnerHTML={{__html: html}}>

        </div>

    );
};

PreviewArea.prototype = {
    markdown: PropTypes.string.isRequired
}


export default PreviewArea;
