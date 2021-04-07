<template>
  <div class="profile-container m-4 flex flex-col lg:flex-row px-36">
      <div class="description-container md:self-center">
        <div v-if="!editing">
          <UserDescription />
        </div>
        <div v-if="editing">
          <EditUserDescription />
        </div>
        <div v-if="!editing" class="mb-2">
          <YellowButton :onClick="startEditing"> EDITAR PERFIL </YellowButton>
        </div>
        <AddButton :onClick="showModalWindow" />
      </div>
      <div class="categories-container w-4/5">
        <ProfileCategories />
        <add-offer v-if="showModal" @close="showModal = false">
        </add-offer>
      </div>
  </div>

</template>

<script>
// Aquí se importan los componentes
import UserDescription from "../components/UserDescription.vue";
import EditUserDescription from "../components/EditUserDescription.vue";
import ProfileCategories from "../components/ProfileCategories.vue";
import YellowButton from "../components/Button/YellowButton.vue";
import AddButton from "../components/Button/AddButton.vue";
import AddOffer from "../components/AddOffer.vue";

export default {
  name: "UserProfile",
  data() {
    return {
      editing: false,
      showModal: false
    };
  },
  components: {
    UserDescription,
    EditUserDescription,
    ProfileCategories,
    YellowButton,
    AddButton,
    AddOffer
  },
  methods: {
    startEditing() {
      this.editing = true;
    },
    showModalWindow() {
      this.showModal = true;
    }
  }
};
</script>

<style></style>
