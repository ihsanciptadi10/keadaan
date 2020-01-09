import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
    padding: 50,
 //  flexDirection: "row"
  },
  parent: {
    flex: 1,
    backgroundColor: "silver",
    borderRadius: 20,
    margin:20,
    flexDirection: "row"
  },
  box3: { backgroundColor: "red" },
  text: { fontSize: 30, color: "white" },
  center: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    flex: 1,
    borderRadius: 10
  }
});

export default s