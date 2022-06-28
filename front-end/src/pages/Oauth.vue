<template>
  <button @click="onClick">클릭클릭1</button>
  <a :href="url">구글</a>
</template>

<script>
import { api } from "src/boot/axios";
import router from "src/router";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const CLIENT_ID =
      "72977505379-1jusaas65jpecfmsh0q7g0a36itss7bm.apps.googleusercontent.com";
    const REDIRECT_URL = "";
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=https://www.googleapis.com/auth/userinfo.email`;
    return {
      url,
      onClick() {
        router.push(url);
      },
    };
  },
};
</script>

<style></style>
