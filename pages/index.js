import TableauComptable from "../src/components/TableauComptable"
import Link from "next/link"
const Home = () => {
  return (
    <div className="flex flex-col flex-wrap items-center">
      <div className="basis-[100%]">
        <h1 className="text-2xl">DASHBOARD</h1>
        <Link href="/form-page">
          <a>Add new entry</a>
        </Link>
      </div>
      <TableauComptable></TableauComptable>
    </div>
  )
}
export default Home
