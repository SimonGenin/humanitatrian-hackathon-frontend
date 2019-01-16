<template>
    <div>

<el-dialog
    title="User verification"
    :visible.sync="dialogVisible"
    width="60%"
    :show-close="true"
    :close-on-click-modal="true"

  >
    <div>

      <el-alert :closable="false" type="warning" show-icon>
         You're about to accept that your files get edited. Please confirm by identifying yourself again.
          </el-alert>
         
      <el-row :gutter="12" class="flex justify-center mt-8">

        <el-col :span="6">
          <el-card shadow="always" class="cursor-pointer hover:bg-grey-lighter">
              <div style="text-align:center;">
                  <img src="@/assets/icon-lock.svg" style="width:96px" alt="">
                  <p class="mt-4 font-bold">Password</p>
              </div>
          </el-card>
        </el-col>

        <el-col :span="6">
             <router-link class="no-underline" to="/webcam">
          <el-card  shadow="always" class="cursor-pointer hover:bg-grey-lighter"><div style="text-align:center;">
                  <img src="@/assets/icon-camera.svg" style="width:96px" alt="">
                  <p class="mt-4 font-bold">Facial Recognition</p>
              </div></el-card>
             </router-link>
        </el-col>

        <el-col :span="6">
          <el-card shadow="always" class="cursor-pointer hover:bg-grey-lighter"><div style="text-align:center;">
                  <img src="@/assets/icon-target.svg" style="width:96px" alt="">
                  <p class="mt-4 font-bold">Fingerprint</p>
              </div></el-card>
        </el-col>
      </el-row>
    </div>

    
  </el-dialog>

  <el-tabs type="border-card" class="xl:w-3/4 m-auto">
    <el-tab-pane v-for="(item, ind) in info" :key="ind" :label="ind">
      <div>

        <div class="flex justify-center">

          <table class="border border-grey-light">
            <tbody>
              <tr v-for="(nested_item, nested_index) in item" :key="nested_index">
                <td class="border border-grey-light p-4 font-bold">{{ nested_index }}</td>
                <td class="font-bold border border-grey-light p-4">
                  <el-input size="medium" v-model="info[ind][nested_index]"></el-input>
                </td>
                <td class="border border-grey-light p-4 font-bold">
                  <el-button
                    type="danger"
                    icon="el-icon-delete"
                    @click="remove(ind, nested_index)"
                    circle
                  ></el-button>
                </td>
              </tr>
            </tbody>
          </table>

       

        </div>
     <div class="flex justify-center mt-8">
          <el-button @click="dialogVisible = true" plain>Save "{{ind}}" data</el-button>

    </div>


      </div>



    </el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>


export default {
  data() {
    return {
      info: {
        "General information": {
          "Age": 34,
          "Firstname": "Simon"
        },
        "Health": {
          "Blood pressure": 11
        }
      },
      dialogVisible: false
    };
  },
  methods: {

    remove(id, nest_id) {

        this.$delete(this.info[id], nest_id)

    }

  }

  
};
</script>