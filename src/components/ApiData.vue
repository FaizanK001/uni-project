<template>
    <div id="externalData">
        <h1>External Data</h1>
       
       <div v-for="item in disease.catTermsMap" :key="item.id">
                <div class="d-flex align-content-start flex-wrap card">
                    <div class="d-flex data-card"><b>CatLabel:</b>{{ item.catLabel }}</div>
                   
                    
                   
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ExternalData",

    data(){
        return{
           disease : {},

        }
    },
    mounted(){
        axios.get(`https://hpo.jax.org/api/hpo/disease/OMIM%3A154700`)
        .then((resp)=>{
            this.disease=resp.data;
           console.warn(resp.data)
        })
    }
}
</script>

<style>

</style>