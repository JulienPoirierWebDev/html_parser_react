import React, {useEffect} from 'react';
import Section from "./Section";
import Header from "./Header";
import SectionWrapper from "./SectionWrapper";
import PreviewArea from "./PreviewArea";
import EditArea from "./EditArea";
import {markdownDefault} from "../assets/markdownDefault";


const AppWrapper = () => {

    const [markdown, setMarkdown] = React.useState(markdownDefault);




    return (
        <div className={"p-8"}>
            <Header primary title={"Markdown Previewer !"}/>
            <SectionWrapper content={
                <>
                    <Section content={
                        <>
                            <Header title={"Editor"} />
                            <EditArea markdown={markdown} setMarkdown={setMarkdown}/>
                        </>
                    }/>


                    <Section content={
                        <>
                            <Header title={"Preview"} />
                            <PreviewArea markdown={markdown} />
                        </>
                    }/>



                </>
            }/>


        </div>
    );
};

export default AppWrapper;
