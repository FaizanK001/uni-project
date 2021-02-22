<template>
    <div class="w-100">
        <div class="field card" background="bg-secondary">
            <p>First Name: {{ user.firstName }}</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Last Name: {{ user.lastName }}</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Email: {{ user.email }}</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Institution: {{ user.institution }}</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Telephone: {{ user.telephone }}</p>
        </div>

        <div class="field card" background="bg-secondary">
            <p>Address: {{ user.address }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "AccountDetails",

    props: [
        "user"
    ],

    setup () {
        return {}
    }
}
</script>

<style>

.field {
    padding: 10px;
    margin-bottom: 15px;
    text-align: left;
}

</style>