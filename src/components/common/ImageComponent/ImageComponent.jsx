import './styles.css';

function ImageComponent (props) {

  return(
    <img src={props.img} className="App-logo" alt="logo" />
  )
}

export default ImageComponent