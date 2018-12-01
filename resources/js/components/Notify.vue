<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Creque Notifications</div>

                    <div class="card-body">

                        <div class="alert alert-primary" role="alert">
                            #general
                        </div>
                        <div class="alert alert-info" role="alert">
                            #deen
                        </div>

                        <router-link class="nav-link" to="/wall">
                            <div class="alert alert-warning" role="alert">
                                #vice chancellor <i class="fas fa-circle text-success"></i>
                            </div>
                        </router-link>

                        <div class="alert alert-success" role="alert">
                            #other departments
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
