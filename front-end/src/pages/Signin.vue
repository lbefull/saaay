<template>
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="~assets/login.svg" class="responsive" alt="login-image" />
    </div>
    <div
      v-bind:class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
      }"
      class="col-12 col-md-6 flex content-center"
    >
      <q-card
        v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
      >
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/avatar.svg" alt="avatar" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h2 q-my-none text-weight-regular"></h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="email"
              label="Email"
              type="email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-input
              filled
              v-model="password"
              label="Password"
              type="password"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <div class="row justify-around">
              <a :href="url">Sign in with Google</a>
              <q-btn label="Sign in" type="submit" color="primary" />
              <q-btn label="Sign up" to="signup" color="warning" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Cookies, useQuasar } from "quasar";
import { api } from "src/boot/axios";
import { AxiosResponse } from "axios";
import { useStore } from "src/store";
import { useRouter } from "vue-router";

export default {
  created() {
    const value = Cookies.get("access_token");
    if (value) {
    }
  },
  setup() {
    const email = ref(null);
    const password = ref(null);
    const name = ref(null);
    const age = ref(null);
    const $store = useStore();
    const $q = useQuasar();
    const router = useRouter();

    const CLIENT_ID =
      "72977505379-1jusaas65jpecfmsh0q7g0a36itss7bm.apps.googleusercontent.com";
    const REDIRECT_URL = "";
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=https://www.googleapis.com/auth/userinfo.email`;

    return {
      email,
      password,
      name,
      age,
      url,
      onReset() {
        email.value = null;
        password.value = null;
      },

      async onSubmit() {
        const user = {
          email: email.value,
          password: password.value,
        };
        $store.dispatch("signin/authenticate", user).catch(console.log);
        /**
           * () => {
      Notify.create({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "Check Your Email or Password",
      });
    }
           */
        // api
        //   .post("/user/login", user)
        //   .then((response) => {
        //     Cookies.set("access_token", response.data.access_token, {
        //       expires: "1d",
        //     });
        //     router.push("main");
        //   })
        //   .catch(() => {
        //     $q.notify({
        //       color: "red-5",
        //       textColor: "white",
        //       icon: "warning",
        //       message: "Check Your Email or Password",
        //     });
        //   });

        // $q.notify({
        //   color: 'green-4',
        //   textColor: 'white',
        //   icon: 'cloud_done',
        //   message: 'Submitted',
        // });
      },
    };
  },
};
</script>
