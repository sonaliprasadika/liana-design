export default function Footer() {
  return (
    <footer className="page-footer pb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <p className="text-white px-2">Liyana Technologies</p>
            <div className="d-flex text-white align-items-end">
              <div className="col-md-7 px-2">
                <p className="mb-0">
                  <b>Sales and inquiries</b>
                </p>
                <p className="mb-0">Email: Sales@liyanatech.com</p>
                <p className="mb-0">Phone: +358 10 387 7053</p>
              </div>
              <div>
                <button className="btn btn-success btn-sm-green">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 mt-2">
            <div className="d-flex align-items-start justify-content-end">
              <div className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Company
                </a>
              </div>
              <div className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Product
                </a>
              </div>
              <div className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Contact Us
                </a>
              </div>
              <div className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  News
                </a>
              </div>
              <div className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Intranet
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <div className="nav-item">
                <a className="nav-link text-white bi bi-amd">
                  <i className="material-icons footer-icon">facebook</i>
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link text-white bi bi-amd">
                  <i className="material-icons footer-icon">facebook</i>
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link text-white bi bi-amd">
                  <i className="material-icons footer-icon">facebook</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
