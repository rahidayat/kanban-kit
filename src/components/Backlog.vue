<template lang="html">
  <div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">Back-log</h3>
  </div>
  <div class="panel-body">
    <TaskList :tasks="backlog" :status="status"/>
  </div>
</div>
</template>

<script>
import TaskList from '@/components/TaskList'
export default {
  components: {
    TaskList
  },
  data () {
    return {
      status: 'backlog'
    }
  },
  firebase () {
    return {
      backlog: this.$fbase.ref('task/backlog/')
    }
  }
}
</script>

<style lang="css">
</style>
