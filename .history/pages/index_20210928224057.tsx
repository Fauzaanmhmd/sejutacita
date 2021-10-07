import type { NextPage } from 'next'
import Navbar from './Navbar'
import styles from '../styles/Home.module.scss'
import Category from './Category'
import Booku from './Booku'
import { getCategories } from '../services/category'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Category />
      <Booku />
      <Booku />
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await getCategories()

  return {
    props: {
      dataCategories
    }
  }
}
export default Home
