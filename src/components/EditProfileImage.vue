<template>
  <div class="self-center mb-4">
    <div class="user-image mb-8 h-48 w-48 rounded-full text-richblack overflow-hidden">
      <img class="h-auto max-w-full rounded-full mb-2" :src=userImageUrl alt="Foto de perfil del usuario">
      <i class="fas fa-camera fa-2x mr-2 self-center cursor-pointer" @click="browse()"></i>
    </div>
    <div>
      <input type="file" @change="previewImage" accept="image/*" class="hidden" ref="selectFile" >
      <button class="hidden" @click="onUpload()" ref="uploadImg"></button>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "EditProfileImage",
  data() {
    return {
      imageData: null,
      userImageUrl: null,
      componentKey: 0,
      editing: false
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
      firebase.storage().ref("users/" + firebase.auth().currentUser.uid + "/profile.jpg").put(this.imageData).then(() => {
        firebase.storage().ref("users/" + firebase.auth().currentUser.uid + "/profile.jpg").getDownloadURL().then(imgUrl => {
          this.userImageUrl = imgUrl;
        });
      });
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
</style>
