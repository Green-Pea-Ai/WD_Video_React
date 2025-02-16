import {
  // mutation: Vuex의 데이터, 즉 state 값을 변경하는 로직들을 의미
  ADD_TODO,
  REMOVE_TODO,
  CLEAR_ALL,
  successGenRandNum,
  failGenRandNum,
  RESTORE,
  EDIT_TODO,
  SET_EDITING_ID,
  RESET_EDITING_ID,
  TOGGLE_TODO_STATUS,
  SET_FILTER,
  FETCH_BOARD_LIST,
  FETCH_BOARD,
  FETCH_VIDEO_LIST,
  FETCH_VIDEO,
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  CRAWL_START,
  FIND_ONE
} from './mutation-types'

import axios from 'axios'
// vuex 개체라 정보를 공유 안해서 import 해줘야 함
import cookies from 'vue-cookies'

export default {
  [CRAWL_START] (state, payload) {
    state.lists = payload
  },
  [FIND_ONE] (state, payload) {
    state.news = payload
  },
  [ADD_TODO] (state, payload) {
    const { content } = payload
    state.todoItems.push({ id: state.nextTodoId, content, done: false })
    state.nextTodoId++
  },
  [REMOVE_TODO] (state, id) {
    const targetIndex = state.todoItems.findIndex(v => v.id === id)
    state.todoItems.splice(targetIndex, 1)
    // state.todoItems.splice({ id: state.nextTodoId, content, done: false })
    // splice(start, count, 대체내용들)
    // 시작위치부터 count 개수만큼 추출해낼건데
    // 세번째 인자인 대체내용들로 해당 위치를 채워넣을 수 있다.
    // splice(1, 3, 'a', 'b', 'c')
  },
  [CLEAR_ALL] (state) {
    console.log('CLEAR_ALL')
    state.todoItems = []
  },
  [successGenRandNum] (state, payload) {
    console.log('payload = ' + payload)
    state.random = payload
  },
  [failGenRandNum] () {
    console.log('Error')
  },
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  [RESTORE] (state, { todoItems, nextTodoId }) {
    state.todoItems = todoItems
    state.nextTodoId = nextTodoId
  },
  [EDIT_TODO] (state, payload) {
    const { id, content } = payload
    const targetIndex = state.todoItems.findIndex(v => v.id === id)
    const targetTodoItem = state.todoItems[targetIndex]
    state.todoItems.splice(targetIndex, 1, { ...targetTodoItem, content })
    // JavaScript에서 ...은 배열등에서 값을 가져올 때
    // 아직 처리하지 않은게 있다면 남은 모든 것을 가져온다.
  },
  [SET_EDITING_ID] (state, id) {
    state.editingId = id
  },
  [RESET_EDITING_ID] (state) {
    state.editingId = 0
  },
  [TOGGLE_TODO_STATUS] (state, id) {
    const filtered = state.todoItems.filter(todoItem => {
      return todoItem.id === id
    })

    filtered.forEach(todoItem => {
      todoItem.done = !todoItem.done
    })
  },
  [SET_FILTER] (state, filter) {
    state.filter = filter
  },
  [FETCH_BOARD_LIST] (state, boards) {
    state.boards = boards
  },
  [FETCH_BOARD] (state, board) {
    state.board = board
  },
  [FETCH_VIDEO_LIST] (state, videos) {
    state.videos = videos
  },
  [FETCH_VIDEO] (state, video) {
    state.video = video
  },
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken

      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      console.log('axios Auth: ' + axios.defaults.headers.common.Authorization)

      cookies.set('accessToken', accessToken, '1h')
    }
  },
  [SET_MY_INFO] (state, myinfo) {
    if (myinfo) {
      state.myinfo = myinfo
    }
  },
  [DESTROY_ACCESS_TOKEN] (state) {
    state.accessToken = ''
    delete axios.defaults.headers.common.Authorization
    cookies.remove('accessToken')
  },
  [DESTROY_MY_INFO] (state) {
    state.myinfo = null
  }
}
