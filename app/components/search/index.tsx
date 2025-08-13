import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Search() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.textSearch}>Pesquise</Text> */}

            <View style={styles.containerTextInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Cole o link..."
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Baixar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        gap: 6,
        width: '60%',
        // backgroundColor: '#a8b8b8ff'
    },
    containerTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        width: '100%',
    },
    // textSearch:{
    //     fontSize: 15,
    //     color: "#3e4340ff",
    //     fontWeight: "400",
    // },
    textInput: {
        paddingHorizontal: 5,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1.2,
        borderRadius: 3,
        color: "#393939",
        borderColor: "#393939",
        marginVertical: 10,
    },
    btn: {
        backgroundColor: "#099844ff",
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1.2,
        borderRadius: 3,
        borderColor: "#393939",
        marginVertical: 10,
    },
    textBtn: {
        fontSize: 14,
        color: "#fff",
    },
})