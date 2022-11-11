import React from "react";
import "./Contact.css";

export const Contact = () => {
    return (
        <div className="container-fluid contact-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-card">
                            <h3 className="contact-title">Name</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>First</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Last</label>
                                        <input type="text" className="form-control" />
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
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <h3 className="contact-title">Phone</h3>
                                    <div className="form-group">
                                        <label>(123)456-7890</label>
                                        <input type="number" className="form-control" />
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
                                    <div class="form-check">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Email
                                        </label>
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Phone
                                        </label>
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <h3 className="contact-title">Job Field</h3>
                                    <div className="form-group">
                                        <label>Org Field</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="contact-card">
                            <h3 className="contact-title">How can we help?</h3>
                            <p className="contact-subtitle">
                                Please select an option from the dropdown menu below and/or use the optional space to provide us with more detail.
                            </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group form-select-box">
                                        <select className="form-control">
                                            <option>Please select and option</option>
                                            <option>Title</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group mt-4">
                                        <textarea className="form-control" rows="6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="contact-card">
                            <h3 className="contact-title title-small">Mailing List</h3>
                            <p className="contact-subtitle">
                                Thank you for your interest in RHEALIZE! By submitting this from you are providing consent to be automatically included on our mailing list; you may opt out at anytime. If you do not wish to be included, you can opt ot now by clicking below. For more details, please visit our <b>Privacy Policy</b> page.
                            </p>
                            <div className="row mt-4 mb-4">
                                <div className="col-md-12">
                                    <div class="form-check check-right">
                                        <label class="form-check-label" for="accept">
                                            No, I do not wish to receive emails from you with tips on how to  improve my employee hiring and engagement / job search process.
                                        </label>
                                        <input class="form-check-input" type="checkbox" value="" id="accept" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="contact-submit text-center">
                            <input type="submit" className="btn button-light text-uppercase" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};