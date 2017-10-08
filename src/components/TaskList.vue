<template lang="html">
  <div class="">
    <div class="panel panel-default" v-for="task in tasks1">
      <div class="panel-heading">{{task.title}}</div>
      <div class="panel-body">
        <p>Point : {{task.point}}</p>
        <p>Assigned to : {{task.assignedTo}}</p>
        <button class="btn btn-default" data-toggle="modal" v-bind:data-target="modalId1" @click="getDetail(task['.key'])">Detail</button>
      </div>
      <DetailTask :detail1="detail" :modalId2="modalId1" :status2="status1"/>
    </div>
  </div>
</template>

<script>
import DetailTask from '@/components/DetailTask'
export default {
  props: ['tasks1', 'status1', 'modalId1'],
  components: {
    DetailTask
  },
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    getDetail (id) {
      for (let i = 0; i < this.tasks1.length; i++) {
        if (id === this.tasks1[i]['.key']) {
          this.detail = this.tasks1[i]
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
