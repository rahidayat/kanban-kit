<template lang="html">
  <div class="">
    <div class="panel panel-default" v-for="task in tasks">
      <div class="panel-heading">{{task.title}}</div>
      <div class="panel-body">
        <p>Point : {{task.point}}</p>
        <p>Assigned to : {{task.assignedTo}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tasks', 'status'],
  components: {
    //
  },
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    getDetail (id) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (id === this.tasks[i]['.key']) {
          this.detail = this.tasks[i]
        }
      }
    }
  }
  // created () {
  //   this.getDetail()
  // }
}
</script>

<style lang="css">
</style>
