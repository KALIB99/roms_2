<template>
  <div class="vx-row">
    <!-- VERTICAL LAYOUT WITH ICON-->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card title="Create User" code-toggler>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label="First Name" v-model="firstname" />
          </div>
        </div>
         <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label="Last Name" v-model="lastname" />
          </div>
        </div>
         <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label="User Name" v-model="username" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label="Password" v-model="password" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label="Confirm Password" v-model="confirmPassword" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
               <vs-select v-model="role" class="w-full select-large" label="User Roles">
                      <vs-select-item :key="index" :value="item.value"    v-for="(item,index) in role" class="w-full" />
                </vs-select>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input type="date" class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label="DOB" v-model="dob" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label="Department" v-model="department" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label="Faculty" v-model="faculty" />
          </div>
        </div>
     
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click="formSubmitted">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="first_name = last_name = user_name = password = email = dob =department = faculty= ''; check4 = false;">Cancel</vs-button>
          </div>
        </div>

        <!-- CODE -->
       
      </vx-card>
    </div>

  
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data () {
    return {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmPassword:'',
      role: [
        {text: 'User', value:'user'},
        {text: 'Manager', value:'editor'},
        {text: 'System Administrator', value:'admin'}
      ],
      dob: '',
      department: '',
      faculty: ''
     
    }
  },
  methods: {
    formSubmitted () {
      this.$vs.loading()
      const params = new URLSearchParams()
      params.append('firstname', this.firstname)
      params.append('lastname', this.lastname)
      params.append('username', this.username)
      params.append('password', this.password)
      params.append('role', this.role)
      params.append('dob', this.dob)
      params.append('confirmPassword', this.confirmPassword)


      const accessToken = localStorage.getItem('accessToken')
     
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    
      axios.post(`http://${window.location.host}/api/users/createUser`, params, config)
        .then(() => { 
          this.$vs.loading.close() 
          this.$vs.notify({
            title: 'Success',
            text: 'User Created Succesfully',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'success',
            position:'top-right'
          })
        })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger',
            position:'top-right'
          })
        })
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    }
  }
  
}
</script>
