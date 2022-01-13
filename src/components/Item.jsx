import PInt from "./PInt"

const Item = (props) => {
  const { label, value } = props

  return (
    <>
      <div className="flex flex-col justify-center">
        <PInt className="text-left" value={value}></PInt>
        <p>{label}</p>
      </div>
    </>
  )
}
export default Item
