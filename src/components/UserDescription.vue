<template>
  <div class="user-info w-72 h-auto m-4 p-4 shadow-lg flex flex-col">
    <div class="user-image mb-8 bg-hero h-48 w-48 rounded-full self-center"></div>
    <div class="user-name ml-2 h-1/6 text-left">{{users[0].name}} {{users[0].surname}}</div>
    <div class="user-id mt-1 ml-2 h-1/6 text-left text-gray-400">@{{users[0].usertag}}</div>
    <div class="user-brief-description ml-2 mt-8 h-1/6 text-left text-xs">{{ users[0].brief }}</div>
    <div class="user-contact ml-2 mt-8 h-1/6">
      <div class="contact-location h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-map-marker-alt mr-4"></i>{{ users[0].location }}
       </div>
      <div class="contact-mail h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-envelope mr-2"></i> {{users[0].email}}
       </div>
      <div class="contact-web h-1/6 text-left text-sm">
        <i class=" text-davysgray fas fa-pager mr-2"></i>
        {{ users[0].website }}
       </div>
    </div>
    <Button class="mt-8 mb-6" text="Editar Perfil" />
  </div>
</template>

<script>
import Button from "../components/ButtonCard.vue";
import db from "./firebaseInit.js";
export default {
  name: "UserDescription",
  data () {
    return {
      users: []
    };
  },
  created () {
    db.collection("users").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          usertag: doc.data().userTag,
          email: doc.data().email,
          name: doc.data().userName,
          surname: doc.data().userSurname,
          brief: doc.data().userBrief,
          location: doc.data().userLocation,
          website: doc.data().userWeb

        };
        this.users.push(data);
      });
    });
  },

  components: {
    Button,
  }
};
</script>
<style scoped>
  .bg-hero {
        background: url("../assets/img1.jpg") center center no-repeat;
    }
</style>
