import './styles.css';

function AppContainer (props) {

  return (
    <div className="App">
      <header className="App-header">
        {props.children}
      </header>
    </div>  
  )
};

export default AppContainer;