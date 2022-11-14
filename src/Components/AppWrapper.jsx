import React, {useEffect} from 'react';
import parser from "@deskeen/markdown"

const AppWrapper = () => {

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
        document.getElementById('preview').innerHTML = parser.parse(markdown).innerHTML;

    }

    useEffect(() => {
        let textArea = document.getElementById('editor');
        textArea.value = markdown;
        markdownToHtml(markdown);
    }
    , []);

    return (
        <div className={"p-8"}>
            <h1 className={"text-4xl text-center text-blue-800"}>Markdown previewer !</h1>
            <div className={"w-1/2 m-auto py-8 "}>
                <div>
                    <h2 className={"text-2xl text-center text-blue-800"}>Editor</h2>
                    <textarea onKeyUp={(event) => {markdownToHtml(event.target.value)}} name="" id="editor" cols="30" rows="10"
                              className={"w-full h-full bg-blue-200 p-2 rounded-xl"}></textarea>
                </div>

                <div className={"my-8"}>
                    <h2 className={"text-2xl text-center text-blue-800"}>Preview</h2>
                    <div id={"preview"} className={" bg-red-200 p-2 rounded-xl"}></div>

                </div>


            </div>

        </div>
    );
};

export default AppWrapper;
