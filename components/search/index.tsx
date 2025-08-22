import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.textInput}
          placeholder="Cole o link..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Baixar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    gap: 5,
  },
  textInput: {
    width: '70%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    color: "#333",
  },
  btn: {
    backgroundColor: "#099844",
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 3,
    width: '20%',
  },
  textBtn: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
  },
});
