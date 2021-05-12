import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default (vm) => {
  return {
    namespaced: true,
    state,
    mutations,
    actions: actions(vm),
    getters,
  };
};
