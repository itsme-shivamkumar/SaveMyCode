import React,{useContext, useState} from 'react'
import { List,ListItemIcon,ListItemButton,ListItemText,Collapse, Typography } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AppContext } from '../App';

const FolderComp = ({ele}) => {
    const [folderOpen,setFolderOpen]= useState(false);
    const [outlineShow,setOutlineShow]=useState(true)

    document.addEventListener('contextmenu',(e)=>{
        // e.preventDefault();
        // e.stopPropagation();

    })
    const {setSelectedFile,setSelectedFolder} = useContext(AppContext);


    const handleFolderClick=(e)=>{
        e.preventDefault(); 
        e.stopPropagation();
        setFolderOpen((prev)=>!prev);
        let ele;
        ele=(e.target.id)?e.target.id:(e.target.parentElement.id)?e.target.parentElement.id:e.target.parentElement.parentElement.id;
        document.getElementById(e.target.id)?.setAttribute("selected",true);
        document.getElementById(e.target.parentElement.id)?.setAttribute("selected",true);
        document.getElementById(e.target.parentElement.parentElement.id)?.setAttribute("selected",true);

        setSelectedFolder((prev)=>{
            if(prev===parseInt(ele)){
                return null;
            }
            else return parseInt(ele);
        });
        setSelectedFile(null);
    }
    const handleFileClick=(e)=>{
        e.stopPropagation();
        let ele;
        ele=(e.target.id)?e.target.id:(e.target.parentElement.id)?e.target.parentElement.id:e.target.parentElement.parentElement.id;
        setSelectedFile((prev)=>{
            if(prev===parseInt(ele)){
                return null;
            }
            else return parseInt(ele);
        });
        setSelectedFolder(null);
    }
  return (
    <>
        <List id={ele.id} style={{ position:"relative", left:4}} disablePadding >
        <ListItemButton id={ele.id} key={ele.id} className={'root--folder'} onClick={handleFolderClick} >
            <ListItemIcon id={ele.id} sx={{minWidth:"30px"}} >
            <span id={ele.id} >{"📁"}</span>
            </ListItemIcon> 
            <ListItemText id={ele.id} sx={{ color:(outlineShow)?"grey":""}} primary={`${ele.name}`} />
            {!folderOpen ? <ExpandLess id={ele.id} /> : <ExpandMore id={ele.id} />}
        </ListItemButton>
        {(ele.folders.length+ele.files.length >0)&&(
            <Collapse onClick={handleFileClick} in={folderOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {ele.folders.map((items)=>(
                    <FolderComp key={items.id} id={items.id} ele={items}/>
                ))}
                {ele.files.map((items)=>(
                    <ListItemButton id={items.id} key={items.id} sx={{ position:"relative", left:4}}>
                        <ListItemIcon id={items.id} sx={{minWidth:"25px"}} >
                        <span id={items.id} >{"📄"}</span>
                        </ListItemIcon>
                        <ListItemText sx={{color:(outlineShow)?"grey":""}} id={items.id} primary={`${items?.name}`} />
                    </ListItemButton>
                ))}    
                </List>
            </Collapse>
        )}
        </List>
    </>
  )
}

export default FolderComp