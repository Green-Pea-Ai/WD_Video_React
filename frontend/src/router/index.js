import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Test from '../views/Test.vue'
import Todo from '../views/Todo.vue'
import FiveEyeGame from '../views/FiveEyeGame.vue'
// Concave -> 식별이 어려워 FiveEyeGame으로 이름바꿈

// For Cafe Board
import BoardListPage from '../views/s3_board_view/BoardListPage.vue'
import BoardRegisterPage from '../views/s3_board_view/BoardRegisterPage.vue'
import BoardModifyPage from '../views/s3_board_view/BoardModifyPage.vue'
import BoardReadPage from '../views/s3_board_view/BoardReadPage.vue'

// For Login System
import LoginPage from '../views/s4_jwt_view/LoginPage.vue'
import AdminSetupPage from '../views/s4_jwt_view/AdminSetupPage.vue'

// Vuetify
import VuetifyBoard from '../views/s5_pagination_view/VuetifyBoard.vue'

// Vuetify Board List
import VuetifyBoardListPage from '../views/s5_pagination_view/VuetifyBoardListPage.vue'

// For Crawling
import CrawlCategory from '../views/s6_crawling_view/CrawlCategory.vue'

// Movie Mania Project
// 회원가입을 한다.
import VideoAdminSignUpPage from '../views/s7_vd_stk_views/VideoAdminSignUpPage.vue'
import VideoStackSignUp from '../views/s7_vd_stk_views/VideoStackSignUp.vue'

// 로그인 한다.
// 로그아웃 한다.
import VideoLoginPage from '../views/s7_vd_stk_views/VideoLoginPage.vue'

// D: 글을 삭제할 수 있다.
// S: 글의 제목, 내용으로 검색할 수 있다.
// P: 페이지네이션
import VideoStackMain from '../views/s7_vd_stk_views/VideoStackMain.vue'
// C: 게시판에 글을 등록할 수 있고,
import VideoRegisterPage from '../views/s7_vd_stk_views/VideoRegisterPage.vue'
// R: 글을 읽을 수 있고
import VideoListPage from '../views/s7_vd_stk_views/VideoListPage.vue'
import VideoReadPage from '../views/s7_vd_stk_views/VideoReadPage.vue'
// U: 글을 수정할 수 있고
import VideoModifyPage from '../views/s7_vd_stk_views/VideoModifyPage.vue'
// 크롤링한 데이터들을 출력하는 페이지이다.

// S: 검색할 수 있다.
// P: 페이지네이션
import VideoFavoritePage from '../views/s7_vd_stk_views/VideoFavoritePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/FiveEyeGame',
    name: 'FiveEyeGame',
    components: {
      default: FiveEyeGame
    }
  },
  {
    path: '/board',
    name: 'BoardListPage',
    components: {
      default: BoardListPage
    }
  },
  {
    path: '/board/create',
    name: 'BoardRegisterPage',
    components: {
      default: BoardRegisterPage
    }
  },
  {
    // boardNo에 :를 넣으면 가변 페이지가 됨
    path: '/board/:boardNo',
    name: 'BoardReadPage',
    components: {
      default: BoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/board/:boardNo/edit',
    name: 'BoardModifyPage',
    components: {
      default: BoardModifyPage
    },
    props: {
      // boolean 모드가 됨
      // 이 옵션을 설정하면 route.params가 컴포넌트의 props에 자동 설정됨
      default: true
    }
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    components: {
      default: LoginPage
    }
  },
  {
    path: '/AdminSetupPage',
    name: 'AdminSetupPage',
    components: {
      default: AdminSetupPage
    }
  },
  {
    path: '/VuetifyBoard',
    name: 'VuetifyBoard',
    components: {
      default: VuetifyBoard
    }
  },
  {
    path: '/VuetifyBoardListPage',
    name: 'VuetifyBoardListPage',
    components: {
      default: VuetifyBoardListPage
    }
  },
  {
    path: '/CrawlCategory',
    name: 'CrawlCategory',
    components: {
      default: CrawlCategory
    }
  },
  {
    // VideoStack Project Main
    path: '/VideoStackMain',
    name: 'VideoStackMain',
    components: {
      default: VideoStackMain
    }
  },
  {
    path: '/VideoStackSignUp',
    name: 'VideoStackSignUp',
    components: {
      default: VideoStackSignUp
    }
  },
  {
    path: '/VideoLoginPage',
    name: 'VideoLoginPage',
    components: {
      default: VideoLoginPage
    }
  },
  {
    path: '/VideoAdminSignUpPage',
    name: 'VideoAdminSignUpPage',
    components: {
      default: VideoAdminSignUpPage
    }
  },
  {
    path: '/video/create',
    name: 'VideoRegisterPage',
    components: {
      default: VideoRegisterPage
    }
  },
  {
    path: '/video/read/:videoNo',
    name: 'VideoReadPage',
    components: {
      default: VideoReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/video/update/:videoNo',
    name: 'VideoModifyPage',
    components: {
      default: VideoModifyPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/video/list',
    name: 'VideoListPage',
    components: {
      default: VideoListPage
    }
  },
  {
    path: '/VideoFavoritePage',
    name: 'VideoFavoritePage',
    components: {
      default: VideoFavoritePage
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
