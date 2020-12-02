import './styles.css';

function ParagraphComponent (props) {
  return(
    <p className={props.className} >
      {props.text}
    </p>
  )
}

export default ParagraphComponent;