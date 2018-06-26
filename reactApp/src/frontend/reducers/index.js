import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import users from './users'
import skills from './skills'
import navMenu from './navMenu'


export default combineReducers({
  routing: routerReducer,
  users,
  skills,
  navMenu
})