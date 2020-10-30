import React from 'react';


const Card = () => (

<div className= "ed-grid m-grid-3 l-section" >  {/* Tamaño del card */}
<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg" alt="Fotito perrito"/>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      Lomito alimentado con purina
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://p1.pxfuel.com/preview/370/738/453/dog-puppy-animal-cute-adorable-sweet.jpg" alt="Fotito perrito2"/>
          </div>
        </div>
        <span className="small">Lomito plateado</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="google.com">$ 20USD</a>
    </div>
  </div>
</article>
</div>
)

export default Card; 