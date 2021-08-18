import React, { Component } from "react";
// Importing Module
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import "./texteditor.css";
// import { convertToRaw } from "draft-js"; //important
import { stateToHTML } from "draft-js-export-html";
import { Flex, Box, Button, Stack, Icon, Select } from "@chakra-ui/react";
import {
  GoBold,
  GoItalic,
  GoDesktopDownload,
  GoListUnordered,
  GoListOrdered,
  GoQuote,
} from "react-icons/go";
import Output from "./ouput";
// import { options } from "marked";

const headersMap = [
  { label: "Normal Text", style: "unstyled" },
  { label: "Header 1", style: "header-one" },
  { label: "Header 2", style: "header-two" },
  { label: "Header 3", style: "header-three" },
  { label: "Header 4", style: "header-four" },
  { label: "Header 5", style: "header-five" },
  { label: "Header 6", style: "header-six" },
];
export default class Texteditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      file: "",
      value: "unstyled",
    };
    this.onChange = async (editorState) => {
      await this.setState({ editorState });
      var value = await stateToHTML(this.state.editorState.getCurrentContent());
      this.setState({ file: this.replacer(value) });
      // console.log(convertToRaw(this.state.editorState.getCurrentContent()));
    };
  }

  //toggles inline styling of the text to bold
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }

  //toggles inline styling of the text to italic
  _onItalicClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }

  //blockqoute
  _onBlockQuoteClick() {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "blockquote")
    );
  }

  //underline
  _onUnderlineClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  }

  //ordered list
  _onBulletClick(event) {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "unordered-list-item")
    );
    this.setState({ value: event.target.value });
  }

  //ordered list
  _onNumberClick(event) {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "ordered-list-item")
    );
    this.setState({ value: event.target.value });
  }

  // heading tags
  handleHeadingChange(event) {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, event.target.value)
    );
    this.setState({ value: event.target.value });
  }

  replacer(input) {
    // console.log(input);
    input = input
      .replace(/<p><br><\/p>/g, "<br>") //order of pattern changing is crucial
      .replace(/<p>/g, "")
      .replace(/<\/p>/g, "<br>")
      .replace(/<strong>/g, "**")
      .replace(/<\/strong>/g, "**")
      .replace(/&nbsp;/g, " ")
      .replace(/<h1>/g, "# ")
      .replace(/<\/h1>/g, "")
      .replace(/<h2>/g, "## ")
      .replace(/<\/h2>/g, "")
      .replace(/<h3>/g, "### ")
      .replace(/<\/h3>/g, "")
      .replace(/<h4>/g, "#### ")
      .replace(/<\/h4>/g, "")
      .replace(/<h5>/g, "##### ")
      .replace(/<\/h5>/g, "")
      .replace(/<h6>/g, "###### ")
      .replace(/<\/h6>/g, "")
      .replace(/<blockquote>/g, ">")
      .replace(/<\/blockquote>/g, " ")
      .replace(/<ul>/g, "")
      .replace(/<\/ul>/g, "")
      .replace(/<li>/g, "* ")
      .replace(/<\/li>/g, " ");
    input = input.replace(/<em>/g, "_").replace(/<\/em>/g, "_");
    return input;
  }

  onDownload() {
    const hiddenElement = document.createElement("a");
    hiddenElement.href = "data:attachment/text," + encodeURI(this.state.file);
    hiddenElement.target = "_blank";
    hiddenElement.download = prompt(
      "Please enter name of markdown file",
      "README.md"
    );
    hiddenElement.click();
  }

  render() {
    return (
      <div>
        <Flex color="black">
          <Box
            flex="1"
            bg="#F0A6CA"
            border="0.5px"
            borderColor="#F0E6EF"
            style={{ margin: 0, padding: "5px" }}
            p={1}
            m={2}
          >
            <Stack direction="row" spacing={1} align="center">
              <Select
                onChange={this.handleHeadingChange.bind(this)}
                width="50%"
                bg="F0A6CA"
                value={this.state.value}
              >
                {headersMap.map((item, i) => (
                  <option value={item.style}>{item.label}</option>
                ))}
              </Select>
              <Button onClick={this._onBoldClick.bind(this)}>
                <Icon as={GoBold} />
              </Button>
              <Button onClick={this._onItalicClick.bind(this)}>
                {" "}
                <Icon as={GoItalic} />
              </Button>
              <Button onClick={this._onBlockQuoteClick.bind(this)}>
                <Icon as={GoQuote} />
              </Button>
              <Button onClick={this._onBulletClick.bind(this)}>
                <Icon as={GoListUnordered} />
              </Button>
              {/* <Button onClick={this._onNumberClick.bind(this)}>
                <Icon as={GoListOrdered} /> */}
              {/* </Button> */}
              <Button onClick={this.onDownload.bind(this)}>
                <Icon as={GoDesktopDownload} /> &nbsp;Download
              </Button>
            </Stack>
            <Box className="editors-panel">
              <Editor
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                placeholder="Lets Start Documenting ..."
              />
            </Box>
          </Box>
          <Output file={this.state.file} />
        </Flex>
      </div>
    );
  }
}
