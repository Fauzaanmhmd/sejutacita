import styles from "../styles/Navbar.module.scss"
import { BiSearch } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import { GiBookshelf } from "react-icons/gi"
import Link from 'next/link'
import React, { useState } from "react";
import indonesia from "../public/img/indonesia.png"
import british from "../public/img/british.png"
import Image from "next/image"


const Navbar = () => {
    const [activeBtn, setActiveBtn] = useState("en");
    const handleBtn = (bahasa:string) => {
        if (bahasa === "en")
        {
            setActiveBtn("id")
            
        } else {

            setActiveBtn("en")
        }
    }
    
    return (
        <>
            <header>
                <nav className={styles.navbar}>
                    <div className={styles.iconBack}>
                        <BiChevronLeft />
                    </div>
                    <div className={styles.inputSearchContainer}>
                        <BiSearch />
                        <input placeholder="Search books, authors.." />
                    </div>
                    <div className={`${styles.language}`}>
                        {activeBtn === "en" ? 
                        <Image onClick={ () => handleBtn("en")} width={50} height={40} alt="" className={styles.language_logo} src={british} /> :
                        <Image onClick={ () => handleBtn("id")} width={50} height={40} alt="" className={styles.language_logo} src={indonesia} /> }
                    </div>
                    <div className={styles.library}>
                    <Link href="./Library" passHref>
                        <GiBookshelf />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar