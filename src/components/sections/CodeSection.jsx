import React, { useContext } from 'react'
import { AppContext } from '../../App'
import CodeEditor from '../CodeEditor'
import Codeblock from '../Codeblock'

const CodeSection = () => {
    const {show,code}=useContext(AppContext);
  return (
    <div className={"code-block"} >
      {!show?(
        <>
          <Codeblock code={code} language={"javascript"} />
        </>
      ):(
        <>
          <CodeEditor/>
        </>
      )}
      
    </div>
  )
}

export default CodeSection