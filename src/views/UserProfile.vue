<template>
  <div class="profile-container m-4 flex flex-col lg:flex-row px-36">
      <div class="description-container">
        <div v-if="!editing">
          <UserDescription />
        </div>
        <div v-if="!editing" class="mb-2">
          <YellowButton :onClick="startEditing"> EDITAR PERFIL </YellowButton>
        </div>
        <div v-if="editing">
          <EditUserDescription />
        </div>
      </div>
      <div class="categories-container w-4/5">
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
