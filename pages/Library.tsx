import styles from "../styles/Library.module.scss"
import React, { useState } from "react";
import FirstTab from './FirstTab'
import SecondTab from './SecondTab'
import { BiSearch } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import Link from "next/link"
import { BiMenuAltLeft } from "react-icons/bi";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1")
    const handleTab1 = () => {
        setActiveTab("tab1")
      }

    const handleTab2 = () => {
        setActiveTab("tab2")
      }


    const [showModal, setShowModal] = useState(false)
    const handleSubmit = () => {
          setShowModal(true)
      }

    return (
        <>
         <header>
            <nav className={styles.navbar}>
                <Link href="/" passHref>
                    <div className={styles.iconBack}>
                        <BiChevronLeft />
                        <h2>My Library</h2>
                    </div>
                </Link>
            </nav>
        </header>
        <div className={styles.container}>
        <div className={styles.nav}>
          <div  className={`${styles.navItem} ${activeTab === "tab1" ? styles.active : ""}`} onClick={handleTab1}>Sedang Dibaca</div>
          <div className={`${styles.navItem} ${activeTab === "tab2" ? styles.active : ""}`} onClick={handleTab2}>Selesai Dibaca</div>
        </div>
        <section>
                <div className={styles.inputSearchContent}>
                <div className={styles.inputSearchContainer}>
                    <BiSearch />
                    <input placeholder="Search books, authors.." />
                </div>
                    <button onClick={handleSubmit}>
                <BiMenuAltLeft />
                        <p>Sortir</p>
                    </button>
                </div>
        </section>
        <div className={styles.outlet}>  
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}  
        </div>
      </div>
        
      
      {
            showModal &&
                <div className={styles.modalContainer}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>Sortir</h2>
                            <h5>Reset Semua</h5>
                        </div>
                        <div className={styles.modalContaint}>
                            <div className={styles.radioButton1}>
                            <input type="radio" />
                                <p>jumlah a - z</p>
                            </div>
                            <div className={styles.radioButton2}>
                            <input type="radio" />
                                <p>jumlah z - a</p>
                            </div>
                        </div>
                    <button onClick={() => setShowModal(false)}>
                            SIMPAN
                    </button>
                    </div>
                </div>
            }
      </>
    )
  }
  export default Tabs
