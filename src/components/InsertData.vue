<template>
    <div>
        <form>
            <div class="form-group">
                <label for="name">Data set name</label>
                <input type="text" class="form-control" id="name" placeholder="Name">
            </div>

            <div class="form-group">
                <label for="mutation">Mutation name</label>
                <input type="text" class="form-control" id="mutation" placeholder="Mutation">
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" placeholder="Description">
            </div>

            <div class="form-group">
                <label for="mutations">Mutation:</label>
                <select class="form-control" name="mutations" id="cars">
                    <option value="myh7">MYH7</option>
                    <option value="tnnt7">TNNT7</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="formGroupExampleInput2">Data set file</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "InsertData",

    setup () {
        return {};
    }
}
</script>

<style>

</style>