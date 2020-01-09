import { AppRegistry } from "react-native";
import App from "./App";
import BoxGroup1 from './BoxGroup1'

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
