// Composables
import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'

import Teorija from '../views/Teorija.vue';
import Uzdevumi from '../views/Uzdevumi.vue';
import Testi from '../views/Testi.vue';
import Profils from '../views/Profils.vue';
import About from '../views/About.vue';
import Classroom from '../views/Classroom.vue';

import ScienceT from '../views/Teorija/Science.vue';
import MathT from '../views/Teorija/Math.vue';
import EngeneeringT from '../views/Teorija/Engineering.vue';
import TechnologyT from '../views/Teorija/Technology.vue';
import HistoryOfEnVue from '@/views/Teorija/HistoryOfEn.vue';
import TypesOfEnVue from '@/views/Teorija/TypesOfEn.vue';
import WhatIsScience from '@/views/Teorija/WhatIsScience.vue';
import ScientificResearch from '@/views/Teorija/ScientificResearch.vue';
import Division from '@/views/Teorija/Division.vue';
import PythagorasTheory from '@/views/Teorija/PythagorasTheory.vue';
import WhatIsTechnology from '@/views/Teorija/WhatIsTechnology.vue';
import TechnologyImpact from '@/views/Teorija/TechnologyImpact.vue';




import ElectricScheme from '../views/Tasks/Electric/Electric_Scheme.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/teorija',
        name: 'teorija',
        component: Teorija,
      },
      {
        path: '/uzdevumi',
        name: 'uzdevumi',
        component: Uzdevumi,
      },
      {
        path: '/testi',
        name: 'testi',
        component: Testi,
      },
      {
        path: '/profils',
        name: 'profils',
        component: Profils,
      },
      {
        path: "/login",
        name: "login",
        component:  login
      },
      {
        path: "/register",
        name: "register",
        component:  register
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/uzdevumi/electricscheme',
        name: 'electricscheme',
        component: ElectricScheme
      },
      { 
        path: '/classroom',
        name: 'classroom',
        component: Classroom
      },
      {
        path: '/scienceteorija',
        name: 'scienceteorija',
        component: ScienceT
      },

      {
        path: '/mathematicsteorija',
        name: 'mathematicsteorija',
        component: MathT
      },
      {
        path: '/engeneeringteorija',
        name: 'engeneeringteorija',
        component: EngeneeringT
      },
      {
        path: '/technologyteorija',
        name: 'technologyteorija',
        component: TechnologyT
      },
      {
        path: '/history-of-engineering',
        name: 'history-of-engineering',
        component: HistoryOfEnVue
      },
      {
        path: '/types-of-engineering',
        name: 'types-of-engingeering',
        component: TypesOfEnVue
      },
      {
        path:'/what-is-science',
        name:'what-is-science',
        component: WhatIsScience
      },
      {
        path:'/scientific-research',
        name:'scientific-research',
        component: ScientificResearch
      },
      {
        path: '/division',
        name: 'division',
        component: Division
      },
      {
        path: '/pythagoras-theory',
        name: 'pythagoras-theory',
        component: PythagorasTheory
      },
      {
        path:'/what-is-technology',
        name: 'what-is-technology',
        component: WhatIsTechnology
      },
      {
        path: '/technology-impact',
        name: 'technology-impact',
        component: TechnologyImpact
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
