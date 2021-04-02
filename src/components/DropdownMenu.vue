<template>
  <div class="container">
    <div class="relative text-left inline-flex flex-col">
     <button @click="open = !open" class="p-3 w-28 bg-richblack items-center text-culturedwhite focus:outline-none rounded-full">
        <i class="far fa-user fa-3x rounded-full"></i>
      </button>

      <div v-if="open" class="absolute w-full mt-20 bg-richblack border-t border-davysgray">
        <a href="" class="dropdown-item block p-3 border-b text-culturedwhite border-cyberyellow hover:bg-cyberyellow hover:border-richblack hover:text-richblack">Link 1</a>
        <a href="" class="dropdown-item block p-3 border-b text-culturedwhite border-cyberyellow hover:bg-cyberyellow hover:border-richblack hover:text-richblack">Link 2</a>
        <a href="" class="dropdown-item block p-3 border-b text-culturedwhite border-cyberyellow hover:bg-cyberyellow hover:border-richblack hover:text-richblack">Link 3</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  data() {
    return {
      open: false,
    };
  },
};
</script>
