/* eslint-disable react-hooks/rules-of-hooks */
import * as yup from "yup"
import { Formik } from "formik"
import { useCallback, useContext } from "react"
import FormField from "../src/components/ui/FormField"
import Button from "../src/components/ui/Button"
import Link from "next/link"
import AppContext from "./AppContext"

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { add } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    (input) => {
      add(input)
      // localStorage.setItem("label", input.label)
    },
    [add]
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
      </div>
    </>
  )
}
export default formPage
