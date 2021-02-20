<template>

<!-- Navigation -->

<form> 
  <input type="text" name="search" placeholder="Search..">
  <button class="searchButton"  type="submit"><i class="fas fa-search"></i></button>
</form>



</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

body{
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  width: 50%;
  height: 100%;
  position: relative;
  text-align: center;
}

.searchTerm {
  width: 100%;
  border: 3px solid #000000!important;
  border-right: none;
  padding: 5px;
  height: 50px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #000000!important;
}

.searchButton {
  width: 40px;
  height: 50px;
  border: 1px solid #343a40!important;
  background: #000000!important;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

input[type=text] {
  width: 30px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
  width: 80%;

}

  

</style>



<script>
export default {
    ame: 'Home',
  components: {
  
  }
}
</script>



