import React, {Component} from 'react'; 
// Importing Module 
import {Editor, EditorState , RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './texteditor.css';

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
            <div className="editors-panel">
              <Editor editorState={this.state.editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange} /></div>
            </div>
        );
    }
}
