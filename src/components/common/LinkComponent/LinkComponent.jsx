function LinkComponent ({url, title}) {
  return (
    <a
      className="App-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  )
}

export default LinkComponent;