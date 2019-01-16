<template>
  <el-dialog
    title="User identification"
    :visible.sync="dialogVisible"
    width="60%"
    :show-close="false"
    :close-on-click-modal="false"

  >
    <div>

      <el-alert :closable="false" type="info" show-icon>
          Use a way you've been registered for to get identified. <br> 
          If you've never been registered, you have the possibility to do so.
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
                  <p class="mt-4 font-bold no-underline">Facial Recognition</p>
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

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">Make a new registration</el-button>
    </span>
  </el-dialog>
</template>


<script>
export default {
  data() {
    return {
      dialogVisible: true
    };
  },
  methods: {
    
  }
};
</script>