import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <InstallButton /> */}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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




class InstallButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {installPromptEvent: undefined};
  }

  componentDidMount() {
    window.addEventListener('beforeinstallprompt', (event) => {
      this.setState({installPromptEvent: event});
    });

    console.log(this.state.installPrompt)
  }

  render() {
    return (<button style={{ width: 100, height: 100 }} onClick={() => {
      window.addEventListener('beforeinstallprompt', function (e) { e.prompt(); });
    }}>

    </button>
    )
  }
}