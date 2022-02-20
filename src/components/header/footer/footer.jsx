import React from 'react'
import classes from './footermodule.css'

export const footer = () => {
  return (
    <footer>
    <div className={['container',classes.container].join(' ')}>
      <div>
        Copyright &copy;2020.
      </div>
      <div class="textRight">
        Built with <span class="red">&hearts;</span> by
        <a
          href="https://reactjs.org/docs/create-a-new-react-app.html"
          
          >Create React App</a
        >
      </div>
    </div>
  </footer>
  )
}
