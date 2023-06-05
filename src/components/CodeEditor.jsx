import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import StyledWrapper from './Wrapper';

import React,{useContext} from 'react'
import { AppContext } from '../App';

const CodeEditor = () => {
  const {code,setCode}=useContext(AppContext);
  return (
    <div className='code-block'>
      <StyledWrapper>
		<Editor
			value={code}
			onValueChange={code => setCode(code)}
			highlight={code => highlight(code, languages.js)}
			padding={10}
			style={{
			fontFamily: "'Source Code Pro', monospace",
			lineHeight: "25px",
			}}
			placeholder='place your text here!'
		/>
    </StyledWrapper>
    </div>
  )
}

export default CodeEditor