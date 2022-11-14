import React, {useEffect} from 'react';
import parser from "@deskeen/markdown"
import Header2 from "./Header2";
import Section from "./Section";
import Header1 from "./Header1";
import SectionWrapper from "./SectionWrapper";
import PreviewArea from "./PreviewArea";

const AppWrapper = () => {

    const [html, setHtml] = React.useState("");

    const [markdown, setMarkdown] = React.useState(
        "# Welcome to my React Markdown Previewer!" +
        "\n## This is a sub-heading..." +
        "\n### And here's some other cool stuff: " +
        "\nHeres some code, \`<div></div>\`, between 2 backticks." +
        "\n```js" +
        "\n         function anotherExample(firstLine, lastLine) {" +
        "\n             if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {" +
        "\n             return multiLineCode;" +
        "\n             }" +
        "\n         }" +
        "\n```" +
        "You can also make text **bold**... whoa!" +
        "Or _italic_." +
        "Or... wait for it... **_both!_**" +
        "And feel free to go crazy ~~crossing stuff out~~." +
        "There's also [links](https://www.freecodecamp.org), and" +
        "\n> Block Quotes!" +
        "\nAnd if you want to get really crazy, even tables:" +
        "\nWild Header | Crazy Header | Another Header?" +
        "\n------------ | ------------- | -------------" +
        "\nYour content can | be here, and it | can be here...." +
        "\nAnd here. | Okay. | I think we get it." +
        "\n- And of course there are lists." +
        "\n- And of course there are lists." +
        "\n- And of course there are lists." +

        "\n- Some are bulleted." +
        "\n      - With different indentation levels." +
        "\n         - That look like this." +
        "\n1. And there are numbered lists too." +
        "\n2. Use just 1s if you want!" +
        "\n1. And last but not least, let's not forget embedded images:" +
        "\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)" +
        "\n`Array.prototype.map()`" +
        "\njs " +
        "\nconst map = (arr, fn) => {" +
        "\nconst result = [];" +
        "\n\n "
        );

    const markdownToHtml = (markdown) => {
        setHtml(parser.parse(markdown).innerHTML);
    }

    useEffect(() => {
        markdownToHtml(markdown);
    }
    , []);

    return (
        <div className={"p-8"}>
            <Header1 title={"Markdown Previewer !"}/>
            <SectionWrapper content={
                <>
                    <Section content={
                        <>
                            <Header2 title={"Editor"} />
                            <textarea onKeyUp={(event) => {markdownToHtml(event.target.value)}} name="" id="editor" cols="30" rows="20" value={markdown}
                                      className={"w-full h-full bg-blue-200 px-2 resize-none"}></textarea>
                        </>
                    }/>


                    <Section content={
                        <>
                            <Header2 title={"Preview"} />
                            <PreviewArea html={html} />
                        </>
                    }/>



                </>
            }/>


        </div>
    );
};

export default AppWrapper;
