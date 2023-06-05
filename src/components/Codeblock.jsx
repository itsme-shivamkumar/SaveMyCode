import React, { useContext,useEffect,useState } from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";

import { dracula,dark,github,a11yDark,a11yLight, agate,anOldHope,androidstudio,arduinoLight,arta,ascetic,atelierCaveDark,atelierCaveLight,atelierDuneDark,atelierDuneLight,atelierEstuaryDark,atelierEstuaryLight,atelierForestDark,atelierForestLight,atelierHeathDark,atelierHeathLight,atelierLakesideDark,atelierLakesideLight,atelierPlateauDark,atelierPlateauLight,atelierSavannaDark,atelierSavannaLight,atelierSeasideDark,atelierSeasideLight,atelierSulphurpoolDark,atelierSulphurpoolLight,atomOneDark,atomOneDarkReasonable,atomOneLight,brownPaper,codepenEmbed,colorBrewer,darcula,defaultStyle,docco,far,foundation,githubGist,gml,googlecode,gradientDark,grayscale,gruvboxDark,gruvboxLight,hopscotch,hybrid,idea,irBlack,isblEditorDark,isblEditorLight,kimbieDark,kimbieLight,lioshi,magula,monoBlue,monokai,nightOwl,nnfx,nnfxDark,nord,obsidian,ocean,paraisoDark,paraisoLight,pojoaque,purebasic,qtcreatorDark,qtcreatorLight,railscasts,rainbow,routeros,schoolBook,shadesOfPurple,solarizedDark,solarizedLight,srcery,stackoverflowDark,stackoverflowLight,sunburst,tomorrow,tomorrowNight,tomorrowNightBlue,tomorrowNightBright,tomorrowNightEighties,vs,vs2015,xcode,xt256,zenburn } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AppContext } from '../App';
const styles=[dracula,dark,github,a11yDark,a11yLight, agate,anOldHope,androidstudio,arduinoLight,arta,ascetic,atelierCaveDark,atelierCaveLight,atelierDuneDark,atelierDuneLight,atelierEstuaryDark,atelierEstuaryLight,atelierForestDark,atelierForestLight,atelierHeathDark,atelierHeathLight,atelierLakesideDark,atelierLakesideLight,atelierPlateauDark,atelierPlateauLight,atelierSavannaDark,atelierSavannaLight,atelierSeasideDark,atelierSeasideLight,atelierSulphurpoolDark,atelierSulphurpoolLight,atomOneDark,atomOneDarkReasonable,atomOneLight,brownPaper,codepenEmbed,colorBrewer,darcula,defaultStyle,docco,far,foundation,githubGist,gml,googlecode,gradientDark,grayscale,gruvboxDark,gruvboxLight,hopscotch,hybrid,idea,irBlack,isblEditorDark,isblEditorLight,kimbieDark,kimbieLight,lioshi,magula,monoBlue,monokai,nightOwl,nnfx,nnfxDark,nord,obsidian,ocean,paraisoDark,paraisoLight,pojoaque,purebasic,qtcreatorDark,qtcreatorLight,railscasts,rainbow,routeros,schoolBook,shadesOfPurple,solarizedDark,solarizedLight,srcery,stackoverflowDark,stackoverflowLight,sunburst,tomorrow,tomorrowNight,tomorrowNightBlue,tomorrowNightBright,tomorrowNightEighties,vs,vs2015,xcode,xt256,zenburn];

const Codeblock = ({code,language}) => {
  const {currTheme,savedTheme,index,setIndex}=useContext(AppContext);
  // let bg=styles[index]["hljs"]["background"];
  // let col=styles[index]["hljs"]["color"];
  useEffect(()=>{
    if(savedTheme===""){
      if(currTheme==="light")setIndex(4);
      else setIndex(6);
    }
  },[currTheme])
  return (
    <div style={{cursor:"default"}} >
    <SyntaxHighlighter children={code} language={`${language}`} style={styles[index]} />
    </div>
  )
}

export default Codeblock