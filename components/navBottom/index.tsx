import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function NavBottom() {
    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Baixar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    inputGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        gap: 10,
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
        alignItems: "center",
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 8,
        elevation: 3,
        width: '40%',
        height: '100%',
    },
    textBtn: {
        fontSize: 17,
        color: "#fff",
        fontWeight: "bold",
    },
});
