<template lang="html">
  <div class="panel panel-warning">
  <div class="panel-heading">
    <h3 class="panel-title">To do</h3>
  </div>
  <div class="panel-body">
    <TaskList :tasks1="todo" :status1="status" :modalId1="modalId"/>
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
      status: 'todo',
      modalId: '#todo'
    }
  },
  firebase () {
    return {
      todo: this.$fbase.ref('task/todo/')
    }
  }
}
</script>

<style lang="css">
</style>
