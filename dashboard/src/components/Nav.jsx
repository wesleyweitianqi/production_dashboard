import React, { useState } from 'react'
import DarkMode from './DarkMode'

function Nav() {
  const [val, setVal] = useState("")
  const inputHandler =(e) => {
    setVal(e.target.value)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"black"}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">Rex</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/finished">Completed</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pending">Pending</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" onChange={inputHandler} value={val} placeholder="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
      <DarkMode />
  </div>
      </nav>
    </>
  )
}

export default Nav
