import React from 'react';

/* const curso = {
  "title": "React Desde Cero", 
  "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
  "price": "50USD"
}
 */

const Card = ({title, image, price, profesor}) => (

<div className= "ed-grid m-grid-3 l-section" >  {/* Tamaño del card */}
<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src= { image } alt= { title } />
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">{ title } </h3>
    {/* <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
         <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src= { curso.img } alt= { curso.title } />
          </div>
        </div> 
        <span className="small">Lomito plateado</span>
      </div>
    </div> */}

<div className="s-main-center">
           {` Prof. ${profesor} `} 
        </div>

    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="google.com"> {`$ ${ price } `} </a>
    </div>
  </div>
</article>
</div>
)

export default Card; 