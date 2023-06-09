const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="fw-bold">© ECOMMERCE {new Date().getFullYear()}</p>
          </div>
          <div className="col-md-12 d-flex justify-content-center align-items-center gap-2">
            <a
              className="link-light border border-1 rounded-5 p-1 item-link-footer"
              href="#"
            >
              <i className="bx bxl-instagram bx-md"></i>
            </a>
            <a
              className="link-light border border-1 rounded-5 p-1 item-link-footer"
              href="#"
            >
              <i className="bx bxl-linkedin bx-md"></i>
            </a>
            <a
              className="link-light border border-1 rounded-5 p-1 item-link-footer"
              href="#"
            >
              <i className="bx bxl-youtube bx-md"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
