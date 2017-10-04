import Vue from 'vue'
import Moment from 'moment'
import Currency from './libraries/currency'

Vue.prototype.$moment = Vue.moment = Moment
Vue.prototype.$currency = Vue.currency = Currency
Vue.filter('currency', Currency)

// include vue-custom-element plugin to Vue
import VueCustomElement from 'vue-custom-element'
Vue.use(VueCustomElement)

// import and register your component(s)
import HivemindContent from './components/Content.vue'
import HivemindSummary from './components/Summary.vue'
import HivemindTrend from './components/Trend.vue'
Vue.customElement('hivemind-content', HivemindContent)
Vue.customElement('hivemind-summary', HivemindSummary)
Vue.customElement('hivemind-trend', HivemindTrend)