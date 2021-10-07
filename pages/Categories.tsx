import styles from "../styles/Categories.module.scss"
import { BiSearch } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import React, { useState } from "react";
import Link from 'next/link'
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image"


const Categories = () => {
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
            <h2>Happiness & Mindfulness</h2>
        </div>
        </Link>
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
        </nav>
        </header>
        <section className={styles.categories}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <Image width={200} height={250} alt="" src="https://sejutacita.id/static/media/cover.d51c4563.png" />
                    <h3>Darren Hardy</h3>
                    <p>Self-growth & Motivation</p>
                </div>
             </div>
        </section>

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

export default Categories