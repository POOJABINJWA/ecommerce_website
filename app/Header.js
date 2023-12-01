import React from 'react';
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <div className="cloths-box">
              <a className="nav-link" href="/Women">
                <div className="image-box">
                  <img
                    src="https://img.freepik.com/free-photo/young-happy-smiling-woman-casual-clothes-holding-laptop-sending-email-her-best-friend_231208-9568.jpg?w=2000"
                    alt="Women Image"
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
                <p>Women</p>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="electronics-box">
              <a className="nav-link" href="/Electronic">
                <div className="image-box">
                  <img
                    src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ="
                    alt="Electronic Image"
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
                <p>Electronics</p>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="jewellery-box">
              <a className="nav-link" href="/Jewelery">
                <div className="image-box">
                  <img
                    src="https://media.istockphoto.com/id/489814272/photo/gold-silver-rings-and-chains.jpg?s=612x612&w=0&k=20&c=d8tGqzlmqMZzhcYmgE_OyDNSQ9dAdo-T3BwdaSsDbhs="
                    alt="Jewelery Image"
                    style={{ width: '100px', height: '80px' }}
                  />
                </div>
                <p>Jewelery</p>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="shoes-box">
              <a className="nav-link" href="/Men">
                <div className="image-box">
                  <img
                    src="https://img.lovepik.com/free-png/20210918/lovepik-business-men-manipulate-pictures-with-laptop-png-image_400248627_wh1200.png"
                    alt="Men Image"
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
                <p>Men</p>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="shoes-box">
              <a className="nav-link" href="/Shoes">
                <div className="image-box">
                  <img
                    src="https://assets.ajio.com/medias/sys_master/root/20230502/TWj0/64513679d55b7d0c6390db36/-473Wx593H-469430180-white-MODEL.jpg"
                    alt="Shoes Image"
                    style={{ width: '80px', height: '70px' }}
                  />
                </div>
                <p>Shoes</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

