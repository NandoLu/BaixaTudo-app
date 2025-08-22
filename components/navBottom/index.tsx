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
        padding: 15,
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: "#262626ff",
    },
    inputGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        gap: '10%',
    },
    btn: {
        backgroundColor: "#067233ff",
        alignItems: "center",
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 15,
        elevation: 4,
        width: '40%',
        height: '100%',
    },
    textBtn: {
        fontSize: 17,
        color: "#fff",
        fontWeight: "bold",
    },
});
