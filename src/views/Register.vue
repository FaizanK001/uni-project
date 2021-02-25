<template>
<div id="register">
    <div class="container">
        <div class="row py-5 mt-4 align-items-center">
            <!-- For Demo Purpose -->
            <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" class="img-fluid mb-3 d-none d-md-block">
                <h1>New User Registration</h1>
                <p class="font-italic text-muted mb-0">Register an account to access additional features on our website!</p>
                <p class="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" class="text-muted">
                    <u>Bootstrapious</u></a>
                </p>
            </div>

            <!-- Registeration Form -->
            <div class="col-md-7 col-lg-6 ml-auto">
                
                <div v-if="errorRegistration !== null" class="alert alert-danger" role="alert">
                    <strong>Warning!</strong> {{ errorRegistration }}
                </div>

                <form @submit.prevent>
                    <div class="row">

                        <!-- First Name -->
                        <div class="input-group col-lg-6 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="firstName" type="text" v-model="firstName" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md">
                        </div>

                        <!-- Last Name -->
                        <div class="input-group col-lg-6 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="lastName" type="text" v-model="lastName" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md">
                        </div>

                        <!-- Email Address -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="email" type="email" name="email" v-model="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md">
                        </div>

                        <!-- Password -->
                        <div class="input-group col-lg-6 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password" type="password" v-model="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md">
                        </div>

                        <!-- Password Confirmation -->
                        <div class="input-group col-lg-6 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="passwordConfirmation" type="password" v-model="passwordConfirmation" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md">
                        </div>

                        <!-- Institution Address -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-address-book text-muted"></i>
                                </span>
                            </div>
                            <input id="institution" type="text" name="institution" v-model="institution" placeholder="Institution Name" class="form-control bg-white border-left-0 border-md">
                        </div>

                        <!-- Telephone Number -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-address-book text-muted"></i>
                                </span>
                            </div>
                            <input id="telephone" type="text" name="telephone" v-model="telephone" placeholder="Telephone Number" class="form-control bg-white border-left-0 border-md">
                        </div>

                        <!-- Address -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-address-book text-muted"></i>
                                </span>
                            </div>
                            <input id="address" type="text" name="address" v-model="address" placeholder="Address" class="form-control bg-white border-left-0 border-md">
                        </div>
                        
                        <!-- Submit Button -->
                        <button class="btn btn-primary btn-block py-2" @click="register">Register</button>

                        <!-- Submit Button
                    <div class="form-group col-lg-12 mx-auto mb-0">
                            <a href="#" class="btn btn-primary btn-block py-2">
                                <span class="font-weight-bold">Create your account</span>
                            </a>
                        </div> -->

                        <!-- Divider Text -->
                        <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                            <div class="border-bottom w-100 ml-5"></div>
                            <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                            <div class="border-bottom w-100 mr-5"></div>
                        </div>


                        <!-- Already Registered -->
                        <div class="text-center w-100">
                            <p class="text-muted font-weight-bold">Already Registered? <router-link to="/login" class="text-primary ml-2">Login</router-link></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
import {firebaseAuthentication} from "../firebase/database";
import firebase from 'firebase/app';

export default {
    name: "register",
    emits: ["register-clicked"],

    setup() {
        const firstName = ref("");
        const lastName = ref("");
        const email = ref("");
        const password= ref("");
        const institution = ref("");
        const telephone = ref("");
        const address = ref("")
        const passwordConfirmation = ref("");
        const errorRegistration = ref(null);
        const router = useRouter();
        var db = firebase.firestore();

        //check whether the password confirmation input matches the password input
        watch(passwordConfirmation, ()=>{
            if(password.value !== "" && passwordConfirmation.value!== "" && password.value !== passwordConfirmation.value){
                errorRegistration.value ="Passwords do not match!";
        }else {
            errorRegistration.value=null;
        }
        });

        //register a new user into the database
        function register(){
            const info = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                password: password.value,
                institution: institution.value,
                telephone: telephone.value,
                address: address.value,
            };

            //if relevant details have been inserted, create a user Authorisation profile together with new user document
            if (!errorRegistration.value && info.email !== "") {
                firebaseAuthentication.createUserWithEmailAndPassword(info.email,info.password)
                .then(()=>{
                    router.replace("/");
                },
                (error) => {
                    errorRegistration.value = error.message;
                },

                db.collection("users").doc(info.email).set({
                    first: info.firstName,
                    last: info.lastName,
                    institution: info.institution,
                    telephone: info.telephone,
                    address: info.address,
                })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                })
            )} else {
                errorRegistration.value = "Enter an email address!"
            }
        }
        
        return{
            firstName,
            lastName,
            email,
            institution,
            telephone,
            address,
            password,
            passwordConfirmation,
            errorRegistration,
            register
        };
    },
};
</script>

<style>

#register {
    min-height: 100vh;
}

 .border-md {
    border-width: 2px;
}

</style>