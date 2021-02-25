<template>
  <div class="d-flex flex-wrap home">
    
    <div class="w-100">
    <!-- Carousel banner for homepage -->
    <Carousel/>
    </div>

    <div id="left-column">
      
        <div class="card">
          <div class ="heading">
            <p>What is Cardiomyopathy?</p>

            <div id="heart-disease-map">
              <img src='../assets/heart-health-banner.jpg'>
            </div>

            <div class="description card">
              <h3>Cardiomyopathy refers to diseases of the heart muscle.
                These diseases have many causes, signs and symptoms as well as treatments. 
                In most cases, cardiomyopathy causes the heart muscle to become enlarged, thick or rigid. 
                In rare instances, diseased heart muscle tissue is replaced with scar tissue.</h3>
        
              <h3> As cardiomyopathy worsens, the heart becomes weaker.
                The heart becomes less able to pump blood throughout the body and incapable of maintaining a normal electrical rhythm.
                The result can be heart failure or irregular heartbeats called arrhythmias.
                A weakened heart also can cause other complications, such as heart valve problems.
              </h3>
            </div>
          </div>  
        </div>
      
    </div>
      <div id="right-column">
        <div class="card">
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table class="table">
      <thead class="thead-dark">
        <tr>
          
          <th scope="col" >Recently Added Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Data 1</th>
          
        </tr>
        <tr>
          <th scope="row">Data 2</th>
          </tr>
        <tr>
          <th scope="row">Data 3</th>
        </tr>
        <tr>
          <th scope="row">Data 3</th>
        </tr>
        <tr>
          <th scope="row">Data 3</th>
        </tr>
        <tr>
          <th scope="row">Data 3</th>
        </tr>
        <tr>
          <th scope="row">Data 3</th>
        </tr>
      </tbody>
    </table>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue';

export default {
  name: 'Home',
  components: {
  Carousel
  }
  
    
}
</script>

<style>

#heart-disease-map {
  width: 100%;
  height: 300px;
}

.my-custom-scrollbar {
position: relative;
height: 200px;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
#left-column {
  width: 69%;
  margin: 0.5%;
}

/* Right column */
#right-column {
  width: 29%;
  margin: 0.5%;
  padding-left: 10px;
  height: 400px;
}


/* Add a card effect for articles */
.card {
   background-color: #ffffff;
   padding: 20px;
   margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
hr.new5 {
  border: 10px solid rgb(10, 10, 10);
  border-radius: 5px;
}

.heading{
  font-size: xx-large ;
}

.description{
  font-size: x-large;
}
</style>