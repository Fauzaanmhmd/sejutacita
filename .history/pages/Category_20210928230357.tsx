import styles from "../styles/Category.module.scss"

const Category = ({ data }) => {
    console.log("🚀 ~ file: Category.tsx ~ line 4 ~ Category ~ dataCategories", data)
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