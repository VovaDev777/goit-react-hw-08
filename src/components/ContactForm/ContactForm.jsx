import { Formik, Form, Field } from 'formik';
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux"
import { addContact } from '../../redux/contacts/contactsOps'


const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Your name is too Short!')
        .max(50, 'Your name is too Long!')
        .required('This field is required'),
    number: Yup.string()
        .min(2, 'Your number is too Short!')
        .max(25, 'Your number is too Long!')
        .required('This field is required'),
});

const ContactFrom = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm();
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    number: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={UserSchema}
            >
                <Form>
                    <div className={css.form}>
                        <div className={css.formList}>
                            <div className={css.formItem}>
                                <label className={css.label}>Name</label>
                                <Field type="text" name="name" className={css.input} />
                            </div>
                            <div className={css.formItem}>
                                <label className={css.label}>Number</label>
                                <Field type="text" name="number" className={css.input} />
                            </div>
                        </div>
                        <button className={css.submitBtn} type="submit">Add contact</button>
                    </div>
                </Form>

            </Formik>
        </>
    )
}

export default ContactFrom