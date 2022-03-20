<template>
  <div class="vx-row">
    <!-- VERTICAL LAYOUT WITH ICON-->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card title="Create Department" code-toggler>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label="Department  Name" v-model="department_name" />
          </div>
        </div>
   
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="input13 = input14 = input15 = input16 = ''; check4 = false;">Cancel</vs-button>
          </div>
        </div>

        <!-- CODE -->
       
      </vx-card>
    </div>

  
  </div>
</template>

<script>
export default{
  data () {
    return {
      department_name: ''
    
    }
  }
}
</script>
