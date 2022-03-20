import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'

Vue.use(AclInstaller)

const userInfo = JSON.parse(localStorage.getItem('userInfo'))
let initialRole = 'admin'


if (userInfo && userInfo.role) initialRole = userInfo.role


export default new AclCreate({
  initial  : initialRole,
  notfound : '/pages/login',
  router,
  acceptLocalRules : true,
  globalRules: {
    admin  : new AclRule('admin').generate(),
    editor : new AclRule('editor').generate(),
    user : new AclRule('user').or('editor').or('admin').generate()
  }
})