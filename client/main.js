import Router from '@/router.js'
import $ from '@utils/querySelector.js'
import './style.css'

window.addEventListener('DOMContentLoaded', (e) => {
  new Router($('#app'))
})
