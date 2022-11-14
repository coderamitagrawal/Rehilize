import React from "react";
import "./Contact.css";
import { Formik, Form, Field,  } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required*"),
  lastName: Yup.string().required("Last Name is Required*"),
  email: Yup.string().email("Invalid email").required('Email is Required*')
});

export const Contact = () => {

  return (
    <div className="container-fluid contact-wrapper">
      <div className="container">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone:"",
            help:"select option",
            helpTextArea:"",
            emailCheckBox:false,
            phoneCheckBox:false,
            jobField:"",
            orgField:"",
            mailingCheck:false
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
        {({ errors, touched, values }) => (
        <Form>
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-card">
              <h3 className="contact-title">Name</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First</label>
                    <Field
                      type='text'
                      className="form-control"
                      name="firstName"
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName ? (
                        <div className="reqError">{errors.firstName}</div>
                      ) : null}

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName ? (
                        <div className="reqError">{errors.lastName}</div>
                      ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="contact-card">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="contact-title">Email</h3>
                  <div className="form-group">
                    <label>Email@email.com</label>
                    <Field 
                    type="email" 
                    className="form-control"
                    name='email' 
                    value={values.email}
                    />
                    {errors.email && touched.email ? (
                        <div className="reqError">{errors.email}</div>
                      ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="contact-title">Phone</h3>
                  <div className="form-group">
                    <label>(123)456-7890</label>
                    <Field type="number" className="form-control" name='phone' />
                    {/*
                     {errors.phone && touched.phone ? (
                         <div>{errors.phone}</div>
                       ) : null} 
                    */}
                  </div>
                </div>
              </div>
              <div className="row checkbox-row">
                <div className="col-md-6">
                  <h4 className="form-label">
                    How would you like to be contacted?
                  </h4>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <label className="form-check-label" for="flexCheckDefault">
                      Email
                    </label>
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      name='emailCheckBox'
                    />
                    
                     {/*
                      {errors.emailCheckBox && touched.emailCheckBox ? (
                          <div>{errors.emailCheckBox}</div>
                        ) : null} 
                     */} 
                    
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" for="flexCheckDefault">
                      Phone
                    </label>
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      name='phoneCheckBox'
                    />
                    {/*
                     {errors.phoneCheckBox && touched.phoneCheckBox ? (
                         <div>{errors.phoneCheckBox}</div>
                       ) : null} 
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="contact-card">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="contact-title">Job Title</h3>
                  <div className="form-group">
                    <label>Job Field</label>
                    <Field type="text" className="form-control" name='jobField' />
                    {/*
                     {errors.jobField && touched.jobField ? (
                         <div>{errors.jobField}</div>
                       ) : null} 
                    */}
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="contact-title">Job Field</h3>
                  <div className="form-group">
                    <label>Org Field</label>
                    <Field type="text" className="form-control" name='orgField' />
                    {/*
                     {errors.orgField && touched.orgField ? (
                         <div>{errors.orgField}</div>
                       ) : null} 
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="contact-card">
              <h3 className="contact-title">How can we help?</h3>
              <p className="contact-subtitle">
                Please select an option from the dropdown menu below and/or use
                the optional space to provide us with more detail.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-select-box">
                    <Field as="select" className="form-control" name="help">
                      <option value='select option' >Please select and option</option>
                      <option value='title'>Title</option>
                    </Field>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group mt-4">
                    <Field as="textarea" className="form-control" rows="6" name='helpTextArea' />
                   {/*
                     {errors.helpTextArea && touched.helpTextArea ? (
                         <div>{errors.helpTextArea}</div>
                       ) : null} 
                   */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="contact-card">
              <h3 className="contact-title title-small">Mailing List</h3>
              <p className="contact-subtitle">
                Thank you for your interest in RHEALIZE! By submitting this from
                you are providing consent to be automatically included on our
                mailing list; you may opt out at anytime. If you do not wish to
                be included, you can opt ot now by clicking below. For more
                details, please visit our <b>Privacy Policy</b> page.
              </p>
              <div className="row mt-4 mb-4">
                <div className="col-md-12">
                  <div className="form-check check-right">
                    <label className="form-check-label" for="accept">
                      No, I do not wish to receive emails from you with tips on
                      how to improve my employee hiring and engagement / job
                      search process.
                    </label>
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      id="accept"
                      name='mailingCheck'
                    />
                   {/*
                     {errors.mailingCheck && touched.mailingCheck ? (
                         <div>{errors.mailingCheck}</div>
                       ) : null} 
                   */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="contact-submit text-center">
              <input
                type="submit"
                className="btn button-light text-uppercase"
              />
            </div>
          </div>
        </div>
        </Form>
        )}
        </Formik>
      </div>
    </div>
  );
};