<template>
  <div align="center">
    <h2>(Old)Vuetify Board List</h2>
    <vuetify-board-list-form :list-array="pageArray"/>
  </div>
</template>

<script>
import axios from 'axios'
import VuetifyBoardListForm from '@/components/s5_pagination_comp/VuetifyBoardListForm.vue'

export default {
  name: 'VuetifyBoard',
  components: {
    VuetifyBoardListForm
  },
  data () {
    return {
      pageArray: []
    }
  },
  created () {
    axios.get('http://sample.bmaster.kro.kr/contacts')
      .then(res => {
        console.log(res)
        this.pageArray = res.data.contacts
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
