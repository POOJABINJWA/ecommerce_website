import React from 'react';

const Navbaar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0000FF" }}>
        <div className="container-fluid">
          <div className="navbar">
            <img src="https://i.pinimg.com/736x/fc/92/e4/fc92e41da2ee3221e4e78f7805d298a1.jpg" className="brand-logo" alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <img id="addtocart" src="https://i.pinimg.com/originals/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg" alt="" />
            <img className="logo" src="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png" alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbaar;

