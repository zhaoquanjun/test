//引用模板
import index from '../page/index.vue'

import Hello from '../components/Hello.vue'
import {GroomNav, SongSheet, Item} from '../components'

export default [
  {
    path:'/',
    component:index,
    children:[
      {path: '/GroomNav', component: GroomNav},
      {path: '/SongSheet', component: SongSheet},
    ]
  },
  {
    path:'/Hello',
    component: Hello
  }
]

