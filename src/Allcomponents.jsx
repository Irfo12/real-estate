import React from "react";
const Allcomponents = (props) => {
  return (
    <div>
      <div className="card card-cascade wider reverse">
        <div className="view view-cascade overlay bg_img_div">
          <div className="main_content">
            <h1 className="main_heading">{props.main_heading}</h1>
            <p className="main_paragraph">{props.main_text}</p>
            <a
              className="btn btn-md btn-info"
              href="/signup"
              style={{ borderRadius: "30px" }}
            >
              {props.btn_txt}
            </a>
          </div>
        </div>
        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title">
            <strong>{props.card_txt}</strong>
          </h4>
          <h6 className="font-weight-bold indigo-text py-2">
            {props.card_paragraph}
          </h6>
          <p className="card-text">{props.card_para_txt}</p>
          <a className="px-2 fa-lg li-ic">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="px-2 fa-lg tw-ic">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="px-2 fa-lg fb-ic">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

//Services Section
const Services = (props) => {
  return (
    <>
      <div className="container mt-5">
        <section className="dark-grey-text text-center">
          <h3 className="font-weight-bold mb-4 pb-2">{props.main_heading}</h3>

          <p className="text-muted w-responsive mx-auto mb-5">
            {props.main_para}{" "}
          </p>
          <div className="row">
            <div className="col-12">
              <ul
                className="nav md-pills flex-center flex-wrap mx-0 ul_md_pills"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active font-weight-bold"
                    data-toggle="tab"
                    href="#panel31"
                    role="tab"
                  >
                    ALL
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold"
                    data-toggle="tab"
                    href="#panel32"
                    role="tab"
                  >
                    BRANDING
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold"
                    data-toggle="tab"
                    href="#panel33"
                    role="tab"
                  >
                    PACKAGING
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold"
                    data-toggle="tab"
                    href="#panel34"
                    role="tab"
                  >
                    PRINT DESIGN
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade show in active"
              id="panel31"
              role="tabpanel"
            >
              <div className="row mt-4">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/6077453/pexels-photo-6077453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Constructed project blocks
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Client for Property system
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/6077367/pexels-photo-6077367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Upcoming project Discounts
                  </p>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel32" role="tabpanel">
              <div className="row mt-4">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel33" role="tabpanel">
              <div className="row mt-4">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel34" role="tabpanel">
              <div className="row mt-4">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="view overlay zoom z-depth-2">
                    <img
                      src="https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-uppercase text-center font-weight-bold text-muted my-4">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const AboutComponents = (props) => {
  return (
    <>
      <div>
        <div className="contact_page_bg_pic">
          <br />
          <div className=" card container z-depth-1">
            <section className="dark-grey-text">
              <div className="row pr-lg-5">
                <div className="col-md-7 mb-4">
                  <div className="view">
                    <img
                      src={props.img_src}
                      className="img-fluid"
                      alt="smaple image"
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div>
                    <h3 className="font-weight-bold mb-4">
                      {props.main_heading}
                    </h3>

                    <p>{props.main_paragraph}</p>
                    <a
                      href="/contact"
                      type="button"
                      className="btn btn-md btn-orange btn-rounded mx-0"
                    >
                      {props.btn_txt}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

const PortfolioCode = (props) => {
  return (
    <>
      <div className="container my-5">
        <section>
          <div
            className="modal fade"
            id="basicExampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-body p-0">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>

                  <div className="row">
                    <div className="col-md-6 py-5 pl-5">
                      <h5 className="font-weight-normal mb-3">
                        Property_Dealing_Center
                      </h5>

                      <p className="text-muted">
                        Hello! Welcome to our dealing center here you can place
                        an order of your home with beatiful spectutaram and and
                        complete your dreams with it as you can, we provided
                      </p>

                      <ul className="list-unstyled font-small mt-5">
                        <li>
                          <p className="text-uppercase mb-2">
                            <strong>Client</strong>
                          </p>
                          <p className="text-muted mb-4">Envato Inc.</p>
                        </li>

                        <li>
                          <p className="text-uppercase mb-2">
                            <strong>Date</strong>
                          </p>
                          <p className="text-muted mb-4">June 27, 2019</p>
                        </li>

                        <li>
                          <p className="text-uppercase mb-2">
                            <strong>Skills</strong>
                          </p>
                          <p className="text-muted mb-4">
                            Real Estate Training
                          </p>
                        </li>

                        <li>
                          <p className="text-uppercase mb-2">
                            <strong>Address</strong>
                          </p>
                          <a href="http://irfanofficial.ml">
                            Irfanofficial
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <div className="view rounded-right">
                        <img
                          className="img-fluid"
                          src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                          alt="Sample image"
                          style={{height:"570px"}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">
            {props.heading}
          </h6>
          <h3 className="font-weight-bold text-center dark-grey-text pb-2">
            {props.main_heading}
          </h3>
          <hr className="w-header my-4" />
          <p className="lead text-center text-muted pt-2 mb-5">
            {props.main_para}
          </p>

          <div className="row">
            <div className="col-12">
              <ul
                className="nav md-pills p_md_pills flex-center flex-wrap mx-0"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active font-weight-bold text-uppercase"
                    data-toggle="tab"
                    href="#panel31"
                    role="tab"
                  >
                    ALL
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold text-uppercase"
                    data-toggle="tab"
                    href="#panel32"
                    role="tab"
                  >
                    Design
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold text-uppercase"
                    data-toggle="tab"
                    href="#panel33"
                    role="tab"
                  >
                    Mockup
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content mb-5">
            <div
              className="tab-pane fade show in active"
              id="panel31"
              role="tabpanel"
            >
              <div className="row mt-4">
                <div className="col-md-12 col-lg-4">
                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Phone Bag</h5>
                      <p className="card-text text-uppercase mb-3">Bag, Box</p>
                    </div>
                  </a>

                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Paper Bag</h5>
                      <p className="card-text text-uppercase mb-3">Bag</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Book</h5>
                      <p className="card-text text-uppercase mb-3">Book</p>
                    </div>
                  </a>

                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Notes</h5>
                      <p className="card-text text-uppercase mb-3">Note</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">T-shirt</h5>
                      <p className="card-text text-uppercase mb-3">Box</p>
                    </div>
                  </a>

                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img8.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Magazine</h5>
                      <p className="card-text text-uppercase mb-3">Book</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel32" role="tabpanel">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img9.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Paper Bag</h5>
                      <p className="card-text text-uppercase mb-3">Bag</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src=" https://mdbootstrap.com/img/Photos/Others/img4.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Book</h5>
                      <p className="card-text text-uppercase mb-3">Book</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img8.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Magazine</h5>
                      <p className="card-text text-uppercase mb-3">Book</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel33" role="tabpanel">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img3.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Phone Bag</h5>
                      <p className="card-text text-uppercase mb-3">Bag, Box</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img5.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Notes</h5>
                      <p className="card-text text-uppercase mb-3">Note</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src=" https://mdbootstrap.com/img/Photos/Others/img10.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">T-shirt</h5>
                      <p className="card-text text-uppercase mb-3">Box</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const FooterCode = (props) => {
  return (
    <>
      <footer className="page-footer font-small mdb-color darken-3 pt-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 mb-4">
                <iframe
                  className="embed-responsive-item"
                  src={props.video_link}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href={props.website_link}> {props.footer_txt}</a>
        </div>
      </footer>
    </>
  );
};

const FeaturesCode = () => {
    return(
        <>
        <div className="my-1 p-5 z-depth-1">
        <section className="dark-grey-text">
          <h2 className="text-center font-weight-bold mb-4 pb-2">
            Why is it so great?
          </h2>

          <p className="text-center lead grey-text mx-auto mb-5">
            Wiset company in whole pakistan with quality and with Discounts 
            system, buy and build your home now.
          </p>

          <div className="row">
            <div className="col-lg-5 text-center text-lg-left">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
                alt="Sample image"
              />
            </div>

            <div className="col-lg-7">
              <div className="row mb-3">
                <div className="col-1">
                  <i className="fas fa-share fa-lg indigo-text"></i>
                </div>

                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">Safety</h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    enim ad minima veniam, quis nostrum exercitationem ullam.
                    Reprehenderit maiores aperiam assumenda deleniti hic.
                  </p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-1">
                  <i className="fas fa-share fa-lg indigo-text"></i>
                </div>

                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">Technology</h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    enim ad minima veniam, quis nostrum exercitationem ullam.
                    Reprehenderit maiores aperiam assumenda deleniti hic.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <i className="fas fa-share fa-lg indigo-text"></i>
                </div>

                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">Finance</h5>
                  <p className="grey-text mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    enim ad minima veniam, quis nostrum exercitationem ullam.
                    Reprehenderit maiores aperiam assumenda deleniti hic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </>
    )
}
export { Allcomponents, Services, AboutComponents, PortfolioCode, FooterCode, FeaturesCode };
