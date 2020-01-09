import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import s from './style'


const BoxGroup2 = (props) => {
  console.log('liat props', props.keadaan)
  return (
    <View style={s.parent}>
      <View style={[s.center, { backgroundColor: "blue" }]}>
        <Text style={s.text}>Box 1 </Text>
      </View>
      <View style={[s.center, { backgroundColor: "purple" }]}>
        <Text style={s.text}>Box 2 </Text>
      </View>
      <View style={[s.box3, s.center]}>
        <Text style={s.text}>Box 3 </Text>
      </View>
    </View>
  );
};

export default BoxGroup2

