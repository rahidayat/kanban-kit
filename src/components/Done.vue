<template lang="html">
  <div class="panel panel-success">
  <div class="panel-heading">
    <h3 class="panel-title">Done</h3>
  </div>
  <div class="panel-body">
    <TaskList :tasks1="done" :status1="status" :modalId1="modalId"/>
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
      status: 'done',
      modalId: '#done'
    }
  },
  firebase () {
    return {
      done: this.$fbase.ref('task/done/')
    }
  }
}
</script>

<style lang="css">
</style>
