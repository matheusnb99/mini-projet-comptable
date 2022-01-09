import styles from "../styles/Home.module.css"
import TableauComptable from "./components/TableauComptable"
import Link from "next/link"
const Home = () => {
  return (
    <div className={styles.container}>
      <TableauComptable></TableauComptable>
      <Link href="/form-page">
        <a>Add new entry</a>
      </Link>
    </div>
  )
}
export default Home
