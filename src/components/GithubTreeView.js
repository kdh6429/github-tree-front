import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';

import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/Description';
import LoadingIcon from '@material-ui/icons/HourglassEmpty';

import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TextField from '@material-ui/core/TextField';

import { atom, useRecoilState } from 'recoil';
import { githubTreeStats, selectedStats, urlStats, activeStats, urlChangeStats } from '../recoil/GithubTree';

const useTreeItemStyles = makeStyles((theme) => ({
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(22),
    borderBottomRightRadius: theme.spacing(22),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {
    backgroundColor: 'black'
  },
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function nestedCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const [githubTree, setGithubTree] = useRecoilState(githubTreeStats)

  const { depth, item, labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
          {/* <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </form> */}
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
  },
});

const getItemIcon = (item) => {
  if(item.type==="tree") return FolderIcon;
  if(item.type==="loading") return LoadingIcon;
  return FileIcon;
}

const dummyItem = {fold: true,path: "loading...", type: "loading"}
const failItem = {fold: true,path: "Fail to load", type: "loading"}
const getTreeData = (url) => {
  return fetchTreeData(url).then( data => {
    console.log( "data", data);
    if( !Array.isArray(data)) {
      data = [failItem];
    };

    if( data) {
      data.forEach( item => {
        if (item.type==="tree") {
          item.fold = true;
          item.searched = false;
          item.tree = [dummyItem];
        }
      });
      data.sort( (a,b) => {
        if (a.type===b.type) {
          return a.path - b.path;
        }
        return a.type==="tree"? -1 : 1;
      });
    }
    return data;
  });
}

const fetchTreeData = async(url) => {
  if(!url) {
    return [{"path":".github/workflows","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/.github/workflows"},{"path":"cypress","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/cypress"},{"path":"images","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/images"},{"path":"public","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/public"},{"path":"src","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/src"},{"path":".all-contributorsrc","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.all-contributorsrc"},{"path":".env","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.env"},{"path":".eslintignore","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.eslintignore"},{"path":".eslintrc","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.eslintrc"},{"path":".gitattributes","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.gitattributes"},{"path":".gitignore","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.gitignore"},{"path":".prettierignore","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.prettierignore"},{"path":".prettierrc","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.prettierrc"},{"path":"LICENSE","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/LICENSE"},{"path":"README.md","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/README.md"},{"path":"cypress.json","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/cypress.json"},{"path":"diagram.svg","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/diagram.svg"},{"path":"package.json","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/package.json"},{"path":"tsconfig.json","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/tsconfig.json"},{"path":"yarn.lock","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/yarn.lock"}];
  }
  const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'text/plain'
        },
      body: JSON.stringify({ url: url})
  };
  console.log( "process.env.REACT_APP_URL", process.env.REACT_APP_URL);
  return fetch(process.env.REACT_APP_URL, requestOptions)
  //return fetch(process.env.REACT_APP_URL)
    .then( resp => {
      if( !resp.ok) return [{ "path" : "404 ERROR"}]
      return resp.json().then( data2 => {
        return data2.data;
      })
      .catch(e => {
        return [{ "path" : "[ERROR] " + e.message}]
      })
    })
    .catch( e=> {
      return [{ "path" : "[ERROR] " + e.message}]
    });
}


export default function GithubTreeView(props) {
  const classes = useStyles();
  const [githubTree, setGithubTree] = useRecoilState(githubTreeStats)
  const [selectedItem, setSelectedItem] = useRecoilState(selectedStats)
  const [url, setUrl] = useRecoilState(urlStats)
  const [urlChange, setUrlChange] = useRecoilState(urlChangeStats)
  
  const [active, setActive] = useRecoilState(activeStats)

  // init tree fetch
  useEffect(() => {
    setGithubTree([dummyItem]);
    setActive(false);
    getTreeData(url).then( data=> {
      setActive(true);
      setGithubTree(data);
    } );
  }, [urlChange]);


  const setGithubTreeData = (depth, data) => {
    let tmpTree = nestedCopy(githubTree);
    if (depth.length === 1) {
      tmpTree[depth[0]] = {
        ...tmpTree[depth[0]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    if (depth.length === 2) {
      tmpTree[depth[0]].tree[depth[1]] = {
        ...tmpTree[depth[0]].tree[depth[1]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    else if (depth.length === 3) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    else if (depth.length === 4) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    else if (depth.length === 5) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    else if (depth.length === 6) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    else if (depth.length === 7) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    else if (depth.length === 8) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    else if (depth.length === 9) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]].tree[depth[8]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]].tree[depth[8]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    else if (depth.length === 10) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]].tree[depth[8]].tree[depth[9]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]].tree[depth[8]].tree[depth[9]], 
        tree: data,
        searched: true,
        fold: false
      }
    }
    setGithubTree(tmpTree);
  }

  const changeGithubTreeValue = (depth, key, value) => {
    let tmpTree = nestedCopy(githubTree);
    if (depth.length === 1) {
      tmpTree[depth[0]] = {
        ...tmpTree[depth[0]], 
        [key]: value,
      }
    }
    if (depth.length === 2) {
      tmpTree[depth[0]].tree[depth[1]] = {
        ...tmpTree[depth[0]].tree[depth[1]], 
        [key]: value,
      }
    }
    else if (depth.length === 3) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]], 
        [key]: value,
      }
    }
    else if (depth.length === 4) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]], 
        [key]: value,
      }
    }
    else if (depth.length === 5) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]], 
        [key]: value,
      }
    }
    else if (depth.length === 6) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]], 
        [key]: value,
      }
    }
    else if (depth.length === 7) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]], 
        [key]: value,
      }
    }
    else if (depth.length === 8) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]], 
        [key]: value,
      }
    }
    else if (depth.length === 9) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]].tree[depth[8]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]].tree[depth[8]], 
        [key]: value,
      }
    }
    else if (depth.length === 10) {
      tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]].tree[depth[8]].tree[depth[9]] = {
        ...tmpTree[depth[0]].tree[depth[1]].tree[depth[2]].tree[depth[3]].tree[depth[4]].tree[depth[5]].tree[depth[6]].tree[depth[7]].tree[depth[8]].tree[depth[9]], 
        [key]: value,
      }
    }
    setGithubTree(tmpTree);
  }
  
  const clickItem = (event, item, depth) => {
    let fold = item.fold;
    setSelectedItem(depth);

    if (item.type==="tree") {
      if( fold && !item.searched) {
        setActive(false);
        getTreeData(item.url).then( data=> {
          setActive(true);
          setGithubTreeData(depth, data);
        })
      }
      else if( item.searched) {
        changeGithubTreeValue(depth, 'fold', !fold);
      }
      else {
        console.log( "ERROR UNKWON CLICK EVENT");
      }
    } 
  }

  const renderTree = (tree, depth=[]) => {
    return (
      tree.map( (item, index) => {
        const icon = getItemIcon(item);
        const id = item.path + [...depth, index].join();
        return (
          <div>
            <StyledTreeItem 
              key={id}
              onClick={ (event) => clickItem(event, item, [...depth, index])}  
              nodeId={id} 
              labelText={item.path} 
              labelIcon={icon} 
              item={item} 
              depth={[...depth, index]}>
                {
                  item.tree && renderTree(item.tree, [...depth, index])
                }
            </StyledTreeItem>
          </div>
        );
      })
    );
  }
  
  return (
    <>
    <TreeView
      className={classes.root}
      // defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      { githubTree && renderTree(githubTree) }
    </TreeView>
    </>
  );
}
