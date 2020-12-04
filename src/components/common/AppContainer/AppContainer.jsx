import './styles.css';

function AppContainer ({ children }) {

  return (
    <div className="App">
      <header className="App-header">
        {children}
      </header>
    </div>
  )
};

export default AppContainer;