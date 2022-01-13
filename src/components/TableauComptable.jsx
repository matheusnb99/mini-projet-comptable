import { useContext } from "react"
import AppContext from "../../pages/AppContext"
import classNames from "classnames"
import Item from "./Item"
import PInt from "./PInt"

const TableauComptable = () => {
  const { state } = useContext(AppContext)

  return (
    <div className="w-3/4 ml-9">
      <table className="table-auto w-full border-collapse ">
        <thead>
          <tr>
            <th className="border border-gray-600">+</th>
            <th className="border border-gray-600">-</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(state).map(([itemId, { label, value }]) => (
            <tr
              key={itemId}
              className={classNames(
                value >= 0 ? "Left" : "Right",
                itemId % 2 == 0 ? "bg-slate-100" : ""
              )}
            >
              <td className="border border-gray-300 w-2/5">
                {value > 0 ? (
                  <>
                    <Item label={label} value={value}></Item>
                  </>
                ) : (
                  ""
                )}
              </td>
              <td className="border border-gray-300 w-2/5">
                {value <= 0 ? (
                  <>
                    <Item label={label} value={value}></Item>
                  </>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
          <tr key="total">
            <td className="border border-gray-300">
              <div className="flex justify-between">
                Total:
                <PInt
                  value={state
                    .filter((x) => x.value > 0)
                    .reduce(
                      (accumulator, { value }) => accumulator + parseInt(value),
                      0
                    )}
                ></PInt>
              </div>
            </td>
            <td className="border border-gray-300">
              <div className="flex justify-between">
                Total:
                <PInt
                  value={state
                    .filter((x) => x.value < 0)
                    .reduce(
                      (accumulator, { value }) => accumulator + parseInt(value),
                      0
                    )}
                ></PInt>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex  justify-between">
        <p className="border border-gray-300 w-1">result: </p>
        <PInt
          value={state.reduce(
            (accumulator, { value }) => accumulator + parseInt(value),
            0
          )}
        ></PInt>
      </div>
    </div>
  )
}
export default TableauComptable
