import styles from "../styles/Category.module.scss"
import { FC } from "react"
type Iprops = {
    datas: any
}
const Category: FC<Iprops> = ({ datas }) => {
    return (
        <section className={styles.category}>
            <h2>Eksplor Kategori</h2>
            <div className={styles.container}>

                {
                    datas.map((data: any, i: number) => {
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