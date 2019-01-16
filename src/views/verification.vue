<template>
  <div>
    <div class="flex flex-col justify-center items-center bg-blue-darker shadow rounded p-8 mb-8">
      <vue-webcam :width="800" :height="500" ref="webcam" class="mb-8"></vue-webcam>
      <el-button type="secondary" @click="take_photo()" round>Take the picture</el-button>

      <hr class="border border-blue-lightest w-full my-12">

      <img class="mb-8" :src="photo" alt style="width:600px;height:350px">
      <el-button
        type="primary"
        :loading="working"
        @click="send()"
        :disabled="!this.photo"
        round
      >Identify user</el-button>
    </div>
  </div>
</template>

<script>
import VueWebcam from "../VueWebcam.js";
import axios from "axios";

export default {
  components: { VueWebcam },
  data() {
    return {
      photo: null,
      working: false,
      base_url:
        "http://humanitarianhack-env.rv9ka63pzi.eu-central-1.elasticbeanstalk.com"
    };
  },
  methods: {

    take_photo() {
      this.photo = this.$refs.webcam.getPhoto();

      this.$notify({
        title: "Picture",
        message: "A picture has been taken",
        duration: 2000
      });
    },
    send() {
      this.working = true;

      axios
        .post(this.base_url + "/users/authenticate", {
          identifications: {
            image: this.photo.replace("data:image/jpeg;base64,", "")
          }
        })
        .then(response => {
          const token =  response.data.jwt;
          this.$store.commit('setJWT', token);
          this.working = false;

          this.$router.push("main");

          this.$message({
            message: "Your data has been updated!",
            type: "success"
          });
          
        })
        .catch(error => {
            console.log(error)
            console.log(error.response)
          this.working = false;
          this.$message.error(error.response.data.error);
        })
        .then(() => {
          this.working = false;
        });
    }
  } 
};
</script>