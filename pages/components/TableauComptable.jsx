import { useContext } from "react"
import AppContext from "../AppContext"
import classNames from "classnames"
import Item from "./Item"
import PInt from "./PInt"

const TableauComptable = () => {
  const { state } = useContext(AppContext)
  let i = 0
  let calculLeft = 0
  let calculRigth = 0

  return (
    <div className="w-3/4 ml-9">
      <table className="table-auto w-full border-collapse ">
        <thead>
          <tr>
            <th className="border border-gray-600">id</th>
            <th className="border border-gray-600">+</th>
            <th className="border border-gray-600">-</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(state.items).map(([itemId, { label, value }]) => (
            <tr
              key={itemId}
              className={classNames(
                value >= 0 ? "Left" : "Right",
                i % 2 == 0 ? "bg-slate-100" : ""
              )}
            >
              <td className="border border-gray-300">{(i += 1)}</td>
              <td className="border border-gray-300 w-2/5">
                {value > 0 ? (
                  <>
                    <p className="invisible">{(calculRigth += value)}</p>
                    <Item label={label} value={value}></Item>
                  </>
                ) : (
                  ""
                )}
              </td>
              <td className="border border-gray-300 w-2/5">
                {value <= 0 ? (
                  <>
                    <p className="invisible">{(calculLeft += value)}</p>
                    <Item label={label} value={value}></Item>
                  </>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
          <tr key="total">
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300 w-2/5">
              Total: <PInt value={calculRigth}></PInt>
            </td>
            <td className="border border-gray-300 w-2/5">
              Total: <PInt value={calculLeft}></PInt>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex  justify-between">
        <p className="border border-gray-300 w-1">result: </p>
        <PInt value={calculRigth + calculLeft}>{calculRigth + calculLeft}</PInt>
      </div>
    </div>
  )
}
export default TableauComptable
