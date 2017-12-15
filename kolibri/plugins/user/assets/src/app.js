import KolibriApp from 'kolibri_app';
import RootVue from './views';
import { showSignIn, showSignUp, showProfile } from './state/actions';
import initialState from './state/initialState';
import mutations from './state/mutations';
import { PageNames } from './constants';
import store from 'kolibri.coreVue.vuex.store';
import { getFacilityConfig } from 'kolibri.coreVue.vuex.actions';
import { isUserLoggedIn } from 'kolibri.coreVue.vuex.getters';
import router from 'kolibri.coreVue.router';

const routes = [
  {
    name: PageNames.ROOT,
    path: '/',
    handler: () => {
      if (isUserLoggedIn(store.state)) {
        router.getInstance().replace({
          name: PageNames.PROFILE,
        });
        return;
      }
      router.getInstance().replace({
        name: PageNames.SIGN_IN,
      });
    },
  },
  {
    name: PageNames.SIGN_IN,
    path: '/signin',
    handler: () => {
      if (isUserLoggedIn(store.state)) {
        router.getInstance().replace({
          name: PageNames.PROFILE,
        });
      } else {
        showSignIn(store);
      }
    },
  },
  {
    name: PageNames.SIGN_UP,
    path: '/create_account',
    handler: () => {
      if (isUserLoggedIn(store.state)) {
        router.getInstance().replace({
          name: PageNames.PROFILE,
        });
        return Promise.resolve();
      } else {
        return showSignUp(store);
      }
    },
  },
  {
    name: PageNames.PROFILE,
    path: '/profile',
    handler: () => {
      if (!isUserLoggedIn(store.state)) {
        router.getInstance().replace({
          name: PageNames.SIGN_IN,
        });
      } else {
        showProfile(store);
      }
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

class UserModule extends KolibriApp {
  get stateSetters() {
    return [getFacilityConfig];
  }
  get routes() {
    return routes;
  }
  get RootVue() {
    return RootVue;
  }
  get initialState() {
    return initialState;
  }
  get mutations() {
    return mutations;
  }
}

export default new UserModule();
