<template>
  <div id="help">
    <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">How to use our website</h1>
   </div>

    <h2>1.What personally identifiable information is collected from the user?</h2>
    <p>Cardiomyopathies will only collect personally identifiable information such as gender, email, names and web browser cookies. All of the data that been collected will be safe and We will not sell, share, or rent this information to third parties.</p>
    
    <h2>2. How is my information used?</h2>
    <p>Cardiomyopathies uses the information we collect about you to help us understand more about how our site is used and to be able to send you communications and the latest update about our services that may be interest to you and we only will use the email to contact you. </p>

    <h2>3. The Cardiomyopathies website policy about update or delete 
        user personally information?</h2>
    <p>The accuracy of your information is important to Cardiomyopathies website. If you can change password, update or delete data or any of the other information you want and it will be delete it or change from our website at the same time you do that. </p>

    <h2>4. Does Cardiomyopathies website use cookies ?</h2>
    <p>Yes. Cookies are pieces of information that are sent to your computer by Cardiomyopathies website when you log on to our website. They are stored on your computer's hard drive, allowing us to recognise you as a user when you next visit. If you do not want cookies to be stored on your computer, it is possible for you to disable this function.</p>

    <h2>5. What is the Cardiomyopathies website?</h2>
    <p>The aim is disease prevention and the development of therapeutic interventions but the data from these experiments are scattered in published papers in different journals and sitting on the hard drives of disparate and disconnected research groups and medical centres. In order to foster better collaboration and facilitate cardiovascular research, it would be beneficial to have a central repository for the data that can be queried by interested parties anywhere in the world. This is the main reason why Cardiomyopathies website was made.</p>

    <h2>6. How do I use Cardiomyopathies website ?</h2>
    <ul> 
    <li>First you will need to create an account if you have one please sign-in, if you are new user then you can sign-up for free. </li>
    <li>Second, once you are log-in you can start uploading, viewing, deleting data</li>
    </ul>

    <h2>7. How do I use the Graphic on the Cardiomyopathies website ?</h2>
    <p>You can use the graphic once you upload your data from the Account Page. In the Graph Page there were 4 Button such:</p>
    <ul> 
    <li>1.Show All Data Button, this will allow the user to see the data</li>
    <li>2.Search Mutation Button, this will allow the user to chose which data they want to see between MYH7 and TNNT2.</li>
    <li>3.Compare Data Button, it will compare the data that stored into the database and then display it as Graph</li>
    </ul>

    <h2>8. How do I use Account Page ?</h2>
    <p>You will be able to see the Account Page once you have sign in, then you will have 5 Buttons such as:</p>
    <ul> 
    <li>1.Update Button allow the user to update your details. </li>
    <li>2.Insert Data Button, which is allow the user to insert data and stored into the database such as data name, mutation, description and graph.</li>
    <li>3.Show My Data Button, this will allow the user to see your existing data if you have one stored </li>
    <li>4.Update Data Button, this will allow the user to update your old data.</li>
    <li>5.Delect Data Button, allow the user to delect their data from the database</li>
    </ul>
  
  </div>
  <br>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Help',
  components: {
  
  }
}
</script>

<style scoped>

#help {
  min-height: 100vh;
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

