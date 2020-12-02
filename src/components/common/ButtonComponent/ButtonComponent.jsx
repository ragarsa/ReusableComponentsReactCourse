function ButtonComponent ({handleClick, text}) {
  return (
    <button onClick={handleClick} >{text}</button>
  )
}

export default ButtonComponent;