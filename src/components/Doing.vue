<template lang="html">
  <div class="panel panel-danger">
  <div class="panel-heading">
    <h3 class="panel-title">Doing</h3>
  </div>
  <div class="panel-body">
    <TaskList :tasks1="doing" :status1="status" :modalId1="modalId"/>
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
      status: 'doing',
      modalId: '#doing'
    }
  },
  firebase () {
    return {
      doing: this.$fbase.ref('task/doing/')
    }
  }
}
</script>

<style lang="css">
</style>
