<template>
    <div id="showGraph">
        <div v-if="systemError !== ''" class="alert alert-danger" role="alert">
            <strong>Warning!</strong> {{ systemError }}
        </div>

        <form>
            <div class="form-group">
                <label for="id">Enter the ID of the graph to display it:</label>
                <input type="text" class="form-control" v-model="id" id="id" placeholder="Document ID">
            </div>
            <button id="delete-btn" type="button" class="data-button btn btn-primary" @click="showGraph()">Show graph</button>
        </form>

        <div>
            <p>your graph</p>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "ShowGraph",

    setup() {
        const flag = ref(0);
        const id = ref("");
        const systemError = ref("");

        function showGraph() {
            flag.value = 1;
        }

        return { showGraph, id, flag, systemError }
    }
}
</script>

<style>

</style>