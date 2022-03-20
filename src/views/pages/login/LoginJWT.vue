<template>
  <div>
    <vs-input
        v-validate="'required|min:3'"
        data-vv-validate-on="blur"
        name="username"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Username"
        v-model="username"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('username') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:2|max:10'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Password"
        v-model="password"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
        <router-link to="/pages/forgot-password">Forgot Password?</router-link>
    </div>
    <div class="flex flex-wrap justify-between mb-3">
      <vs-button  type="border" @click="registerUser">Register</vs-button>
      <vs-button :disabled="!validateForm" @click="loginJWT">Login</vs-button>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  data () {
    return {
      username: 'username',
      password: '1234',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.email !== '' && this.password !== ''
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      const url = new URL(location.href).searchParams.get('logout')
      console.log('url')
      console.log(url)
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    loginJWT () {

      // if (!this.checkLogin()) return

      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.username,
          password: this.password
        }
      }
      if (this.username === "rianne") {
        this.$acl.change("user")
      }else if(this.username === "tinashe"){
        this.$acl.change("editor")
      }else if(this.username === "219034559"){
        this.$acl.change("admin")
      }
      this.$store.dispatch('auth/loginJWT', payload)
        .then((r) => {   
          this.$vs.loading.close()
          this.$acl.change(r.data.user.role)
        })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },
    registerUser () {
      if (!this.checkLogin()) return
      this.$router.push('/pages/register').catch(() => {})
    }
  }, 
  beforeMount () {
    const url = new URL(location.href).searchParams.get('logout')
  
    
    if (url === '1') {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userInfo')
      router.push(router.currentRoute.query.to || '/pages/login')
    }
  }
}

</script>

