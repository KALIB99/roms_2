<!-- =========================================================================================
  File Name: UserList.vue
  Description: User List page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>

  <div id="page-user-list">

    <vx-card ref="filterCard" title="Filters" class="user-list-filters mb-8" actionButtons @refresh="resetColFilters" @remove="resetColFilters">
      <div class="vx-row">
        <div class="vx-col md:w-1/4 sm:w-1/2 w-full">
          <label class="text-sm opacity-75">Publication Type</label>
          <v-select :options="researchOptions" :clearable="false" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="roleFilter" class="mb-4 md:mb-0" />
        </div>
        <div class="vx-col md:w-1/4 sm:w-1/2 w-full">
          <label class="text-sm opacity-75">Status</label>
          <v-select :options="statusOptions" :clearable="false" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="statusFilter" class="mb-4 md:mb-0" />
        </div>
        <div class="vx-col md:w-1/4 sm:w-1/2 w-full">
          <label class="text-sm opacity-75">SDG Goal</label>
          <v-select :options="isVerifiedOptions" :clearable="false" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="isVerifiedFilter" class="mb-4 sm:mb-0" />
        </div>
        <div class="vx-col md:w-1/4 sm:w-1/2 w-full">
          <label class="text-sm opacity-75">Department</label>
          <v-select :options="departmentOptions" :clearable="false" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="departmentFilter" />
        </div>
      </div>
    </vx-card>

    <div class="vx-card p-6">

      <div class="flex flex-wrap items-center">

        <!-- ITEMS PER PAGE -->
        <div class="flex-grow">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
              <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ researchData.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : researchData.length }} of {{ researchData.length }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>

              <vs-dropdown-item @click="gridApi.paginationSetPageSize(10)">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                <span>20</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(25)">
                <span>25</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(30)">
                <span>30</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
          <vs-input class="sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
         <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button> 

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer">

            <div class="p-3 shadow-drop rounded-lg d-theme-dark-light-bg cursor-pointer flex items-end justify-center text-lg font-medium w-32">
              <span class="mr-2 leading-none">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Delete</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Archive</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Print</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="SaveIcon"   @click="gridApi.exportDataAsCsv()" svgClasses="h-4 w-4" class="mr-2" />
                  <span>CSV</span>
                </span>
              </vs-dropdown-item>

            </vs-dropdown-menu>
          </vs-dropdown>
      </div>


      <!-- AgGrid Table -->
      <ag-grid-vue
        ref="agGridTable"
        :components="components"
        :gridOptions="gridOptions"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="researchData"
        rowSelection="multiple"
        colResizeDefault="shift"
        :animateRows="true"
        :floatingFilter="true"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
        :suppressPaginationPanel="true"
        :enableRtl="$vs.rtl">
      </ag-grid-vue>

      <vs-pagination
        :total="totalPages"
        :max="7"
        v-model="currentPage" />

    </div>
  </div>

</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'
import vSelect from 'vue-select'

// Store Module
import moduleDataList from '@/store/research/moduleDataList.js'

// Cell Renderer
import CellRendererLink from './cell-renderer/CellRendererLink.vue'
import CellRendererStatus from './cell-renderer/CellRendererStatus.vue'
import CellRendererVerified from './cell-renderer/CellRendererVerified.vue'
import CellRendererActions from './cell-renderer/CellRendererActions.vue'

export default {
  components: {
    AgGridVue,
    vSelect,

    // Cell Renderer
    CellRendererLink,
    CellRendererStatus,
    CellRendererVerified,
    CellRendererActions
  },
  data () {
    return {

      // Filter Options
      roleFilter: { label: 'All', value: 'all' },
      roleOptions: [
        { label: 'All', value: 'all' },
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Staff', value: 'staff' }
      ],
      researchOptions: [
        {label: 'Post graduate supervision', value:'Post graduate supervision'},
        {label: 'Peer Reviewed Conference publications', value:'Peer Reviewed Conference publications'},
        {label: 'Oral/Conference presentations', value:'Oral/Conference presentations'},
        {label: 'Peer reviewed journal articles', value:'Peer reviewed journal articles'},
        {label: 'Book Chapter', value:'Book Chapter'},
        {label: 'Book', value:'Book'},
        {label: 'Book Editor/ Co-editor', value:'Book Editor/ Co-editor'},
        {label: 'Others (Specify, e.g. book review, reports…)', value:'Others (Specify, e.g. book review, reports…)'}
      ],
      statusFilter: { label: 'All', value: 'all' },
      statusOptions: [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Deactivated', value: 'deactivated' },
        { label: 'Blocked', value: 'blocked' }
      ],

      isVerifiedFilter: { label: 'All', value: 'all' },
      isVerifiedOptions: [
        { label: 'All', value: 'all' },
        {label: '1 (No Poverty)', value:'1 (No Poverty)'},
        {label: '2 (Zero Hunger)', value:'2 (Zero Hunger)'},
        {label: '3 (Good Health And Well Being)', value:'3 (Good Health And Well Being)'},
        {label: '4 (Quality Education)', value:'4 (Quality Education)'},
        {label: '5 (Gender Equality)', value:'5 (Gender Equality)'},
        {label: '6 (Clean water and sanitation)', value:'6 (Clean water and sanitation)'},
        {label: '7 (Affordable and Clean Energy)', value:'7 (Affordable and Clean Energy)'},
        {label: '8 (Decent Work And Economic Growth)', value:'8 (Decent Work And Economic Growth)'},
        {label: '9 (Industry, Innovation and Infrastructure)', value:'9 (Industry, Innovation and Infrastructure)'},
        {label: '10 (Reduced Inequality)', value:'10 (Reduced Inequality)'},
        {label: '11 (Sustainable Cities and Communities)', value:'11 (Sustainable Cities and Communities)'},
        {label: '12 (Responsible Consumption and Production)', value:'12 (Responsible Consumption and Production)'},
        {label: '13 (Climate Action)', value:'13 (Climate Action)'},
        {label: '14 (Life Below Water)', value:'14 (Life Below Water)'},
        {label: '15 (Life on Land)', value:'15 (Life on Land)'},
        {label: '16 (Peace and Justice Strong Institutions)', value:'16 (Peace and Justice Strong Institutions)'},
        {label: '17 (Partnerships to achieve the Goal)', value:'Others (Specify, e.g. book review, reports…)'}
      ],

      departmentFilter: { label: 'All', value: 'all' },
      departmentOptions: [
        { label: 'All', value: 'all' },
        { label: 'Computing & Informatics', value: 'Computing & Informatics' },
        { label: 'Engineering', value: 'Engineering' },
        { label: 'Health & Applied Sciences', value: 'Health & Applied Sciences' },
        { label: 'Human Sciences', value: 'Human Sciences' },
        { label: 'Management Sciences', value: 'Management Sciences' },
        { label: 'Natural Resources & Spatial Sciences', value: 'Natural Resources & Spatial Sciences' },
        { label: 'NUST Administrative Units', value: 'NUST Administrative Units' },
        { label: 'NUST Centres & Institutes', value: 'NUST Centres & Institutes' },
        { label: 'NUST Library', value: 'NUST Library' },
        { label: 'Other - Multidisciplinary', value: 'Other - Multidisciplinary' },
        { label: 'Speeches, Lectures, Presentations', value: 'Speeches, Lectures, Presentations' },
        { label: 'Theses & Dissertations', value: 'Theses & Dissertations' },
        { label: 'Management', value: 'management' }
      ],

      searchQuery: '',

      // AgGrid
      gridApi: null,
      gridOptions: {},
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [
        {
          headerName: 'Author',
          field: 'userId.firstname',
          width: 150,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true
        },
        {
          headerName: 'Title',
          field: 'title',
          filter: true,
          width: 210,
          cellRendererFramework: 'CellRendererLink'
        },
        {
          headerName: 'PublicationType',
          field: 'publicationType',
          filter: true,
          width: 225
        },
        {
          headerName: 'publicationDate',
          field: 'publicationDate',
          filter: true,
          width: 200
        },
        {
          headerName: 'SDG Goals',
          field: 'sdggoal',
          filter: true,
          width: 200
        },
        {
          headerName: 'apaStyle',
          field: 'apaStyle',
          filter: true,
          width: 150
        },
        {
          headerName: 'mainSupervisor',
          field: 'mainSupervisor',
          filter: true,
          width: 150
        },
        {
          headerName: 'coSupervisor',
          field: 'coSupervisor',
          filter: true,
          width: 150
        },
        {
          headerName: 'level',
          field: 'level',
          filter: true,
          width: 150,
          cellRendererFramework: 'CellRendererStatus'
        },
        {
          headerName: 'conferencePaper',
          field: 'conferencePaper',
          filter: true,
          width: 125,
          //cellRendererFramework: 'CellRendererVerified',
          cellClass: 'text-center'
        },
        {
          headerName: 'Actions',
          field: 'transactions',
          width: 150,
          cellRendererFramework: 'CellRendererActions'
          
        }
      ],

      // Cell Renderer Components
      components: {
        CellRendererLink,
        CellRendererStatus,
        CellRendererVerified,
        CellRendererActions
      }
    }
  },
  watch: {
    roleFilter (obj) {
      this.setColumnFilter('publicationType', obj.value)
    },
    statusFilter (obj) {
      this.setColumnFilter('status', obj.value)
    },
    isVerifiedFilter (obj) {
      const val = obj.value === undefined ? 'all' : obj.value 
      this.setColumnFilter('sdggoal', val)
    },
    departmentFilter (obj) {
      this.setColumnFilter('department', obj.value)
    }
  },
  computed: {
    researchData () {
      return this.$store.state.dataList.products
    },
    paginationPageSize () {
      if (this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 10
    },
    totalPages () {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages()
      else return 0
    },
    currentPage: {
      get () {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
        else return 1
      },
      set (val) {
        this.gridApi.paginationGoToPage(val - 1)
      }
    }
  },
  methods: {
    setColumnFilter (column, val) {
      const filter = this.gridApi.getFilterInstance(column)
      let modelObj = null

      if (val !== 'all') {
        modelObj = { type: 'equals', filter: val }
      }

      filter.setModel(modelObj)
      this.gridApi.onFilterChanged()
    },
    resetColFilters () {
      // Reset Grid Filter
      this.gridApi.setFilterModel(null)
      this.gridApi.onFilterChanged()

      // Reset Filter Options
      this.roleFilter = this.statusFilter = this.isVerifiedFilter = this.departmentFilter = { label: 'All', value: 'all' }

      this.$refs.filterCard.removeRefreshAnimation()
    },
    updateSearchQuery (val) {
      this.gridApi.setQuickFilter(val)
    }
  },
  mounted () {
    this.gridApi = this.gridOptions.api

    /* =================================================================
      NOTE:
      Header is not aligned properly in RTL version of agGrid table.
      However, we given fix to this issue. If you want more robust solution please contact them at gitHub
    ================================================================= */
    if (this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector('.ag-header-container')
      header.style.left = `-${  String(Number(header.style.transform.slice(11, -3)) + 9)  }px`
    }
  },
  created () {
    if (!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }
    this.$store.dispatch('dataList/fetchDataListItems').catch(err => { console.error(err) })
  }
}

</script>

<style lang="scss">
#page-user-list {
  .user-list-filters {
    .vs__actions {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-58%);
    }
  }
}
</style>
