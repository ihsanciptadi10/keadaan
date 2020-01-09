import React, { Component } from "react";
import { View, Button } from "react-native";
import BoxGroup1 from "./BoxGroup1";
import BoxGroup2 from "./BoxGroup2";
import s from "./style";

export default class App extends Component {
  state = { condisi: "galau uy" };

  onPress = () => {
    if (this.state.condisi === "galau uy") {
      this.setState({ condisi: "teu galau" });
    } else {
      this.setState({ condisi: "galau uy" });
    }
  };

  render() {
    return (
      <View style={s.root}>
        <BoxGroup1 keadaan={this.state.condisi} />
        <BoxGroup2 />
        <Button title="Rubah Keadaan" onPress={this.onPress} />
      </View>
    );
  }
}
