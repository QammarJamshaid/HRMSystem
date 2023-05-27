import { Platform, StyleSheet } from "react-native";

const textStyle = StyleSheet.create({
    h1: {
        fontFamily: Platform.OS == 'ios' ? 'Helvetica Neue' : 'arial',
        fontSize: 24,
        fontWeight: "bold",
    },
    p: {
        fontFamily: Platform.OS == 'ios' ? 'Helvetica Neue' : 'arial',
        fontSize: 13,

    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: Platform.OS == 'ios' ? 'Helvetica Neue' : 'arial',
    },
    bgColor: {
        color: '#fff'
    },
    family: {
        fontFamily: Platform.OS == 'ios' ? 'Helvetica Neue' : 'arial',
    },
    PrimaryColor: {
        color: '#006FA1'
    }

})

const container = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: "#F7F7F8"
    }
})


const space = StyleSheet.create({
    space: {
        marginTop: 12,
    },
    Espace: {
        marginTop: 50,
    },
    Nspace: {
        marginTop: 20,
    },
    spacee: {
        marginTop: 25,
    },
    LF: {
        marginLeft: 12,
        marginRight: 12,

    }
})

export { textStyle, container, space, };
