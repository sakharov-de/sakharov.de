import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDomain } from "./hooks/useDomain";

function App() {
  const domain = useDomain();
  const profile = domain.profileRepository.findOne();

  if (!profile) return null;

  const workPositions = domain.workPositionRepository.findAllByProfileId(
    profile.id
  );
  console.log(workPositions);
  const educationalItems = domain.educationalItemRepository.findAllByProfileId(
    profile.id
  );
  console.log(educationalItems);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
