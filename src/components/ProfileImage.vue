<template>
  <div>

    <div class="user-image mb-8 h-48 w-48 rounded-full self-center">
      <img class="h-48 w-48 rounded-full self-center" :src=userImageUrl alt="Foto de perfil del usuario">
      <i class="fas fa-camera absolute" @click="browse()"></i>
    </div>
    <div>
      <input type="file" @change="previewImage" accept="image/*" class="hidden" ref="selectFile" >
      <button @click="onUpload()" ref="uploadImg">Upload</button>
    </div>
    <!--<div v-if="imageData!=null">
      <button @click="onUpload()" ref="uploadImg">Upload</button>
  </div>-->
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Upload",
  data() {
    return {
      imageData: null,
      userImageUrl: null,
      componentKey: 0
    };
  },

  methods: {
    browse() {
      this.$refs.selectFile.click();
    },
    previewImage(event) {
      console.log(this);
      this.picture = null;
      this.imageData = event.target.files[0];
      const elem = this.$refs.uploadImg;
      elem.click();
    },
    onUpload() {
      this.picture = null;
      firebase.storage().ref("users/" + firebase.auth().currentUser.uid + "/profile.jpg").put(this.imageData);
      this.$forceUpdate();
    }

  },
  mounted() {
    firebase.storage().ref("users/" + firebase.auth().currentUser.uid + "/profile.jpg").getDownloadURL().then(imgUrl => {
      this.userImageUrl = imgUrl;
    });
  }

};
</script>
<style scoped>
  .bg-hero {background: url("../assets/img1.jpg") center center no-repeat;}
</style>
