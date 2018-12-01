<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="">
                <div class="card card-default">
                    <div class="card-header">
                        <p>
                            <span class="text-left">Creque timetable</span>
                            <span class="text-right text-success"> :: Tuesday</span>
                        </p>
                    </div>
                    <div class="card-body">
                        <!--Table-->
                        <table class="table table-sm table-bordered table-responsive">
                            <!--Table head-->
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>7-8</th>
                                    <th>8-9</th>
                                    <th>9-10</th>
                                    <th>10-11</th>
                                    <th>11-12</th>
                                    <th>12-13</th>
                                    <th>13-14</th>
                                    <th>14-15</th>
                                    <th>15-16</th>
                                    <th>16-17</th>
                                    <th>17-18</th>
                                    <th>18-19</th>
                                </tr>
                            </thead>
                            <!--Table head-->
                            <!--Table body-->
                            <tbody>
                                <tr>
                                    <th scope="row">Monday</th>
                                    <td></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td>comp112</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Tuesday</th>
                                    <td></td>
                                    <td>comp102
                                        <br>npl1
                                        <i class="fas fa-circle text-success"></i></td>
                                    <td>comp121
                                        <br>npl1
                                        <i class="fas fa-circle text-success"></i> </td>
                                    <td></td>
                                    <td>comp112
                                        <br>npl1
                                        <i class="fas fa-circle text-success"></i>
                                    </td>
                                    <td>comp112
                                        <br>npl1 <i class="fas fa-circle text-danger"></i>
                                    </td>
                                    <td></td>
                                    <td>comp 100
                                        <br>npl1 <i class="fas fa-circle text-danger"></i>
                                    </td>
                                    <td></td>
                                    
                                    <td>comp 134
                                        <br>npl1 <i class="fas fa-circle text-danger"></i> </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Wednesday</th>
                                    <td>comp 110</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td>comp112</td>
                                    <td></td>
                                    <td></td>
                                    <td>comp 100</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Thursday</th>
                                    <td></td>
                                    <td></td>
                                    <td> zool 143</td>
                                    <td></td>
                                    <td>comp112</td>
                                    <td></td>
                                    <td></td>
                                    <td>comp 100</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Friday</th>
                                    <td></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td>comp112</td>
                                    <td></td>
                                    <td></td>
                                    <td>comp 100</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                            </tbody>
                            <!--Table body-->
                        </table>
                        <!--Table-->
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
