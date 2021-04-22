import React, { Component } from "react";
// Importing Module
import {  Editor,EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import "./texteditor.css";
// import { convertToRaw } from "draft-js"; //important 
import { stateToHTML } from "draft-js-export-html";
import { Flex, Box, Button, Stack, Icon } from "@chakra-ui/react";
import { GoBold, GoItalic, GoDesktopDownload, GoQuote, GoTextSize } from "react-icons/go";
import Output from './ouput'

export default class Texteditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty(),file:'' };
    this.onChange = async (editorState) => {
     await this.setState({ editorState });
      var value =await stateToHTML(this.state.editorState.getCurrentContent());
      this.setState({file: this.replacer(value)});
      // console.log(convertToRaw(this.state.editorState.getCurrentContent()));
    };
  }

  replacer(input) {
    // console.log(input);
    input = input
      .replace(/<p>/g, "")
      .replace(/<\/p>/g, "</br>")
      .replace(/<br>/g, "")
      .replace(/<strong>/g, "**")
      .replace(/<\/strong>/g, "**")
      .replace(/&nbsp;/g, " ")
      .replace(/<h1>/g, "# ")
      .replace(/<\/h1>/g, " #")
      .replace(/<blockquote>/g, ">")
      .replace(/<\/blockquote>/g, " ");
    input = input.replace(/<em>/g, "_").replace(/<\/em>/g, "_");
    return input;
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }
  _onItalicClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }
  _onUnderlineClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  }
  onDownload() {
    const hiddenElement = document.createElement("a");

    hiddenElement.href = "data:attachment/text," + encodeURI(this.file);
    hiddenElement.target = "_blank";
    hiddenElement.download = "README.md";
    hiddenElement.click();
  }
  _onTextSizeClick() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, "header-one"));
  }
  _onBlockQuoteClick() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, "blockquote"));
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
            p={1}
            m={2}
          >
            <Stack direction="row" spacing={1} align="center">
              <Button onClick={this._onBoldClick.bind(this)}>
                <Icon as={GoBold} />
              </Button>
              <Button onClick={this._onItalicClick.bind(this)}>
                {" "}
                <Icon as={GoItalic} />
              </Button>
              <Button onClick={this._onTextSizeClick.bind(this)}>
                <Icon as={GoTextSize} />
              </Button>
              <Button onClick={this._onBlockQuoteClick.bind(this)}>
                <Icon as={GoQuote} />
              </Button>
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
          <Output file ={this.state.file}/>
        </Flex>
         
      </div>
    );
  }
}
