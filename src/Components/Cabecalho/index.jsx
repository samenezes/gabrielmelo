import React from 'react'
import styles from './Header.Module.css'
import { Link } from 'react-router-dom'

function Cabecalho() {
  return (
    <div>
      <header className={styles.header}>
            <Link to="/">
                <span>Gabriel de Melo Dias 3D1</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    </div>
  )
}

export default Cabecalho
