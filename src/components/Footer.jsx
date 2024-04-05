const Footer = () => {
  return (
    <>
      <div className="container bg-secondary bg-dark ">
        <footer className="py-3 my-4 ">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-dark text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-dark text-white">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-dark text-white">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-dark text-white">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-dark text-white">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-dark text-white">
            © 2024 Company, Inc
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
