import React, {Component} from 'react'; 
// Importing Module 
import {Editor, EditorState , RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './texteditor.css';
import {
  convertToRaw,
} from 'draft-js';
import { stateToHTML } from "draft-js-export-html";


 export default class Texteditor extends Component {
  

  
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    
  }
  onDownload(){
    const file =stateToHTML(this.state.editorState.getCurrentContent());
  const hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text,' + encodeURI(file);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'readm.md';
  hiddenElement.click();
    
    const blocks = convertToRaw(this.state.editorState.getCurrentContent()).blocks;
    console.log(blocks);
const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    console.log("1. "+this.state.editorState.getCurrentContent().getPlainText('\u0001'));
    console.log(value);
    
    console.log(file);
  }
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = editorState => this.setState({editorState});
       
      }
    
      render() {
        return (
          <div>
          <button className="b-button" onClick={this._onBoldClick.bind(this)}>Bold</button>
          <button className="b-button" onClick={this._onItalicClick.bind(this)}>Italic</button>
          <button className="b-button" onClick={this._onUnderlineClick.bind(this)}>Underline</button>
          <button className="b-button" onClick={this.onDownload.bind(this)}>download</button>
            <div className="editors-panel">
              <Editor editorState={this.state.editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange} /></div>
            </div>
        );
    }
}
