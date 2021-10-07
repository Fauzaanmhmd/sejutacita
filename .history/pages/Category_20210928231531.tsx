import styles from "../styles/Category.module.scss"

const Category = ({ data }) => {
    return (
        <section className={styles.category}>
            <h2>Eksplor Kategori</h2>
            <div className={styles.container}>
                <div className={styles.item}>
                    Happiness & Mindfulness
                </div>
            </div>
        </section>
    )
}

export default Category