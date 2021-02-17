<template>
    <div class="w-100">
        <div class="field card" background="bg-secondary">
            <p>First Name</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Last Name</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Email</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Institution</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Telephone</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Address</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserDetails",

    props: [
        "firstname",
        "lastname",
        "email"
    ],

    setup () {
        return {};
    }
}
</script>

<style>

.field{
    padding: 10px;
    margin-bottom: 15px;
    text-align: left;
}

</style>