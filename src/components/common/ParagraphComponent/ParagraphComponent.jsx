import './styles.css';

function ParagraphComponent ({ className, text }) {
  return(
    <p className={className} >
      {text}
    </p>
  )
}

export default ParagraphComponent;