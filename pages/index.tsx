import Navbar from './Navbar'
import styles from '../styles/Home.module.scss'
import Category from './Category'
import Booku from './Booku'
import { getCategories } from '../services/category/category'
import { FC } from "react"

type Iprops = {
  dataCategories: any
}

const Home: FC<Iprops> = ({ dataCategories }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Category datas={dataCategories} />
      <Booku title="Booku Populer Minggu Ini" bg="white" />
      <Booku title="Rekomendasi Booku Minggu Ini"/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data: dataCategories } = await getCategories()
    
  return {
    props: {
      dataCategories
    }
  }
}
export default Home
