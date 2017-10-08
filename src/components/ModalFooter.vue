<template lang="html">
  <div class="">
    <div class="col-sm-4 col-md-4" v-if="prevStatus != ''">
      <button
        :class="btnPrev"
        data-dismiss="modal"
        @click="shiftTo(
          detail2['.key'],
          detail2.title,
          detail2.desc,
          detail2.point,
          detail2.assignedTo,
          prevStatus)">
        {{prevStatus}}
      </button>
    </div>
    <div class="col-sm-4 col-md-4">
      <button
        class="btn btn-primary"
        data-dismiss="modal"
        @click="deleteTask(detail2['.key'])">
        Delete
      </button>
    </div>
    <div class="col-sm-4 col-md-4" v-if="nextStatus != ''">
      <button
        :class="btnNext"
        data-dismiss="modal"
        @click="shiftTo(
          detail2['.key'],
          detail2.title,
          detail2.desc,
          detail2.point,
          detail2.assignedTo,
          nextStatus)">
        {{nextStatus}}
      </button>
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
      btnPrev: '',
      btnNext: ''
    }
  },
  methods: {
    deleteTask (id) {
      console.log('ini status dari detail task yg didelete: ', this.status3)
      this.$fbase.ref(`task/${this.status3}/` + id).remove()
    },
    shiftTo (id, title, desc, point, assignedTo, status) {
      this.$fbase.ref(`task/${status}`).push({
        title: title,
        desc: desc,
        point: point,
        assignedTo: assignedTo,
        status: status
      })
      console.log('ini status pindah ke:', status)
      this.deleteTask(id)
    },
    next () {
      console.log('masuk ke next')
      if (this.status3 === 'backlog') {
        this.nextStatus = 'todo'
        this.btnNext = 'btn btn-warning'
      } else if (this.status3 === 'todo') {
        this.nextStatus = 'doing'
        this.btnNext = 'btn btn-danger'
        this.prevStatus = 'backlog'
        this.btnPrev = 'btn btn-info'
      } else if (this.status3 === 'doing') {
        this.nextStatus = 'done'
        this.btnNext = 'btn btn-success'
        this.prevStatus = 'todo'
        this.btnPrev = 'btn btn-warning'
      } else {
        this.prevStatus = 'doing'
        this.btnPrev = 'btn btn-danger'
      }
    }
  },
  created () {
    this.next()
  }
}
</script>

<style lang="css">
</style>
