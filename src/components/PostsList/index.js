import React from "react"

import {
  View,
  StyleSheet,

} from "react-native"

import Post from "../Post/index"

export default (props) => (
  <View>
    {
      // props.posts.map(el => (
      //   <Post/>
      // ))
    }
    <Post/>
    <Post sponsored={true}/>
    <Post album={true}/>
    <Post sponsored={true}/>
    <Post selling={true}/>
  </View>
  
)