import React from 'react';
import DOMPurify from 'dompurify';

const PreviewArea = ({html}) => {


    return (
        <div id={"preview"} className={" bg-red-200 p-2"} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(html)}}>

        </div>

    );
};

export default PreviewArea;
