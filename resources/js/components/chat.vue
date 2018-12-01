<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Creque Group</div>

                    <div class="card-body">
                       
                        <div class="alert alert-primary" role="alert">
                            <strong>Narina</strong>: is there a class on monday? <button class="btn btn-sm btn-warning float-right">down vote</button>
                        </div>

                        <div class="alert alert-primary" role="alert">
                            <strong>Brayan</strong>: Who has the comp notes?<button class="btn btn-sm btn-warning float-right">down vote</button>
                        </div>

                        <div class="alert alert-danger" role="alert">
                            <strong>Class rep</strong>: we have no class today.
                        </div>
                        <div class="alert alert-primary" role="alert">
                            <strong>Brayan</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat unde eaque,
                             temporibus debitis sint modi blanditiis animi obcaecati soluta veritatis, 
                            doloremque, facere consequatur itaque impedit! Illo adipisci commodi qui?<button class="btn btn-sm btn-warning float-right">down vote</button>
                        </div>

                        <hr>

                        <textarea rows="2" class="form-control" placeholder="text to group"></textarea>
                        <hr>
                        <button class="btn btn-sm btn-success"> send </button>
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
