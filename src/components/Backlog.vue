<template lang="html">
  <div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Back-log</h3>
  </div>
  <div class="panel-body">
    <TaskList :tasks1="backlog" :status1="status" :modalId1="modalId"/>
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
      status: 'backlog',
      modalId: '#backlog'
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
