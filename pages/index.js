import TableauComptable from "./components/TableauComptable"
import Link from "next/link"
const Home = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="basis-[100%]">
        <h1>DASHBOARD</h1>
        <Link href="/form-page">
          <a>Add new entry</a>
        </Link>
      </div>
      <TableauComptable></TableauComptable>
    </div>
  )
}
export default Home
