import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel() {
    return (
        <>
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/opening.jpg" className="d-block w-100" alt="Perro" />
    </div>
    <div className="carousel-item">
      <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg" className="d-block w-100" alt="Perro2" />
    </div>
    <div className="carousel-item">
      <img src="https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200703104728-labrador-retriever-stock-super-169.jpg?quality=100&strip=info" className="d-block w-100" alt="Perro3" />
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
        </>
    );
}


export default Carousel;