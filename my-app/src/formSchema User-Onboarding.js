
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('A username is required')
        .min(8,'At least 8 characters are required'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('An email address is required to register'),
    password: yup
        .string()
        .required('Must create a password')
        .min(9, '9 characters are required for your password'),
    terms: yup.boolean(),
})

export default formSchema