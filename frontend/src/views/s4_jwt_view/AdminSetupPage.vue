<template>
  <div align="center">
    <h2>Register First Administrator</h2>
    <admin-setup-form @submit="onSubmit"/>
  </div>
</template>

<script>
import axios from 'axios'
import AdminSetupForm from '@/components/s4_jwt_comp/AdminSetupForm.vue'

export default {
  name: 'AdminSetupPage',
  components: {
    AdminSetupForm
  },
  methods: {
    onSubmit (payload) {
      // jpa에서 만들어 준 데이터
      console.log('payload: ' + payload.userId +
                  ', ' + payload.userName +
                  ', ' + payload.userPw)
      const { userId, userName, userPw } = payload
      axios.post('http://localhost:7777/users/setup',
        { userId, userName, userPw })
        .then(res => {
          alert('Register Success')
          this.$router.push({
            name: 'Home'
          })
        })
        .catch(err => {
          alert(err.response.data)
        })
    }
  }
}
</script>
