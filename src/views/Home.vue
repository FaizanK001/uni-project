<template>

 
  <div class="home">
    <br>
    <Carousel/>
  </div>
  <br><br>
  <hr class="new5">
  <search-bar/>
  <hr class="new5">
  <br>
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>What is Cardiomyopathy?</h2>
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
  <div class="rightcolumn">
    <div class="card">
      <h4 font-weight= "bold">The main types of cardiomyopathy</h4>
          <h4>Dilated cardiomyopathy.<br>
        Hypertrophic cardiomyopathy.<br>
        Restrictive cardiomyopathy.<br>
        Arrhythmogenic right ventricular dysplasia.<br>
        Transthyretin amyloid cardiomyopathy (ATTR-CM)
        </h4>
    </div>


    <div class="card" >
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
    <div class="card">
      <h3>How to use our website</h3>
      <p> **Link to about page**</p>
    </div>
<<<<<<< Updated upstream
  </div>
=======
  
>>>>>>> Stashed changes
</div>
  
</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* Add a gray background color with some padding */
body {
  font-family: Arial;
  background: white;
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
.leftcolumn {   
  float: center;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 10px;
  max-height: 50px;
  
}


/* Add a card effect for articles */
.card {
   background-color: #ffffff;
   padding: 20px;
   border-block-color: black;
   border-block-start-width: 10px;
   border-block-end-width: 10px;
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

h4{
  text-align: left;
}
</style>

<script>
// @ is an alias to /src

import Carousel from '../components/Carousel.vue'
import SearchBar from '../components/Searchbar.vue'

export default {
  name: 'Home',
  components: {
  Carousel,
  SearchBar
  }
  
    
}
</script>
<<<<<<< Updated upstream
=======





>>>>>>> Stashed changes
