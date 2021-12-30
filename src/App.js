import React from 'react';
import './App.css';
import { Toolbar } from './Components/Toolbar';
import { Editor } from './Components/Editor';
import { Preview } from './Components/Preview';

const placeholder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

There's also [links](https://www.freecodecamp.org)

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
function add(a, b) {
    return a+b;
}
\`\`\`

- And there are lists.
- with a nested list
  - That looks like this.

> And Block Quotes too!

You can also make text **bold**...

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markup: placeholder,
      isEditorMaximized: false,
      isPreviewMaximized: false
    }
    this.changeHandler = this.changeHandler.bind(this);
      this.handleEditorSize = this.handleEditorSize.bind(this);
      this.handlePreviewSize = this.handlePreviewSize.bind(this);
  }
  
  changeHandler(e) {
    this.setState({
      markup: e.target.value
    })
  }
  
  handleEditorSize() {
    this.setState({
      isEditorMaximized: !this.state.isEditorMaximized
    });
  }
  
  handlePreviewSize() {
        this.setState({
            isPreviewMaximized: !this.state.isPreviewMaximized
        });
      }
  
  render() {
    return (
      <div className='container'>
                <div className='editorWrap'>
                    <Toolbar
                        isMaximized={this.state.isEditorMaximized}
                        onChange={this.handleEditorSize}
                      text='Editor' />
                    <Editor
                        markup={this.state.markup}
                        isMaximized={this.state.isEditorMaximized}
                        onChange={this.changeHandler} />
                </div>
                <div className='previewWrap'>
                    <Toolbar
                        isMaximized={this.state.isPreviewMaximized}
                        onChange={this.handlePreviewSize}
                      text='Preview'/>
                    <Preview
                        markup={this.state.markup}
                        isMaximized={this.state.isPreviewMaximized} />
                </div>
            </div>
    )
  }
}

export default App;
