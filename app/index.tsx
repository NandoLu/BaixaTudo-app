import { StyleSheet, Text, View } from "react-native";
import Search from "./components/search";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.title}>Baixa Tudo</Text>
      <Search></Search>
    </View>
  );
}

const styles=StyleSheet.create({
  title:{
        fontSize: 20,
        color: "#099844ff",
        fontWeight: "500",
    },
})