import {Button, Form, Modal} from "react-bootstrap";
import * as yup from 'yup';
import {Formik} from "formik";
import {connect} from "react-redux";
import {addTicketAction} from "../actions";

function AddTicketModal({show, handleClose, dispatch})
{
    const initialFields = {company: 'Utair', price: '', transfers: ''};

    const schema = yup.object({
        company: yup.string().required(),
        price: yup.number()
            .test('is-money', "not a money pattern", (num) => (num + "").match(/^[0-9]+(\.[0-9]{1,2})?$/))
            .required(),
        transfers: yup.number().integer().min(0).max(3).required()
    });

    const onSubmit = (form, {resetForm}) => {
        dispatch(addTicketAction(form));
        resetForm();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Ticket</Modal.Title>
            </Modal.Header>

            <Formik
                enableReinitialize={true}
                initialValues={initialFields}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                {({
                      handleSubmit,
                      handleChange,
                      values,
                      touched,
                      isValid,
                      errors
                  }) =>
                    (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Modal.Body>
                                <Form.Group controlId="companyId">
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control
                                        required
                                        as="select"
                                        name="company"
                                        value={values.company}
                                        isInvalid={!!errors.company}
                                        onChange={handleChange}>
                                        <option key={1} value="Utair">Utair</option>
                                        <option key={2} value="Aeroflot">Aeroflot</option>
                                        <option key={3} value="NordWind">NordWind</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.company}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="priceId">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        required
                                        isInvalid={!!errors.price}
                                        value={values.price}
                                        onChange={handleChange}
                                        name="price"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.price}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="transfersId">
                                    <Form.Label>Number of Transfers</Form.Label>
                                    <Form.Control
                                        required
                                        as="select"
                                        isInvalid={!!errors.transfers}
                                        value={values.transfers}
                                        onChange={handleChange}
                                        name="transfers"
                                    >
                                        <option value="0">Direct Flight</option>
                                        <option value="1">1 Transfer</option>
                                        <option value="2">2 Transfers</option>
                                        <option value="3">3 Transfers</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.transfers}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" type="submit">Save</Button>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Form>
                    )
                }

            </Formik>
        </Modal>
    )
}

export default connect()(AddTicketModal)