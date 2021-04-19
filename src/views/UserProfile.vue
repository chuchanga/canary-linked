<template>
  <div class="profile-container py-32 flex flex-wrap lg:flex-nowrap 2xl:px-32 xl:px-20 lg:px-20  justify-center">
      <div class="description-container w-80 flex flex-col">
        <div v-if="!editing">
          <UserDescription class="" />
        </div>
        <div v-if="!editing" class="mb-2">
          <YellowButton :onClick="startEditing"> EDITAR PERFIL </YellowButton>
        </div>
        <div v-if="editing">
          <EditUserDescription />
        </div>
      </div>
      <div class="categories-container w-5/5">
       <ProfileCategories />
      </div>
  </div>

</template>

<script>
// Aquí se importan los componentes
import UserDescription from "../components/Profile/UserDescription.vue";
import EditUserDescription from "../components/Profile/EditUserDescription.vue";
import ProfileCategories from "../components/Profile/ProfileCategories.vue";
import YellowButton from "../components/Button/YellowButton.vue";

export default {
  name: "UserProfile",
  data() {
    return {
      editing: false,
    };
  },
  components: {
    UserDescription,
    EditUserDescription,
    ProfileCategories,
    YellowButton,
  },
  methods: {
    startEditing() {
      this.editing = true;
    },
  }
};
</script>

<style></style>
