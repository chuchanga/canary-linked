<template>
  <div class="self-center">
    <div class="user-image h-48 w-48 mb-6 rounded-full overflow-hidden">
      <img class="h-auto max-w-full rounded-full" v-if="userImageUrl===null" src="././assets/profile.jpg" alt="Foto de perfil del usuario por defecto">
      <img class="h-auto max-w-full rounded-full" v-if="userImageUrl!=null" :src=userImageUrl alt="Foto de perfil del usuario">
    </div>
    <!--<div>
      <input type="file" @change="previewImage" accept="image/*" class="hidden" ref="selectFile" >
      <button class="hidden" @click="onUpload()" ref="uploadImg"></button>
    </div>-->
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "ProfileImage",
  data() {
    return {
      imageData: null,
      userImageUrl: null,
      componentKey: 0,
      editing: false
    };
  },

  methods: {
    /* Browse() {
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
    } */

  },
  mounted() {
    firebase.storage().ref("users/" + firebase.auth().currentUser.uid + "/profile.jpg").getDownloadURL().then(imgUrl => {
      this.userImageUrl = imgUrl;
    });
  }

};
</script>
<style scoped>
</style>
