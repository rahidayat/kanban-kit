<template lang="html">
  <div class="">
    <div class="col-sm-4 col-md-4">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    </div>
    <div class="col-sm-4 col-md-4">
      <button
        class="btn btn-primary"
        data-dismiss="modal"
        @click="deleteTask(detail2['.key'])">Delete
      </button>
    </div>
    <div class="col-sm-4 col-md-4">
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detail2', 'status3'],
  data () {
    return {
      prevStatus: '',
      nextStatus: '',
      buttonClassPrev: '',
      buttonClassNext: ''
    }
  },
  methods: {
    deleteTask (id) {
      console.log('ini status dari detail task yg didelete: ', this.status3)
      this.$fbase.ref(`task/${this.status3}/` + id).remove()
    }
  }
}
</script>

<style lang="css">
</style>
