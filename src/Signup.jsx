import React from "react";

export default function Signup() {
  return (
    <div>
      <div className="container-fluid mt-3 mb-5">
        <section style={{backgroundImage:"url('https://mdbootstrap.com/img/Photos/Others/images/90.jpg')", backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center center"}}>
          <div className="mask d-flex justify-content-center align-items-center">
            <div className="container py-5 my-5">
              <h3 className="font-weight-bold text-center white-text pb-2">
                Get Started Free
              </h3>
              <p className="lead text-center white-text pt-2 mb-5">
                Start to explore our product absolutely free.
              </p>

              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 col-xl-5">
                  <div className="card">
                    <div className="card-body z-depth-2 px-4">
                      <div className="md-form mt-3">
                        <i className="fa fa-user prefix grey-text"></i>
                        <input type="text" id="form3" className="form-control" />
                        <label for="form3">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input type="text" id="form2" className="form-control" />
                        <label for="form2">Your email</label>
                      </div>
                      <div className="md-form">
                        <i className="fas fa-key prefix grey-text"></i>
                        <input type="text" id="form4" className="form-control" />
                        <label for="form4">Your password</label>
                      </div>
                      <div className="text-center my-3">
                        <button className="btn btn-indigo btn-block">Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
