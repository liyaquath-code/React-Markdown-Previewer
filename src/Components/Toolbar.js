import './Toolbar.css'

export const Toolbar = ({isMaximized,
    onChange, text}) => {
return (
  <div className='toolbar'>
    <div>
    <i className="fab fa-free-code-camp"></i>
      <strong> {text}</strong>
    </div>
    <i className={isMaximized ? "fas fa-compress-arrows-alt" : "fas fa-expand-arrows-alt"}
      title={isMaximized ? "Minimize" : "Maximize"}
    onClick={onChange}
    ></i>
  </div>
)
}

