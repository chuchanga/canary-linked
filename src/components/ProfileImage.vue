<template>
  <div>
     <!--<style>
        :root {
        --user-image: url("{{userImage}}");
        }
      </style>-->
    <div class="user-image mb-8 h-48 w-48 rounded-full self-center bg-hero">
      <i class="fas fa-camera" @click="browse()"></i>
    </div>
    <div>
      <input type="file" @change="previewImage" accept="image/*" class="hidden" ref="selectFile" >
    </div>
    <div v-if="imageData!=null">
      <button @click="onUpload">Upload</button>
  </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Upload",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      userImage: firebase.storage().ref("users/" + firebase.auth().currentUser.uid + "/profile.jpg").getDownloadURL()
    };
  },

  methods: {
    browse() {
      this.$refs.selectFile.click();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase.storage().ref("users/" + firebase.auth().currentUser.uid + "/profile.jpg").put(this.imageData);
      storageRef.on(`state_changed`, () => {
        this.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url;
        });
      }
      );
    }

  },

};
</script>
<style scoped>
  .bg-hero {background: url("../assets/img1.jpg") center center no-repeat;}
</style>
