import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import Counter from "./components/Counter";
import GithubTreeView from "./components/GithubTreeView";
import GtHubTreePreview from "./components/GtHubTreePreview";
import GithubViewOption from "./components/GithubViewOption";
import GithubURLInput from "./components/GithubURLInput";

function App() {
  return (
    <div className="App">
    <RecoilRoot>
      {/* <div className="title-wrap">
        <div className="title">
          <h1>Github Tree Generator</h1>
        </div>
      </div> */}
      <div className="ad-wrap">
        ad will be placed on here
      </div>
      <div>
        <GithubURLInput/>
      </div>
      <div className="contents-wrap">
        <div className="controller-wrap">
          <h3>2. Expand & collapse proejct tree</h3>
          <div className="controller">
            <GithubTreeView />
          </div>
        </div>
        <div className="viwer-wrap">
          <h3>3. Copy and paste it on README</h3>
          <div className="viwer">
            <GtHubTreePreview/>
          </div>
        </div>
      </div>
      <div>
        <GithubViewOption/>
      </div>
    </RecoilRoot>
    </div>
  )
}

export default App
