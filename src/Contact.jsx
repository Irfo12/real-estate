import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
export default function Contact() {
  const { register, handleSubmit, errors, reset } = useForm({
    mode:"onTouched"
  });

  //onsubmit function
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="contact_page_bg_pic">
      <br></br>
      <div className="card container my-5 z-depth-1">
        <section className="dark-grey-text">
          <div className="">
            <section className="mb-4">
              <h2 className="h1-responsive font-weight-bold text-center my-4">
                Contact us
              </h2>

              <p className="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </p>

              <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            name="fullname"
                            className={classNames("form-control", {
                              "is-invalid": errors.fullname,
                            })}
                            ref={register({
                              required: "Name is required",
                              minLength: {
                                value: 5,
                                message: "AtLeast 5 characters",
                              },
                            })}
                          />
                          {errors.fullname && (
                            <p className="invalid-feedback">
                              {errors.fullname.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            placeholder="Your Name"
                            name="email"
                            className={classNames("form-control", {
                              "is-invalid":errors.email
                            })}
                            ref={register({
                              required:"Email is required",
                              pattern:{
                                value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message:"Invalid Email"
                              }
                            })}
                          />
                          {
                            errors.email && (
                              <p className="invalid-feedback">
                              {errors.email.message}
                            </p>
                            )
                          }
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                            className="form-control"
                            ref={register}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form">
                          <textarea
                            type="text"
                            id="message"
                            placeholder="Your message"
                            name="usermessage"
                            rows="2"
                            className={classNames("form-control md-textarea", {
                              "is-invalid":errors.usermessage
                            })}
                            ref={register({
                              required:"Message required",
                              minLength:{
                                value:20,
                                message:"AtLeast 20 chracters Long"
                              }
                            })}
                          ></textarea>
                          {
                            errors.usermessage && (
                              <p className="invalid-feedback">
                              {errors.usermessage.message}
                            </p>
                            )
                          }
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-md-left">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </form>
                  <div className="status"></div>
                </div>

                <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                      <p>San Francisco, CA 94126, USA</p>
                    </li>

                    <li>
                      <i className="fas fa-phone mt-4 fa-2x"></i>
                      <p>+ 01 234 567 89</p>
                    </li>

                    <li>
                      <i className="fas fa-envelope mt-4 fa-2x"></i>
                      <p>contact@mdbootstrap.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
