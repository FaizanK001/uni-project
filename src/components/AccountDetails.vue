<template>
    <div class="w-100">
        <div class="d-flex w-50" background="bg-secondary">
            <p>First Name</p>
        </div>

        <div class="d-flex w-50" background="bg-secondary">
            <p>Last Name</p>
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

</style>