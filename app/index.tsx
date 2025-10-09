import { StyleSheet, View } from "react-native";
import NavBottom from "../components/navBottom";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
      </View>
      <NavBottom></NavBottom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#1d1d1dff'
  },
  body: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontSize: 45,
    color: "#099844ff",
    fontWeight: "bold",
  },
})