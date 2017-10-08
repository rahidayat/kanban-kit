<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h2>Kanban-Kit</h2>
      </div>
      <div class="col-md-7">
      </div>
      <div class="col-md-2">
        <ButtonCreate/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCreate from '@/components/ButtonCreate'
export default {
  components: {
    ButtonCreate
  }
}
</script>

<style lang="css">
</style>
