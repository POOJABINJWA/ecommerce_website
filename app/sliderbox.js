import React from 'react';
const Sliderbox = () => {
  return (
    <div className="Slider"style={{ backgroundColor: 'lightgray' }}>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ width: "1400px", height: "500px" }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="image" src="https://cdn.pixabay.com/photo/2017/11/02/03/35/gothic-2910057_1280.jpg" alt="First slide" style={{ width: "1400px", height: "500px" }}/>
          </div>
          <div className="carousel-item">
            <img className="image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/839eae25a15f66af.png?q=20" alt="Second slide" style={{ width: "1400px", height: "500px" }} />
          </div>
          <div className="carousel-item">
            <img className="image" src="https://t3.ftcdn.net/jpg/05/60/30/40/240_F_560304045_GvutT9uQo7NjxPmD8EcD4rGNMQVDe38J.jpg" alt="Third slide" style={{ width: "1400px", height: "500px" }} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
};

export default Sliderbox;

