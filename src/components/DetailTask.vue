<template lang="html">
  <div class="modal" v-bind:id="modalId2.substring(1)" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">{{detail1.title}} </h4>
        </div>
        <div class="modal-body">
          <p>
            <b>Ditugaskan kepada:</b> {{detail1.assignedTo}}
          </p>
          <p>
            <b>Deskripsi tugas:</b> {{detail1.desc}}
          </p>
          <p>
            <b>Point:</b> {{detail1.point}}
          </p>
          <p>
            <b>Status:</b> {{detail1.status}}
          </p>
        </div>
        <div class="modal-footer">
          <ModalFooter :detail2="detail1" :status3="status2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalFooter from '@/components/ModalFooter'
export default {
  props: ['detail1', 'modalId2', 'status2'],
  components: {
    ModalFooter
  }
}
</script>

<style lang="css">
</style>
