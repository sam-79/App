import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: StatusBar.currentHeight
    },
    scrollView: {
        marginHorizontal: 25,
    },
    borderView: {
        // width: '100%',
        marginVertical: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: '#E3F2FF',
        borderRadius: 15,

    },
    rowFlexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    elevationProp: {
        elevation: 20,
        shadowColor: '#E3F2FF',
    },
    lightText: {
        color: '#8F93A4',
        marginVertical: 5
    },
    darkText: {
        color: '#374767',
        marginVertical: 5
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    blueCircle: {
        backgroundColor: '#ECF3FF',
        borderRadius: 100,
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 15,
        borderColor: '#1C85E8',
        borderWidth: 1,
    },
    btnText: {
        fontSize: 17,
        fontWeight: '800'
    },

    invoiceListContainer: {
        marginTop: 1000
    },
    invoiceStatusBox: {
        borderRadius: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E3F2FF',
        borderRadius: 5,
    },
    amountTextBox: {
        borderRadius: 15,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    amountText: {
        fontSize: 25,
        color: '#374767',
        fontWeight: '800'
    }


});

export default styles;