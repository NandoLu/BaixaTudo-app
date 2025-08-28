import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

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
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    gap: 7,
  },
  textInput: {
    flex:1,
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
    width: 50,
    height: 50,
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
});