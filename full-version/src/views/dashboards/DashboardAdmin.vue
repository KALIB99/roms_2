
<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  icon="UsersIcon"
                  :statistic="userscount"
                  statisticTitle="Users "
                  type="area" />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  
                  icon="ActivityIcon"
                  :statistic="researchcount"
                  statisticTitle="Researchs Published"
                  color="success"
                  type="area" />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
               
                  icon="ShoppingBagIcon"
                  :statistic="24"
                  statisticTitle="Departments"
                  
                  color="danger"
                  type="area" />
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line
                  
                  icon="ShoppingBagIcon"
                  :statistic="6"
                  statisticTitle="Faculties"
              
                  color="warning"
                  type="area" />
            </div>
        </div>
          <div class="vx-row">

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">

                <vx-card title="Authors">
                    <div :class="{'mt-4': index}">
                        <div class="flex justify-between">
                            <div class="flex flex-col">
                                <span class="mb-1">Tinashe Kanengoni</span>
                                <h4>Researchs Published </h4>
                            </div>
                            <div class="flex flex-col text-right">
                                <span class="flex -mr-1">
                                    <span class="mr-1"></span>
                                    <feather-icon :icon=" 1 < 0 ? 'ArrowDownIcon' : 'ArrowUpIcon'" :svgClasses="[1 < 0 ? 'text-danger' : 'text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                                </span>
                                <span class="text-grey">{{researchcount}}</span>
                            </div>
                        </div>
                        <vs-progress :percent="100"></vs-progress>
                    </div>
                </vx-card>
            </div>
             <div class="vx-col w-full md:w-2/3 xl:w-2/3">
      <!-- excel modal pop up -->
    <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
        <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
        <v-select v-model="selectedFormat" :options="formats" class="my-4" />
        <div class="flex">
          <span class="mr-4">Cell Auto Width:</span>
          <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
        </div>
    </vs-prompt>
    <!-- end of excel popup -->
        <vx-card title="Research Output Per Faculty">
          <div slot="no-body" class="mt-4">
            <vs-table :data="computinginformaticsCount" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>Faculty</vs-th>
                <vs-th>2021</vs-th>
                <vs-th>2022</vs-th>
                <vs-th>2023</vs-th>
                <vs-th>2024</vs-th>
              
              </template>
        <template slot="header">
          <vs-button @click="activePrompt=true">Export To CSV</vs-button>
        </template>
            <template >
                <vs-tr >
                  <vs-td >
                    <span>Computing And Informatics</span>
                  </vs-td>
                  <vs-td >
                    
                    <span>{{computinginformaticsCount}}</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                </vs-tr>
              <vs-tr >
                  <vs-td >
                    <span>Engineering</span>
                  </vs-td>
 
                  <vs-td >
                    
                      <span>{{engineeringCount}}</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                </vs-tr>
                <vs-tr >
                  <vs-td >
                    <span>Management Sciences</span>
                  </vs-td>
            
                  <vs-td >
                    
                        <span>{{managementsciencesCount}}</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                </vs-tr>
                              <vs-tr >
                  <vs-td >
                    <span>Health and Applied Sciences</span>
                  </vs-td>
      
                  <vs-td >
                    
                        <span>{{healthappliedCount}}</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                </vs-tr>
                <vs-tr >
                  <vs-td >
                    <span>Humanities And TVT</span>
                  </vs-td>
              
                  <vs-td >
                    
                        <span>{{humanssciencesCount}}</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                </vs-tr>
               <vs-tr >
                  <vs-td >
                    <span>Natural Resources and Spatial Sciences</span>
                  </vs-td>
        
                  <vs-td >
                    
                        <span>{{naturalresourcesCount}}</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                    
                  </vs-td>
                  <vs-td >
                    <span>0</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>

        </vx-card>
             </div>
            </div>
         
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import axios from 'axios'
import vSelect from 'vue-select'

export default{
  components: {
    VueApexCharts,
    StatisticsCardLine,
    VuePerfectScrollbar,
    ChangeTimeDurationDropdown,
    vSelect
  },
  data () {
    return {
      fileName: '',
      formats:['xlsx', 'csv', 'txt'],
      cellAutoWidth: true,
      selectedFormat: 'xlsx',      
      userscount: '',
      researchcount: '',
      computinginformaticsCount: '',
      engineeringCount: '',
      healthappliedCount: '',
      humanssciencesCount: '',
      managementsciencesCount: '',
      naturalresourcesCount: '',
      activePrompt: false
    }
  },
  computed: {
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  mounted () {
    const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS
    scroll_el.scrollTop = this.$refs.chatLog.scrollHeight
  },
  created () {
    axios.get(`http://${window.location.host}/api/users/count`)
      .then((res) => { this.userscount = res.data.userCount; this.researchcount = res.data.researchCount; this.computinginformaticsCount = res.data.computinginformaticsCount; this.engineeringCount = res.data.engineeringCount; this.healthappliedCount = res.data.healthappliedCount; this.humanssciencesCount = res.data.humanssciencesCount; this.managementsciencesCount = res.data.managementsciencesCount; this.naturalresourcesCount = res.data.naturalresourcesCount }).catch(error => { console.log(error) })
   
  },
  methods: {
    exportToExcel () {
      import('@/vendor/Export2Excel').then(excel => {
        const list = this.users
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat
        })
        this.clearFields()
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        // Add col name which needs to be translated
        return v[j]
      }))
    },
    clearFields () {
      this.filename = ''
      this.cellAutoWidth = true
      this.selectedFormat = 'xlsx'
    }
  }
}
</script>

<style lang="scss">
.chat-card-log {
    height: 400px;

    .chat-sent-msg {
        background-color: #f2f4f7 !important;
    }
}
</style>
