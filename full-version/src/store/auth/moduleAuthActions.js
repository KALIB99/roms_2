

import jwt from '../../http/requests/auth/jwt/index.js'


// import firebase from 'firebase/app'
// import 'firebase/auth'
import router from '@/router'

export default {

  // JWT
  loginJWT ({ commit }, payload) {

    return new Promise((resolve, reject) => {
      jwt.login(payload.userDetails.email, payload.userDetails.password)
        .then(response => {

          // If there's user data in response
          if (response.data.user) {
            
            // Navigate User to homepage
            if (response.data.user.role === 'user') {
              router.push(router.currentRoute.query.to || '/dashboard/user')
           
            } else if (response.data.user.role === 'editor') {
              router.push(router.currentRoute.query.to || '/dashboard/manager')
             
            } else {
              router.push(router.currentRoute.query.to || '/dashboard/admin')
             
            }
            // Set accessToken
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('userCount', response.data.userCount)
            localStorage.setItem('researchCount', response.data.researchCount)


            // Update user details
           
            commit('UPDATE_USER_INFO', response.data.user, {root: true})

            // Set bearer token in axios
            commit('SET_BEARER', response.data.accessToken)

            resolve(response)
          } else {
            reject({message: 'Wrong Email or Password'})
          }

        })
        .catch(error => { reject(error) })
    })
  },
  registerUserJWT ({ commit }, payload) {

    const { displayName, email, password, confirmPassword } = payload.userDetails

    return new Promise((resolve, reject) => {

      // Check confirm password
      if (password !== confirmPassword) {
        reject({message: 'Password doesn\'t match. Please try again.'})
      }

      jwt.registerUser(displayName, email, password)
        .then(response => {
          // Redirect User
          router.push(router.currentRoute.query.to || '/')

          // Update data in localStorage
          localStorage.setItem('accessToken', response.data.accessToken)
          commit('UPDATE_USER_INFO', response.data.user, {root: true})

          resolve(response)
        })
        .catch(error => { reject(error) })
    })
  },
  fetchAccessToken () {
    return new Promise((resolve) => {
      jwt.refreshToken().then(response => { resolve(response) })
    })
  }
}
