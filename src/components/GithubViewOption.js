import React, {useState, useEffect} from 'react'
import { atom, useRecoilState } from 'recoil'

import FormControlLabel from '@material-ui/core/FormControlLabel';

import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { treeOptionStats } from '../recoil/GithubTree';

const GithubViewOption = () => {
  const [treeOption, setTreeOption] = useRecoilState(treeOptionStats);
  
  const iconHandleChange = (event, value) => {
    console.log( event, event.target.checked);
    setTreeOption( {
      ...treeOption,
      [event.target.name]: event.target.checked
    });
  }

  const depthSizeChange = (event, value) => {
    console.log( event, event.target.checked);
    setTreeOption( {
      ...treeOption,
      [event.target.name]: event.target.value
    });
  }

  const folderOnlyHandleChange = (event, value) => {
    console.log( event, value);
    setTreeOption( {
      ...treeOption,
      folderOnly: event.target.checked
    });
  }
  return (
    <div className="option-wrap">
      {/* <span>Advanced Options </span> */}
      <input checked={treeOption.folderOnly} disabled={treeOption.selectOnly} onClick={folderOnlyHandleChange} name="folderOnly" color="primary" type="checkbox"/>Folder Only    
      {/* <input checked={treeOption.folderIcon} onClick={iconHandleChange} name="folderIcon" color="primary" type="checkbox"/>Folder Icon   
      <input checked={treeOption.fileIcon} onClick={iconHandleChange} name="fileIcon" color="primary" type="checkbox"/>File Icon    */}
      <input checked={treeOption.selectOnly} onClick={iconHandleChange} name="selectOnly" color="primary" type="checkbox"/>Select Only
      <span className="space-label">Spaces : </span>
      <input value={treeOption.depthSize} onInput={depthSizeChange} type="number" id="tentacles" name="depthSize" min="0" max="100"></input>
    </div>
  )
}

export default GithubViewOption;
