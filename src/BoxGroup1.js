import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import s from "./style";

export default class BoxGroup1 extends Component {
  render() {
    const warnaKeadaan =
      this.props.keadaan === "galau uy" ? "black" : "darkcyan";
    console.log("liat props", this.props.keadaan);
    return (
      <View style={s.parent}>
        <View style={[s.center, { backgroundColor: warnaKeadaan }]}>
          <Text style={s.text}>{this.props.keadaan}</Text>
        </View>
        <View style={[s.center, { backgroundColor: "yellow" }]}>
          <Text style={s.text}>Box 2 </Text>
        </View>
        <View style={[s.box3, s.center]}>
          <Text style={s.text}>Box 3 </Text>
        </View>
      </View>
    );
  }
}
