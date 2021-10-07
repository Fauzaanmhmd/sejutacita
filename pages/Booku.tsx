import styles from "../styles/Booku.module.scss"
import {FC} from "react"
import Link from "next/link"
import Image from "next/image"
import buku from "../public/img/cover.webp"

type Iprops = {
    title: any,
    bg?:string
}

const Booku:FC<Iprops> = ({title, bg}) => {
    return (
        <>
        <section className={bg === "white" ? styles.bgWhite : styles.bgBlue}>
            <h2>{title}</h2>
            <div className={styles.container}>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt="" src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
                <Link href="./Detailbooku" passHref>
                    <div className={styles.item}>
                        <Image width={200} height={250} alt=""  src={buku} />
                        <h3>Darren Hardy</h3>
                        <p>Self-growth & Motivation</p>
                    </div>
                </Link>
            </div>
        </section>
        </>
    )
}

export default Booku