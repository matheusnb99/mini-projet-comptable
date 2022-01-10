/* eslint-disable react-hooks/rules-of-hooks */
import * as yup from "yup"
import { Formik } from "formik"
import { useCallback, useContext } from "react"
import FormField from "./components/ui/FormField"
import Button from "./components/ui/Button"
import Link from "next/link"
import AppContext from "./AppContext"
import TableauComptable from "./components/TableauComptable"

const initialValues = {
  label: "",
  value: 0,
}
const validationSchema = yup.object().shape({
  label: yup.string().required().label("Libellé depense"),
  value: yup.number().required().label("Value depense"),
})

const formPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { add, state } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    (entry) => {
      add(entry)
      // eslint-disable-next-line no-console
      console.log("entry")
      // eslint-disable-next-line no-console
      console.log(entry)
      // localStorage.setItem("label", entry.label)
    },
    [add]
  )

  return (
    <>
      <Formik
        onSubmit={(values) => {
          handleFormSubmit(values)
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit} noValidate className="mx-auto">
            <FormField
              name="label"
              type="text"
              placeholder="What's this expanse name"
            >
              Libellé depense
            </FormField>
            <FormField name="value" type="number" placeholder="Value">
              Value
            </FormField>
            <Button type="submit" disabled={!isValid}>
              ADD
            </Button>
          </form>
        )}
      </Formik>
      <Link href="/">
        <a>Cancel</a>
      </Link>
    </>
  )
}
export default formPage
