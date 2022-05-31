<!-- eslint-disable -->
<template>
  <div class="flex h-screen">
    <div
      class="w-[400px] h-screen flex flex-col justify-between bg-white py-[50px]"
    >
      <div>
        <div class="flex px-10 items-center space-x-5">
          <img
            src="@/assets/Svg/logo_single.svg"
            class="object-contain w-20"
            alt=""
          />
          <div class="space-y-2">
            <h2 class="text-3xl font-bold text-[#DB44C9]">Admin</h2>
            <h2 class="text-xl font-bold text-[#DB44C9]">Logged in</h2>
          </div>
        </div>
        <div class="mt-20 px-5 space-y-5">
          <router-link
            v-for="(item, idx) in sideLinks"
            :key="idx"
            :to="item.link"
            class="flex items-center hover:bg-[#DB44C990] hover:text-[#ffffffdb] transition-all transform duration-500 font-bold text-lg rounded-md px-5 py-2"
            :class="
              item.link.includes(currentPath)
                ? 'bg-[#DB44C990] text-[#ffffffdb]'
                : 'text-[#515352]'
            "
          >
            <span class="w-2/12"> <i :class="`${item.icon} text-xl`"></i></span>
            <div class="w-10/12">{{ item.name }}</div>
          </router-link>
        </div>
      </div>
      <router-link
        to="/"
        class="flex items-center transform duration-500 transition-all font-bold text-lg rounded-md hover:bg-[#DB44C990] hover:text-[#ffffffdb] mx-5 px-5 py-2 cursor-pointer"
      >
        <span class="w-2/12">
          <i class="fa-solid fa-arrow-right-from-bracket"></i
        ></span>
        <div class="w-10/12">Logout</div>
      </router-link>
    </div>
    <div class="w-full overflow-y-auto bg-[#E5E5E5]">
      <router-view></router-view>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Admin",
  setup(props) {
    const router = useRoute();
    const sideBarContent = [
      {
        name: "Overview",
        link: "/admin/overview",
        icon: "fa-solid fa-list-check",
      },
      {
        name: "Current Rate/Tarrif",
        link: "/admin/rate",
        icon: "fa-solid fa-file-invoice-dollar",
      },
      {
        name: "User Management",
        link: "/admin/users",
        icon: "fa-solid fa-user-group",
      },
      {
        name: "Goto Calculator",
        link: "/admin/calculator",
        icon: "fa-solid fa-calculator",
      },
    ];
    const sideLinks = ref(sideBarContent);
    const currentPath = computed(() => {
      return router.path;
    });

    onMounted(() => {
      console.log(sideLinks.value);
    });
    return {
      sideLinks,
      currentPath,
    };
  },
};
</script>
<!-- eslint-disable -->

<style></style>
