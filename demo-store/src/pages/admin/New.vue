<template>
    <form @submit.prevent="saveProduct">
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" placeholder="Name" v-model="model.name" v-validate="'required'" name="name" :class="{'form-control': true, 'error' : errors.has('name')}">
                <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
            </div>
        </div>
    </form>

    
</template>

<script>
    export default {
        data() {
            return {
                model : {
                    name: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>