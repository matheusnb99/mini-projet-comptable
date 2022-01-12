import { Field } from "formik"
import Input from "./Input"

const FormField = (props) => {
  const { children, className, as: Component = Input, ...otherProps } = props

  return (
    <Field {...otherProps}>
      {({ field, meta: { touched, error } }) => (
        <div className={className}>
          <label className="block w-2/3 flex items-center justify-between">
            {children}
            <Component className="w-2/3 px-5 mx-5" {...field} {...otherProps} />
          </label>
          {touched && error ? (
            <p className="text-red-500 p-2 text-sm">{error}</p>
          ) : null}
        </div>
      )}
    </Field>
  )
}
export default FormField
