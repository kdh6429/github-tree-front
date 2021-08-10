import React, {useState, useEffect} from 'react'
import { atom, useRecoilState } from 'recoil'

import { githubTreeStats, treeOptionStats, urlStats, activeStats, urlChangeStats } from '../recoil/GithubTree';

const GithubURLInput = () => {
  const [url, setUrl] = useRecoilState(urlStats)
  const [active, setActive] = useRecoilState(activeStats)
  const [urlChange, setUrlChange] = useRecoilState(urlChangeStats)

  const [inputUrl, setInputUrl] = useState("");
  const [buttonActive, setButtonActive] = useState(true)

  useEffect( () => {
    setInputUrl("")
  }, []);

  const onChange = (e) => {
    setInputUrl(e.target.value);
    setButtonActive(true);
    if(e.target.value.startsWith("https://github.com/")) {
      setActive(true);
    }
    else {
      if(e.target.value!=="") setActive(false);
    }
  };

  const getData = () => {
    setUrl(inputUrl.substring(18));
    setUrlChange(urlChange + 1);
    setButtonActive(false);
  }
  return (
    <div className="input-wrap">
        <h3>1. Enter github project url (ex: https://github.com/facebook/react)</h3>
        <input disabled={!active} onChange={onChange} value={inputUrl}  />
        <button onClick={getData} disabled={!active || !buttonActive}>Get Repo</button>
    </div>
  )
}

export default GithubURLInput
