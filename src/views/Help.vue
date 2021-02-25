<template>
  <div id="help">
    <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">How to use our website</h1>
    </div>

    <div class="help-card">
   <h2> <span id="heading">{{heading}}</span></h2>
   <p> <span id="text">{{text}}</span></p>

    </div>

    <div class="help-card">
      <h2>What personally identifiable information is collected from the user?</h2>
      <p>If you decide to create an account, Cardiomyopathies will only ask for required information such as email, name, institution and web browser cookies. 
        All of the data that has been collected will be safe and we will not sell, share, or rent this information to any third party.</p>
    </div>

    <div class="help-card">
    <h2>What can I do with my account?</h2>
    <p><b>You will be able to see the Account Page once you sign in, then you will have 5 options such as:</b></p>
    <ul> 
      <li>1. Update Button allows you to update your details. </li>
      <li>2. Insert Data Button which will allow you to insert data such as name, mutation, description & graph type and store it in the database.</li>
      <li>3. Show My Data Button will allow you to see your existing data if you have submitted any previously.</li>
      <li>4. Update Data Button will allow you to update your existing data.</li>
      <li>5. Delete Data Button allows you to delete your experimental data from the database.</li>
    </ul>
    </div>

    <div class="help-card">
    <h2>How can I use the graphs page?</h2>
    <p><b>You can use the graphs page without the need of having an account, there are 5 options to use on that page:</b></p>
    <ul> 
      <li>1. Show All Data will show you all currently existing experimental data records. </li>
      <li>2. Search Mutation will prompt you to choose a mutation which you want to search for in the database.</li>
      <li>3. Compare Data will show you our information about few different mutations in more depth than usual graph display.</li>
      <li>4. Get External Data will get data from <a href="https://hpo.jax.org">HPO</a> API and display it on the page for you to see.</li>
      <li>5. Show Graph option will allow you to search for the ID of the data document which you want to generate a graph for.</li>
    </ul>
    <p><b>A lot of our options about the graph rely on using right ID of the document, you can see it when you view or filter data on the Graphs Page,
       its on the top of an experimental data record.
    </b></p>
    </div>

    <div class="help-card">
    <h2>Authors and developers:</h2>
    <p><b>This website was developed by:</b></p>
    <ul>
      <li>Faizan Khalil</li>
      <li>Hubert Antczak</li>
      <li>Akram Mohamed</li>
      <li>& Mahomed Ebrahim</li>
    </ul>
    </div>

  </div>
  <br>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Help',
  components: {
  
  },

  data() {
      return {
        heading: 'What is this Cardiomyopathy website about?',
        text: 'The website is meant to act as a database for different experimental data centered around cardiomyopathic mutations such as MYH7, which we focus on, TNNT2, which is our secondary focus, and also any other mutation that is suitable to be stored in the system. We aim to let researchers connect, store, and view the data that they require, as well as continue developing more features to help facilitate this research.'
      }
    }
}
</script>

<style scoped>

#help {
  min-height: 100vh;
}

.help-card {
  padding: 10px;
   width: 99%;
   margin: 0.5%;
   border: 1px solid rgba(0,0,0,.125);
   border-radius: .25rem;
}

h3 {
    padding-top: 30px;
    font-size: 33px;
    padding-bottom: 25px;
    Color:Black;
    font-weight: bold;
}

h2 {
    text-align:left;
    margin-left: 230px;
    font-size: 27px;
    color:red;
    padding-bottom: 10px;
    padding-top: 20px;
}

p {
    text-align:left;
    margin-left: 270px;
    font-size: 17px;
    padding-right:270px;
}

ul{
    text-align:left;
    margin-left: 280px;
    font-size: 17px;
}

</style>

