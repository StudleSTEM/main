// Composables
import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login.vue";
import register from "../views/register.vue";

import Teorija from "../views/Teorija.vue";
import Uzdevumi from "../views/Uzdevumi.vue";
import Testi from "../views/Testi.vue";
import Profils from "../views/Profils.vue";
import About from "../views/About.vue";
import Classroom from "../views/Classroom.vue";

import ScienceT from "../views/Teorija/Science.vue";
import MathT from "../views/Teorija/Math.vue";
import EngeneeringT from "../views/Teorija/Engineering.vue";
import TechnologyT from "../views/Teorija/Technology.vue";
import HistoryOfEnVue from "@/views/Teorija/HistoryOfEn.vue";
import TypesOfEnVue from "@/views/Teorija/TypesOfEn.vue";
import WhatIsScience from "@/views/Teorija/WhatIsScience.vue";
import ScientificResearch from "@/views/Teorija/ScientificResearch.vue";
import Division from "@/views/Teorija/Division.vue";
import PythagorasTheory from "@/views/Teorija/PythagorasTheory.vue";
import WhatIsTechnology from "@/views/Teorija/WhatIsTechnology.vue";
import TechnologyImpact from "@/views/Teorija/TechnologyImpact.vue";
import RoomView from "@/views/RoomView.vue";
import UserView from "@/views/UserView.vue";

import ElectricScheme from "../views/Tasks/Electric/Electric_Scheme.vue";
import SnakeGame from "../views/Tasks/Electric/SnakeGame.vue";
import { REFRESH, GET_ME } from "../graphql/user";
import { provideApolloClient, useMutation } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

async function isLoggedIn() {
  const cache = new InMemoryCache();
  const apolloClient = new ApolloClient({
    cache,
    uri: "http://localhost:8000",
  });
  provideApolloClient(apolloClient);

  const refreshToken = localStorage.getItem("refresh_token");
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    const { mutate: me } = useMutation(GET_ME);
    try {
      await me({ accessToken });
      console.log("1 true");
      return true;
    } catch (error) {
      console.log("1 false");
    }
  }

  if (refreshToken) {
    const { mutate: refresh } = useMutation(REFRESH);
    try {
      const result = await refresh({ refreshToken });
      localStorage.setItem("access_token", result?.data.refresh.refreshToken);
      localStorage.setItem("refresh_token", result?.data.refresh.refreshToken);
      console.log("2 true");
      return true;
    } catch (error) {
      console.log("2 false");
      return false;
    }
  }
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");

  console.log("bruh");

  return false;
}

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/teorija",
        name: "teorija",
        component: Teorija,
        beforeEnter: async (to: any, from: any, next: any) => {
          if (await isLoggedIn()) {
            next();
          } else {
            next("/login");
          }
        },
      },
      {
        path: "/room/:roomid",
        name: "room",
        component: RoomView,
        beforeEnter: async (to: any, from: any, next: any) => {
          if (await isLoggedIn()) {
            next();
          } else {
            next("/login");
          }
        },
      },
      {
        path: "/user/:userid",
        name: "user",
        component: UserView,
      },
      {
        path: "/uzdevumi",
        name: "uzdevumi",
        component: Uzdevumi,
      },
      {
        path: "/testi",
        name: "testi",
        component: Testi,
      },
      {
        path: "/profile",
        name: "profile",
        component: Profils,
        beforeEnter: async (to: any, from: any, next: any) => {
          if (await isLoggedIn()) {
            console.log(1);
            next();
          } else {
            console.log(2);
            next("/login");
          }
        },
      },
      {
        path: "/login",
        name: "login",
        component: login,
        beforeEnter: async (to: any, from: any, next: any) => {
          if (
            (await !isLoggedIn()) || !localStorage.getItem("access_token")
              ? true
              : false
          ) {
            console.log(1);
            next();
          } else {
            console.log(2);
            next("/");
          }
        },
      },
      {
        path: "/register",
        name: "register",
        component: register,
        beforeEnter: async (to: any, from: any, next: any) => {
          if (await !isLoggedIn()) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/uzdevumi/electricscheme",
        name: "electricscheme",
        component: ElectricScheme,
      },
      {
        path: "/uzdevumi/electricscheme/reward",
        name: "snakegame",
        component: SnakeGame,
      },
      {
        path: "/classroom",
        name: "classroom",
        component: Classroom,
      },
      {
        path: "/scienceteorija",
        name: "scienceteorija",
        component: ScienceT,
      },

      {
        path: "/mathematicsteorija",
        name: "mathematicsteorija",
        component: MathT,
      },
      {
        path: "/engeneeringteorija",
        name: "engeneeringteorija",
        component: EngeneeringT,
      },
      {
        path: "/technologyteorija",
        name: "technologyteorija",
        component: TechnologyT,
      },
      {
        path: "/history-of-engineering",
        name: "history-of-engineering",
        component: HistoryOfEnVue,
      },
      {
        path: "/types-of-engineering",
        name: "types-of-engingeering",
        component: TypesOfEnVue,
      },
      {
        path: "/what-is-science",
        name: "what-is-science",
        component: WhatIsScience,
      },
      {
        path: "/scientific-research",
        name: "scientific-research",
        component: ScientificResearch,
      },
      {
        path: "/division",
        name: "division",
        component: Division,
      },
      {
        path: "/pythagoras-theory",
        name: "pythagoras-theory",
        component: PythagorasTheory,
      },
      {
        path: "/what-is-technology",
        name: "what-is-technology",
        component: WhatIsTechnology,
      },
      {
        path: "/technology-impact",
        name: "technology-impact",
        component: TechnologyImpact,
      },
      {
        path: "*",
        redirect: "/",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
