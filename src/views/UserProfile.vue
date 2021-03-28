<template>
  <div class="profile-container flex flex-col lg:flex-row">
      <div class="description-container w-1/5">
        <UserDescription />
      </div>
      <div class="categories-container w-full">
        <ProfileCategories />
      </div>
  </div>

</template>

<script>
// Aquí se importan los componentes
import UserDescription from "../components/UserDescription.vue";
import ProfileCategories from "../components/ProfileCategories.vue";

export default {
  name: "UserProfile",
  components: {
    UserDescription,
    ProfileCategories
  },
};
</script>

<style></style>
