<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Creque Groups <button class="btn btn-success">Join new Group</button></div>

                    <div class="card-body">

                    <router-link class="nav-link" to="/chat">
                        <div class="alert alert-success" role="alert">
                            My class <i class="fas fa-circle text-success"></i>
                        </div>
                    </router-link>

                        <hr />

                        <div class="alert alert-primary" role="alert">
                            Eucossa
                            <button class="btn btn-danger float-right btn-sm">exit</button>
                        </div>

                        <div class="alert alert-warning" role="alert">
                            Egerton VolleyBall
                            <button class="btn btn-danger float-right btn-sm">exit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
