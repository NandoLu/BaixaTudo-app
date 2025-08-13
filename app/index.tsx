import { StyleSheet, Text, View } from "react-native";
import Search from "./components/search";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Baixa Tudo</Text>
      <Search></Search>
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
  title: {
    fontSize: 20,
    color: "#099844ff",
    fontWeight: "bold",
  },
})