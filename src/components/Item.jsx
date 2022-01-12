import PInt from "./PInt"

const Item = (props) => {
  const { label, value } = props

  return (
    <>
      <PInt className="text-left" value={value}></PInt>
      <p>{label}</p>
    </>
  )
}
export default Item
