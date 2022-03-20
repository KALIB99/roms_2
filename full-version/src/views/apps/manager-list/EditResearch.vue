<!-- =========================================================================================
    File Name: FormWizardIconTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Edit Research" code-toggler>

        <p>Edit Research</p>

        <div class="mt-5">
            <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
                <tab-content title="Full details" class="mb-5" icon="feather icon-home">

                    <!-- tab 1 content -->
                    <div class="vx-row">
                         <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-select v-model="publicationType" class="w-full select-large" label="Type Of Publication">
                                <vs-select-item :key="index" :value="item.value"       :text="item.text" v-for="(item,index) in researchOptions" class="w-full" />
                            </vs-select>
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input label="Publication Title" v-model="title" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input label="APA Style" v-model="apaStyle" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input label="Event Title (if applicable)" v-model="eventName" class="w-full" />
                        </div>
                         <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-textarea v-model="abstract" label="Abstract" height="200px" />
                          </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-select v-model="sdgOption" class="w-full select-large" label="SDG Goal">
                                <vs-select-item :key="index" :value="item.value"       :text="item.text" v-for="(item,index) in sdgOptions" class="w-full" />
                            </vs-select>
                        </div>
                    </div>
                </tab-content>

                <!-- tab 2 content -->
                <tab-content title="Co-authorship" class="mb-5" icon="feather icon-briefcase">
                    <div class="vx-row">
                          <div  class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input  label="Co-Authors" v-model="mainSupervisor" class="w-full" />
                        </div>
                        <div  class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input  label="Main Supervisor (if applicable)" v-model="mainSupervisor" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input label="Co-Supervisor (if applicable)"  v-model="coSupervisor" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                          <vs-select v-model="level" class="w-full select-large" label="Level">
                                <vs-select-item :key="index" :value="item.value"    :text="item.text" v-for="(item,index) in levelOptions" class="w-full" />
                          </vs-select>
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input label="International Patners (if applicable)"  v-model="internationalPatners" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-select v-model="department" class="w-full select-large" label="Faculty">
                                <vs-select-item :key="index" :value="item.value"       :text="item.text" v-for="(item,index) in departmentOptions" class="w-full" />
                            </vs-select>
                        </div>
                    </div>
                </tab-content>

                <!-- tab 3 content -->
                <tab-content title="When published" class="mb-5" icon="feather icon-image">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input type="date" label="Publication Date"  v-model="publicationDate" class="w-full" />
                        </div>

                           <div class="vx-col md:w-1/2 w-full mt-5"> 
                                <vs-input type="file" label="Research Document" name="mypic"   class="w-full"  id="file" ref="file" @change="handleFileUpload"/>
                           </div>
                    </div>
                </tab-content>
            </form-wizard>
        </div>

       
    </vx-card>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// Store Module
import moduleDataList from '@/store/research/moduleDataList.js'
import axios from 'axios'

export default {
  data () {
    return {
      toggle: true,
      user_data: null,
      title: '',
      abstract: '',
      apaStyle:'',
      department:'',
      mainSupervisor: '',
      internationalPatners: '',
      publicationDate: '',
      coSupervisor: '',
      publicationType: '',
      proposalTitle: '',
      level: '',
      conferencePaper: '',
      eventName: '', 
      file: '',
      sdgOption: '',
      status: 'plannning',
      researchOptions: [
        {text: 'Post graduate supervision', value:'Post graduate supervision'},
        {text: 'Peer Reviewed Conference publications', value:'Peer Reviewed Conference publications'},
        {text: 'Oral/Conference presentations', value:'Oral/Conference presentations'},
        {text: 'Peer reviewed journal articles', value:'Peer reviewed journal articles'},
        {text: 'Book Chapter', value:'Book Chapter'},
        {text: 'Book', value:'Book'},
        {text: 'Book Editor/ Co-editor', value:'Book Editor/ Co-editor'},
        {text: 'Others (Specify, e.g. book review, reports…)', value:'Others (Specify, e.g. book review, reports…)'}
      ],
      sdgOptions: [
        {text: '1 (No Poverty)', value:'1 (No Poverty)'},
        {text: '2 (Zero Hunger)', value:'2 (Zero Hunger)'},
        {text: '3 (Good Health And Well Being)', value:'3 (Good Health And Well Being)'},
        {text: '4 (Quality Education)', value:'4 (Quality Education)'},
        {text: '5 (Gender Equality)', value:'5 (Gender Equality)'},
        {text: '6 (Clean water and sanitation)', value:'6 (Clean water and sanitation)'},
        {text: '7 (Affordable and Clean Energy)', value:'7 (Affordable and Clean Energy)'},
        {text: '8 (Decent Work And Economic Growth)', value:'8 (Decent Work And Economic Growth)'},
        {text: '9 (Industry, Innovation and Infrastructure)', value:'9 (Industry, Innovation and Infrastructure)'},
        {text: '10 (Reduced Inequality)', value:'10 (Reduced Inequality)'},
        {text: '11 (Sustainable Cities and Communities)', value:'11 (Sustainable Cities and Communities)'},
        {text: '12 (Responsible Consumption and Production)', value:'12 (Responsible Consumption and Production)'},
        {text: '13 (Climate Action)', value:'13 (Climate Action)'},
        {text: '14 (Life Below Water)', value:'14 (Life Below Water)'},
        {text: '15 (Life on Land)', value:'15 (Life on Land)'},
        {text: '16 (Peace and Justice Strong Institutions)', value:'16 (Peace and Justice Strong Institutions)'},
        {text: '17 (Partnerships to achieve the Goal)', value:'Others (Specify, e.g. book review, reports…)'}
      ],
      levelOptions: [
        {text: 'Masters', value:'Masters'},
        {text: 'Doctorate', value:'Doctorate'},
        {text: 'Student', value:'Student'}
      ],
      departmentOptions: [
        { text: 'All', value: 'all' },
        { text: 'Computing & Informatics', value: 'Computing & Informatics' },
        { text: 'Engineering', value: 'Engineering' },
        { text: 'Health & Applied Sciences', value: 'Health & Applied Sciences' },
        { text: 'Human Sciences', value: 'Human Sciences' },
        { text: 'Management Sciences', value: 'Management Sciences' },
        { text: 'Natural Resources & Spatial Sciences', value: 'Natural Resources & Spatial Sciences' }
      ]
    }
  },
  methods: {
    formSubmitted () {
      this.$vs.loading()
      const user = JSON.parse(localStorage.getItem('userInfo'))
      const params = new URLSearchParams()
      params.append('publicationType', this.publicationType)
      params.append('title', this.title)
      params.append('eventTitle', this.eventName)
      params.append('publicationDate', this.publicationDate)
      params.append('apaStyle', this.apaStyle)
      params.append('department', this.department)
      params.append('mainSupervisor', this.mainSupervisor)
      params.append('coSupervisor', this.coSupervisor)
      params.append('level', this.level)
      params.append('conferencePaper', this.conferencePaper)
      params.append('reviews', 'none')
      params.append('file', this.file.name)
      params.append('sdggoal', this.sdgOption)
      params.append('abstract', this.abstract)
      params.append('userId', user.id)

      const accessToken = localStorage.getItem('accessToken')
      console.log(accessToken)
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${accessToken}`
        }
      }
      const formData = new FormData()
      formData.append('file', this.file)
      axios.post(`http://${window.location.host}/api/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('SUCCESS!!')
      })
        .catch(function () {
          console.log('FAILURE!!')
        })
      axios.patch(`http://${window.location.host}/api/research-outputs/update/${this.$route.params.userId}`, params, config)
        .then(() => { 
          this.$vs.loading.close() 
          this.$vs.notify({
            title: 'Success',
            text: 'Research Updated Succesfully',
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
    handleFileUpload (input) {
      this.file = input.target.files[0]
    },
    fetch_user_data (userId) {
      this.$store.dispatch('dataList/fetchResearchById', userId)
        .then(res => { 
          this.title = res.data.title
          this.publicationType = res.data.publicationType
          this.abstract = res.data.abstract
          this.apaStyle = res.data.apaStyle
          this.mainSupervisor = res.data.mainSupervisor
          this.internationalPatners = res.data.internationalPatners
          this.publicationDate = res.data.publicationDate
          this.coSupervisor = res.data.coSupervisor
          this.proposalTitle = res.data.proposalTitle
          this.level = res.data.level
          this.conferencePaper = res.data.conferencePaper
          this.eventName = res.data.eventName 
          this.file = res.data.file 
          this.sdgOption = res.data.sdggoal
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.user_not_found = true
            return
          }
          console.error(err) 
        })
    }
  },
  created () {
    // Register Module UserManagement Module
    if (!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }
    this.fetch_user_data(this.$route.params.userId)
  },
  components: {//hh
    FormWizard,
    TabContent
  }
}
</script>
