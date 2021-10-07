import styles from "../styles/Category.module.scss"

const Category = ({ datas }) => {
    return (
        <section className={styles.category}>
            <h2>Eksplor Kategori</h2>
            <div className={styles.container}>

                {
                    datas.map((data, i) => {
                        return (
                            <div key={i} className={styles.item}>
                                {data.name}
                            </div>
                        )
                    })
                }


            </div>
        </section>

    )
}

export default Category