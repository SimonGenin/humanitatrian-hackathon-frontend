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
      const encodedString = btoa(this.photo);


      axios
        .post(this.base_url + "/users/authenticate", {
          identifications: {
            image: encodedString
          }
        })
        .then(response => {
          console.log(response.data);
          // this.$store.commit(jwt, response.data.token)
        })
        .catch(error => {
          this.$message.error(error.response.data.error);
        })
        .then(() => {
          this.working = false;
        });
    }
  }
};
</script>