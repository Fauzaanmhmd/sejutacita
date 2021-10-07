import { BiChevronLeft } from "react-icons/bi"
import styles from "../styles/Detailbooku.module.scss"
import { FiBookmark } from "react-icons/fi";
import { IoMdShare } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { ImHeadphones } from "react-icons/im";
import React, { useState } from "react";
import { FcDocument } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import Link from 'next/link'
import Image from 'next/image'
import {FaTwitter} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"


const Detailbooku = () => {
    const [showModal, setShowModal] = useState(false)
    const handleSubmit = () => {
        setShowModal(true)
    }
        const [showModalShare, setShowModalShare] = useState(false)
        const handleSubmit1 = () => {
            setShowModalShare(true)
        }

    return (
        <>
            <header>
                <nav className={styles.navbar}>
                    <Link href="/" passHref>
                        <div className={styles.iconBack}>
                            <BiChevronLeft />
                        </div>
                    </Link>
                    <div className={styles.share}>
                        <button className={styles.btnShare} onClick={handleSubmit1}>
                        <IoMdShare />
                        </button>
                    </div>
                    <div className={styles.save}>
                        <FiBookmark />
                    </div>
                </nav>
            </header>
            <section className={styles.content}>
                <div className={styles.gambarBuku}>
                    <Image width={200} height={250} alt="" src="https://sejutacita.id/static/media/cover.d51c4563.png" />
                </div>
                <div className={styles.button}>
                    <button onClick={handleSubmit} className={styles.buttonDengar}>
                        <ImHeadphones />
                        <p>DENGAR</p>
                    </button>
                    <button className={styles.buttonBaca}>
                        <GoBook />
                        <p>BACA</p>
                    </button>
                </div>
            </section>
            <section className={styles.performBuku}>
                <h2>High Performance Habits</h2>
                <h3>Brendon Burchard</h3>
                <div className={styles.bacaBuku}>
                    <FcDocument />
                    <h4>8 bab</h4>
                    <FcAlarmClock />
                    <h4>25 menit</h4>
                </div>

                <div className={styles.tentangBuku}>
                    <h2>Tentang Buku Ini</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nulla deserunt aperiam nobis, adipisci quis velit vitae maiores praesentium dolor blanditiis, nesciunt mollitia? Possimus voluptatibus, nulla commodi itaque et optio!</p>
                </div>
            </section>

            <section className={styles.isiBuku}>
                <h2>Apa saja didalamnya ?</h2>
                <div className={styles.detailIntro}>
                    <div className={styles.detailAngka}>
                        <h3>1</h3>
                    </div>
                    <div className={styles.detailTulisan}>
                        <h3>Intro</h3>
                    </div>
                </div>
                <div className={styles.detailIntro}>
                    <div className={styles.detailAngka}>
                        <h3>2</h3>
                    </div>
                    <div className={styles.detailTulisan}>
                        <h3>Kebiasaan No. 1: Mencari Kejelasan</h3>
                    </div>
                </div>
                <div className={styles.detailIntro}>
                    <div className={styles.detailAngka}>
                        <h3>3</h3>
                    </div>
                    <div className={styles.detailTulisan}>
                        <h3>Kebiasaan No. 2: Menciptakan Energi</h3>
                    </div>
                </div>
                <div className={styles.detailIntro}>
                    <div className={styles.detailAngka}>
                        <h3>4</h3>
                    </div>
                    <div className={styles.detailTulisan}>
                        <h3>Kebiasaan No. 3: Meningkatkan Kebutuhan</h3>
                    </div>
                </div>
                <div className={styles.detailIntro}>
                    <div className={styles.detailAngka}>
                        <h3>5</h3>
                    </div>
                    <div className={styles.detailTulisan}>
                        <h3>Kebiasaan No. 4: Meningkatkan Produktivitas</h3>
                    </div>
                </div>
                <div className={styles.detailIntro}>
                    <div className={styles.detailAngka}>
                        <h3>6</h3>
                    </div>
                    <div className={styles.detailTulisan}>
                        <h3>Kebiasaan No. 5: Mengembangkan Pengaruh</h3>
                    </div>
                </div>
                <div className={styles.detailIntro}>
                    <div className={styles.detailAngka}>
                        <h3>7</h3>
                    </div>
                    <div className={styles.detailTulisan}>
                        <h3>Kebiasaan No. 6: Menunjukan Keberanian</h3>
                    </div>
                </div>
                <div className={styles.detailIntro}>
                    <div className={styles.detailAngka}>
                        <h3>8</h3>
                    </div>
                    <div className={styles.detailTulisan}>
                        <h3>Catatan penutup</h3>
                    </div>
                </div>
            </section>

            {
                showModal &&
                <div className={styles.modalContainer}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h3>Welcome to Booku Free Trial</h3>
                        </div>

                        <div className={styles.modalContaint}>
                            <ul>
                                <li> Gain access to 1(one) Booku of your choice for free</li>
                                <li> The slot is counted after you click Read / Listen on any Booku </li>
                            </ul>
                        </div>
                        <div className={styles.modalHeader}>
                            <h3>Happy Reading!</h3>
                        </div>
                        <div className={styles.modalButton}>
                            <button className={styles.buttonStart}>START FREE TRIAL</button>

                            <button onClick={() => setShowModal(false)} className={styles.buttonNanti}>NANTI SAJA</button>
                        </div>
                    </div>
                </div>
            }
            {
                showModalShare &&
                <div className={styles.modalContainer}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalSocmed}>
                        <div className={styles.modalTwitter}>
                            <FaTwitter />
                        </div>
                        <div className={styles.modalTelegram}>
                            <FaTelegram />
                        </div>
                        <div className={styles.modalInstagram}>
                            <FaInstagram />
                        </div>
                        <div className={styles.modalFacebook}>
                            <FaFacebookF />
                        </div>
                    </div>
                        <div onClick={() => setShowModalShare(false)} className={styles.modalHeader}>
                            <h4>BATAL</h4>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Detailbooku