/* eslint-disable  */
import { useStore } from "./index";
import axios from "@/Utils/axios.config.js";
import router from "@/router";

const { saveUser, loading, setLoading } = useStore();

export const useRegister = (credentials) => {
  setLoading(true);
  axios
    .post("/account/register/", credentials)
    .then((response) => {
      console.log(response);
      setLoading(false);

      saveUser(response.data);
      router.push("/admin/overview");
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
};
export const useLogin = (credentials) => {
      setLoading(true);
    console.log(loading);
 

  axios
    .post("/account/auth/", credentials)
    .then((response) => {
      setLoading(false);
      saveUser(response.data);
      router.push("/admin/overview");
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
};
