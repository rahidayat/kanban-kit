<template lang="html">
  <div class="">
    <a href="#" class="btn btn-default" data-toggle="modal" data-target="#taskModal">Create Task</a>
    <!-- MODAL -->
    <div id="taskModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">New Task</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="control-label" for="inputDefault">Title</label>
              <input class="form-control" id="inputDefault" type="text" v-model="title">
            </div>
            <div class="form-group">
              <label class="control-label" for="inputLarge">Description</label>
              <textarea class="form-control" rows="3" id="textArea" v-model="desc"></textarea>
            </div>
            <div class="form-group">
              <label class="control-label" for="inputDefault">Point</label>
              <input class="form-control" id="inputDefault" type="text" v-model="point">
            </div>
            <div class="form-group">
              <label class="control-label" for="inputDefault">Assigned to</label>
              <input class="form-control" id="inputDefault" type="text" v-model="assignedTo">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      desc: '',
      point: 0,
      assignedTo: ''
    }
  },
  methods: {
    addTask () {
      this.$fbase.ref('task/backlog').push({
        title: this.title,
        desc: this.desc,
        point: this.point,
        assignedTo: this.assignedTo,
        status: 'backlog'
      })
      this.title = ''
      this.desc = ''
      this.point = 0
      this.assignedTo = ''
    }
  }
}
</script>

<style lang="css">
</style>
