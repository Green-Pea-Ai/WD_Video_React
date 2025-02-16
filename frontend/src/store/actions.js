import {
  successGenRandNum,
  failGenRandNum,
  ADD_TODO,
  REMOVE_TODO,
  CLEAR_ALL,
  RESTORE,
  EDIT_TODO,
  TOGGLE_TODO_STATUS,
  /* Board Exam */
  FETCH_BOARD_LIST,
  FETCH_BOARD,
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  /* eslint-disable no-unused-vars */
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  /* Crawl */
  FIND_ONE,
  FIND_HOME,
  CRAWL_START,
  /* WD Video Stack */
  FETCH_VIDEO_LIST,
  FETCH_VIDEO
} from './mutation-types'

import axios from 'axios'
import router from '../router'

export default {
  // 양이 많을 수 있어서 crawlFind 비동기처리 해줌
  async crawlFind ({ commit }, category) {
    axios.get('http://localhost:7777/' + `${category}`)
      .then(({ data }) => {
        commit('CRAWL_START', data)
        if (window.location.pathname !== '/CrawlCategory') {
          router.push('/CrawlCategory')
        }
      })
  },
  async crawlFindOne ({ commit }, newsNo) {
    axios.get('http://localhost:7777/news/' + `${newsNo}`)
      .then(({ data }) => {
        console.log('/news/newsNo res: ' + data)
        commit('FIND_ONE', data)
        router.push('/CrawlCategory/news')
      })
  },
  fetchBoardList ({ commit }) {
    return axios.get('http://localhost:7777/boards')
      .then(res => {
        commit(FETCH_BOARD_LIST, res.data)
      })
  },
  fetchBoard ({ commit }, boardNo) {
    console.log('fetchBoard ' + commit + ', boardNo = ' + boardNo)
    return axios.get(`http://localhost:7777/boards/${boardNo}`)
      .then(res => {
        console.log('fetchBoard - res: ' + res.data)
        commit(FETCH_BOARD, res.data)
      })
  },
  fetchVideoList ({ commit }) {
    return axios.get('http://localhost:7777/videos')
      .then(res => {
        commit(FETCH_VIDEO_LIST, res.data)
      })
  },
  fetchVideo ({ commit }, videoNo) {
    console.log('fetchVideo ' + commit + ', videoNo = ' + videoNo)
    return axios.get(`http://localhost:7777/videos/${videoNo}`)
      .then(res => {
        console.log('fetchVideo - res: ' + res.data)
        commit(FETCH_VIDEO, res.data)
      })
  },
  editTodo ({ commit }, payload) {
    commit(EDIT_TODO, payload)
  },
  toggleTodoStatus ({ commit }, id) {
    commit(TOGGLE_TODO_STATUS, id)
  },
  save ({ state }) {
    const data = {
      todoItems: state.todoItems,
      nextTodoId: state.nextTodoId
    }
    localStorage.setItem('todo-app-data', JSON.stringify(data))
  },
  restore ({ commit }) {
    const data = localStorage.getItem('todo-app-data')

    if (data) {
      console.log('data: ' + JSON.parse(data))
      commit(RESTORE, JSON.parse(data))
    }
  },
  generateRandomNumber ({ commit }) {
    console.log(commit)

    axios.get('http://localhost:7777/random')
      .then((res) => {
        commit(successGenRandNum,
          parseInt(res.data.randNumber))
      })
      .catch((res) => {
        commit(failGenRandNum, res)
      })
  },
  addTodo (context, payload) {
    context.commit(ADD_TODO, payload)
  },
  removeTodo (context, payload) {
    context.commit(REMOVE_TODO, payload)
  },
  clearAll (context, payload) {
    context.commit(CLEAR_ALL)
  },
  login ({ commit }, payload) {
    console.log('actions login')
    return axios.post(`http://localhost:7777/api/authenticate?username=${payload.userid}&password=${payload.password}`, {
      username: payload.userid,
      password: payload.password
    }).then(res => {
      console.log('actions after post')
      const { authorization } = res.headers
      const accessToken = authorization.substring(7)

      commit(SET_ACCESS_TOKEN, accessToken)

      return axios.get('http://localhost:7777/users/myinfo')
    }).then(res => {
      console.log('After Get Auth Info')
      commit(SET_MY_INFO, res.data)
    })
  },
  loginByToken ({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token)
    return axios.get('http://localhost:7777/users/myinfo')
      .then(res => {
        commit(SET_MY_INFO, res.data)
      })
  },
  logout ({ commit }) {
    commit(DESTROY_MY_INFO)
    commit(DESTROY_ACCESS_TOKEN)
  }
}

// actions: {
/* generateRandomNumber ({ commit }) {
    console.log(commit)

    axios.get('http://localhost:7777/random')
      .then((res) => {
        commit('successGenRandNum',
          parseInt(res.data.randNumber))
      })
      .catch((res) => {
        commit('failGenRandNum', res)
      })
  },
  addTodo (context, payload) {
    context.commit('ADD_TODO', payload)
  },
  removeTodo (context, payload) {
    context.commit('REMOVE_TODO', payload)
  },
  clearAll (context, payload) {
    context.commit('CLEAR_ALL')
  } */
// }
