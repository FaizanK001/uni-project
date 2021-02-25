<template>
  <div class="d-flex flex-wrap home">
    
    <div class="w-100">
    <!-- Carousel banner for homepage -->
    <Carousel/>
    </div>

    <div id="left-column">
      
      <div class="card">
        <h2 id="homepage-heading">What is Cardiomyopathy?</h2>

        <img id="heart-disease-map" src='../assets/cardiomyopathy-chart.jpg'>

        <div class="description">
          <br><br>
          <p> Cardiomyopathy refers to diseases of the heart muscle.
              These diseases have many causes, signs and symptoms as well as treatments. 
              In most cases, cardiomyopathy causes the heart muscle to become enlarged, thick or rigid. 
              In rare instances, diseased heart muscle tissue is replaced with scar tissue.</p>
          <br><br>
          <p> As cardiomyopathy worsens, the heart becomes weaker.
              The heart becomes less able to pump blood throughout the body and incapable of maintaining a normal electrical rhythm.
              The result can be heart failure or irregular heartbeats called arrhythmias.
              A weakened heart also can cause other complications, such as heart valve problems.
          </p>
        </div> 
      </div>  
    </div>

    <div id="right-column">
      <div id="table-column" class="card">
        <table class="table">
            
          <thead class="thead-black">
            <tr>
              <th scope="col" >Recently Added Data</th>
            </tr>
          </thead>
            
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <tbody>
              <div v-for="item in experimentalData" :key="item.index">
              <tr>
                <th scope="row">{{ item.name }}</th>
              </tr>
              </div>
            </tbody>
          </div>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import { reactive } from 'vue';
import Carousel from '../components/Carousel.vue';
import firebase from 'firebase/app';

export default {
    name: 'Home',

    components: {
    Carousel
    },

    setup() {
      var db = firebase.firestore();
        var experimentalData = reactive ([]);

        db.collection("graphs")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = reactive ({
                    id: doc.id,
                    description: doc.get("description"),
                    mutation: doc.get("mutation"),
                    name: doc.get("name"),
                    email: doc.get("email"),
                })
                experimentalData.push(data);
            });
        })
        .catch((error) => {
             console.log("Error getting documents: ", error);
        });

      return { experimentalData }
    }
}
</script>

<style>

#heart-disease-map {
  width: 100%;
  height: 400px;
}

#table-column {
  height: 98%;
}

.my-custom-scrollbar {
height: 100%;
overflow: auto;
}

p {
  text-align: left;
}

.thead-black {
  background-color: black;
  color: white;
}

.table-wrapper-scroll-y {
display: block;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
#left-column {
  width: 69%;
  margin: 0.5%;
  min-height: 60vh;
}

/* Right column */
#right-column {
  width: 29%;
  margin: 0.5%;
  min-height: 60vh;
}

#homepage-heading {
  margin-bottom: 40px;
  font-size: 40px;
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

.description{
  font-size: x-large;
}
</style>