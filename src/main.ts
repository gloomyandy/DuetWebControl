import "@mdi/font/css/materialdesignicons.css";
import Fragment from "vue-fragment";
import Vue from "vue";
import Vuetify from "vuetify";

import i18n from "./i18n";
import store from "./store";
import router from "./routes";

import "./components";
import "./plugins";
import "./registerServiceWorker";

import App from "./App.vue";

// Enable compatibilty mode for array updates for @duet3d/objectmodel library
(window as any)._duetModelSetArray = (array: object, index: string | number, value: any) => Vue.set(array, index, value);

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);			// obsolete when upgraded to Vue 3
Vue.use(Vuetify);

export default new Vue({
	el: "#app",
	i18n,
	render: h => h(App),
	router,
	store,
	vuetify: new Vuetify({
		icons: {
			iconfont: "mdiSvg",
		},
		lang: { t: (key, ...params) => i18n.t(key, params) }
	})
});