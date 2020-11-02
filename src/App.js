import React from 'react';
/* import Header from './components/Header';*/
/* import Card from './components/Card';  */
import Banner from './components/Banner';
import Curso from './components/Curso';
import Course from './components/Course';
/* import Grid from './components/Grid';
import Topbar from './components/Topbar'; */
import Formulario from './components/Formulario';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./styles/styles.scss";



/* Cursos o productos del card */

 /* const cursos = [
  {
    "title": "React desde cero",
    "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  },

  {
    "title": "CSS desde cero",
    "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
    "price": 40,
    "profesor": "Alvaro Felipe"
  },
  
  {
    "title": "HTML desde cero",
    "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
    "price": 50,
    "profesor": "Beto Alvaro"
  },

  {
    "title": "React desde cero",
    "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  },

  {
    "title": "React desde cero",
    "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  },

  {
    "title": "React desde cero",
    "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  },

  {
    "title": "React desde cero",
    "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  },

  {
    "title": "React desde cero",
    "image": "https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  },

] */
 

 const App = () => (

  <>

<Router>
<Switch>
    <Route path="/" exact component={ Banner } />
    <Route path="/curso/:id" component={ Course } />
    <Route path="/curso" component={ Curso } />
    <Route path="/formulario" component={ () => <Formulario name="Pagina de Contacto" /> } />
    <Route component={ () => (
      <div>
        <h1>
          Error 404
        </h1>
        <span>
          Pagina no encontrada
        </span>
      </div>
    )} />
    </Switch>
  </Router>


{/* <Formulario /> */}





{/*     <Topbar />
    <Header /> */}
    
    {/* <Grid /> */}

   {/*  <Card 
    title="React Desde cero"
    image="https://p1.pxfuel.com/preview/818/647/741/dog-nature-animal-doggy.jpg"
    price= "20USD"
    profesor= "Beto Quiroga"
    />

    <Card 
    title="CSS Desde cero"
    image="https://p1.pxfuel.com/preview/729/117/92/dogs-canines-fighting-playful.jpg"
    price= "50USD"
    profesor= "Alvaro Felipe"
    />
  */}
  

{/* Card de Cursos o productos */}

{/*    <div className="ed-grid m-grid-2">
{
  cursos.map( c => <Card title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
}

  </div> */}


  </>

)
 

export default App;
