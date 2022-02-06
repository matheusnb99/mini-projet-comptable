/* eslint-disable react-hooks/rules-of-hooks */
import * as yup from "yup"
import { Formik } from "formik"
import { useCallback, useContext } from "react"
import FormField from "../src/components/ui/FormField"
import Button from "../src/components/ui/Button"
import Link from "next/link"
import AppContext from "../src/AppContext"
import ActionMessage from "../src/components/ui/ActionMessage"

const initialValues = {
  label: "",
  value: 0,
}
const validationSchema = yup.object().shape({
  label: yup.string().required().label("input label"),
  value: yup
    .number()
    .notOneOf([0], "Value must be different from 0")
    .required()
    .label("input value"),
})

const formPage = () => {
  const { add, state } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    (input) => {
      add(input)
      localStorage.setItem("state", JSON.stringify([...state, input]))
    },
    [add, state]
  )

  return (
    <>
      <div className="flex  flex-col items-center">
        <Formik
          onSubmit={(values) => {
            handleFormSubmit(values)
          }}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, isValid }) => (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col w-2/3"
            >
              <FormField
                name="label"
                type="text"
                placeholder="What's this input's label"
                className="basis-[100%] flex-wrap"
              >
                Label
              </FormField>
              <FormField
                name="value"
                type="number"
                placeholder="Value"
                className="basis-[100%] flex-wrap"
              >
                Value
              </FormField>
              <Button type="submit" disabled={!isValid} customClassName="mt-7">
                ADD
              </Button>
            </form>
          )}
        </Formik>
        <Link href="/">
          <a>Cancel</a>
        </Link>
        <ActionMessage></ActionMessage>
      </div>
    </>
  )
}
export default formPage
