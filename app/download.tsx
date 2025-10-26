import { StyleSheet, Text, View } from "react-native";
import Search from "../components/search";
import NavBottom from "../components/navBottom";

export default function Download() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Baixa Tudo <Text style={styles.version}>1.0</Text></Text>
        <Search></Search>
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
    width: '80%',
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    color: "#099844ff",
    fontWeight: "bold",
  },
  version: {
    fontSize: 15,
    color: "#a7a7a7ff",
    fontWeight: "bold",
  },
})