export const Editor = ({markup, onChange, isMaximized}) => {
    return (
        <div>
          <textarea value={markup} onChange={onChange} id='editor'
            style={{height: isMaximized ? '300px' : '150px' }}></textarea>
        </div>
    )
  }