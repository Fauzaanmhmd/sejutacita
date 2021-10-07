import styles from "../styles/Category.module.scss"

const Category = ({ dataCategories }) => {
    return (
        <section className={styles.category}>
            <h2>Eksplor Kategori</h2>
            <div className={styles.container}>
                <div className={styles.item}>
                    Happiness & Mindfulness
                </div>
                <div className={styles.item}>
                    Ivestment & Finance
                </div>
                <div className={styles.item}>
                    Personal Development
                </div>
                <div className={styles.item}>
                    Career & business
                </div>
                <div className={styles.item}>
                    Self-growth & Motivation
                </div>
                <div className={styles.item}>
                    Biography
                </div>
                <div className={styles.item}>
                    Productivity & Time Management
                </div>
                <div className={styles.item}>
                    Startup & Enterpreneurship
                </div>
                <div className={styles.item}>
                    Sports
                </div>
                <div className={styles.item}>
                    Society & Politics
                </div>
                <div className={styles.item}>
                    Psychology
                </div>
                <div className={styles.item}>
                    Marketing & Sales
                </div>
                <div className={styles.item}>
                    Technology & Innovation
                </div>
            </div>

        </section>
    )
}

export default Category