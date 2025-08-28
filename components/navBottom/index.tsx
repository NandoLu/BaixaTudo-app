import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from 'expo-router';

export default function NavBottom() {
    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <TouchableOpacity style={styles.btn}
                onPress={() => router.replace("/")}
                >
                    <Text style={styles.textBtn}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                    onPress={() => router.replace("/download")}
                >
                    <Image
                        source={require('@/assets/images/logo.png')}
                        style={styles.image}
                    />
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
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
});
