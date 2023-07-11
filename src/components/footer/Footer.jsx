const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">© Hasib, 2023</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://github.com/Hasib192">
              <i class="bi bi-github"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.linkedin.com/in/hasibhosen/">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
