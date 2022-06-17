import React from 'react'
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
      <div style={{flexDirection:"column"}}>
         <div className={styles.navbar}>
        <div className={styles.navrow}>
         <div className={styles.navrow1}>
         <img src="skull-logo1.jpg" style={{width:"50px", height:"50px", marginTop:"20px"}}/>

         <h1 style={{display:"flex"}} className={styles.wavy}>
          <span>J</span>
          <span>U</span>
          <span>S</span>
          <span>T</span>
          <span style={{marginLeft:"10px"}}>D</span>
          <span>O</span>
          <span style={{marginLeft:"10px"}}>I</span>
          <span>T</span>
         </h1>
          
         </div>

          <div className={styles.navrow2}>
          <p id={styles.list}>SHOP</p>
          </div>

          <div className={styles.navrow2}>
          <p id={styles.list}>INSIDE SKULL_ZILLA</p>
            {/* <ul className={styles.dropdown}>
              <li>hello 1</li>
              <li>hello 2</li>
              <li>hello 3</li>
              <li>heelo 4</li>
            </ul> */}
          </div>
        </div>

        <div className={styles.navrow}>
            <div className={styles.navrow3}>
                <p style={{fontSize:"12px", opacity:"0.7"}} id={styles.list}>Support</p>

                    <div className={styles.flag}>
                    <img src="south-africa.png" />
                    </div>
                

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
            </div>
        </div>
    </div>

    <div className={styles.bottomNav}>
        <p style={{borderTop:"1px solid white", opacity:"0.3", width:"100%"}}></p>
      <p style={{ opacity:"0.6"}}>Due to an unforeseen warehouse closure, some orders may experience a delay.</p>
    </div>
      </div>
   
  )
}
