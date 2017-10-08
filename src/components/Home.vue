<template lang="html">
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-md-3"> <Backlog/> </div>
        <div class="col-md-3"> <ToDo/> </div>
        <div class="col-md-3"> <Doing/> </div>
        <div class="col-md-3"> <Done/> </div>
      </div>
    </div>
  </div>
</template>

<script>
import Backlog from '@/components/Backlog'
import ToDo from '@/components/ToDo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
export default {
  components: {
    Backlog,
    ToDo,
    Doing,
    Done
  }
}
</script>

<style lang="css">
</style>
