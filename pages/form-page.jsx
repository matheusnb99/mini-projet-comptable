/* eslint-disable react-hooks/rules-of-hooks */
import * as yup from "yup"
import { Formik } from "formik"
import { useCallback, useContext } from "react"
import FormField from "./components/ui/FormField"
import Button from "./components/ui/Button"
import Link from "next/link"
import AppContext from "./AppContext"

const initialValues = {
  libelleDepense: "",
  valueDepense: 0,
}
const validationSchema = yup.object().shape({
  libelleDepense: yup.string().required().label("Libellé depense"),
  valueDepense: yup.number().required().label("Value depense"),
})

const formPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { add, state } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    (entry) => {
      add(entry)
      // eslint-disable-next-line no-console
      console.log(state)
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
          <form onSubmit={handleSubmit} noValidate>
            <FormField
              name="libelleDepense"
              type="text"
              placeholder="What's this expanse name"
            >
              Libellé depense
            </FormField>
            <FormField name="valueDepense" type="number" placeholder="Value">
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
