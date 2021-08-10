import React, {useState, useEffect} from 'react'
import { atom, useRecoilState } from 'recoil'

import { githubTreeStats, treeOptionStats, selectedStats } from '../recoil/GithubTree';

const GtHubTreePreview = ({depthSize, icon}) => {
  const [githubTree, setGithubTree] = useRecoilState(githubTreeStats)
  const [treeOption, setTreeOption] = useRecoilState(treeOptionStats);
  const [selectItemIndexs, setSelectItemIndexs] = useRecoilState(selectedStats);

  const [output, setOutput] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copy it");
  

    function getItemText(item, depth) {
        if ((!treeOption.selectOnly && treeOption.folderOnly) && item.type=="blob") return null;

        let icon = "";
        if( item.type==="tree" && treeOption.folderIcon) {
            icon = ":file_folder:";
        }
        if( item.type==="blob" && treeOption.fileIcon) {
            icon = ":page_facing_up:";
        }
        return "    " + (" ".repeat(treeOption.depthSize).repeat(depth)) + "├── " + icon + item.path;
    }

const _getAllTreeText = (treeData, depth=0) => {
    let treeText = "";
    treeData.forEach( item => {
        const lienText = getItemText(item, depth);
        if( lienText) treeText += getItemText(item, depth) + `\r\n`;
        if(item.searched && item.tree && !item.fold) treeText += _getAllTreeText(item.tree, depth+1);
    });
    return treeText;
}

const _getSelectTreeText = (treeData) => {
    let treeText = "";
    if(treeOption.selectOnly) {
        let targetItem = githubTree;
        selectItemIndexs.forEach( (value, index) => {
            //  if (targetItem.length > 1) {
            //      treeText = treeText + (" ".repeat(treeOption.depthSize).repeat(index)) +  "├── ..." + `\r\n`;
            //  }
            treeText += getItemText(targetItem[value], index) + `\r\n`;
            if(targetItem[value].tree) targetItem = targetItem[value].tree;
        })
    }
    return treeText;
}
  const getTreeText = (treeData, depth=0) => {
      if(treeOption.selectOnly) {
        return _getSelectTreeText(treeData);
      }
    return _getAllTreeText(treeData)
  }
  useEffect(() => {
    const output = "    .\r\n" + getTreeText(githubTree);
    setOutput( output);
  }, [githubTree, treeOption, selectItemIndexs]);

  const copy = () => {
    setCopyLabel("Copied!");
    setTimeout( () => {
        setCopyLabel("Copy it");
    }, 1000);
    navigator.clipboard.writeText(output);
  }
  return (
    <div className="preview-wrap">
        <div onClick={copy} className={"copy-label " + (copyLabel==='Copied!'? 'active':'')}> {copyLabel} </div>
      {output}
    </div>
  )
}

export default GtHubTreePreview
