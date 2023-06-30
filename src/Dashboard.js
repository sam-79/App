import { View, Text, SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styles from './Styles'

const invoiceInfo = [
    {
        number: 10,
        date: 'Mar 02, 2023',
        status: 'Saved',
        info: "Lorem Ipsum",
        amount: '100.0',
        Due: '4 days'
    },
    {
        number: 10,
        date: 'Mar 02, 2023',
        status: 'Saved',
        info: "Lorem Ipsum",
        amount: '100.0',
        Due: '4 days'
    },
    {
        number: 10,
        date: 'Mar 02, 2023',
        status: 'Saved',
        info: "Lorem Ipsum",
        amount: '100.0',
        Due: '4 days'
    }
]

const Dashboard = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                position: 'absolute',
                height: 200,
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#1C85E8',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30
            }}>
                <Image style={{ position: "absolute", top: 0, width: '100%', height: "100%" }} source={require('./Assets/highLight.png')} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 20 }}>
                <Text style={{ opacity: 0 }}>Invoice</Text>

                <Text style={{ fontSize: 16, fontWeight: '800', color: '#FFF', }}>Invoice</Text>
                <Pressable style={{}} >
                    <Image source={require('./Assets/user.png')} />
                </Pressable>
            </View>

            <View style={[styles.scrollView, { backgroundColor: '#FFFFFF', top: 50, bottom: 0, borderRadius: 15 }]} >

                <View style={[styles.rowFlexStart, styles.elevationProp, { padding: 10, marginBottom: 20, }]} >

                    <View style={[{ flexGrow: 2, backgroundColor: "#BFD8FF" }, styles.amountTextBox]}>
                        <Text style={[styles.darkText, { fontWeight: "600" }]}>
                            Amount Raised
                        </Text>
                        <Text style={styles.amountText}>
                            ₹ 10, 000
                        </Text>
                    </View>

                    <View style={[{ flexGrow: 1 }, , styles.amountTextBox]}>
                        <Text style={styles.lightText}>
                            Amount Paid
                        </Text>
                        <Text style={styles.amountText}>
                            ₹ 5, 000
                        </Text>
                    </View>

                </View>

                <View>

                    <View style={[styles.rowFlexStart, { justifyContent: 'space-between' }]}>
                        <Text style={[styles.boldText, styles.lightText]}>Recent</Text>
                        <Pressable>
                            <Text style={[styles.boldText, styles.darkText]}>View all</Text>
                        </Pressable>
                    </View>

                    {
                        invoiceInfo.map((data, index) => {
                            return (
                                <Pressable key={index} style={[styles.borderView, styles.elevationProp, { justifyContent: 'space-between' }]}>
                                    <View style={[styles.rowFlexStart, { justifyContent: 'space-between' }]}>
                                        <Text style={styles.lightText}>No. #{data.number}</Text>
                                        <Text style={styles.lightText}>{data.info}</Text>
                                    </View>
                                    <View style={[styles.rowFlexStart, { justifyContent: 'space-between' }]}>
                                        <Text style={styles.lightText}>{data.date}</Text>
                                        <Text style={styles.darkText}>₹{data.amount}</Text>

                                    </View>
                                    <View style={[styles.rowFlexStart, { justifyContent: 'space-between' }]}>
                                        <View style={styles.invoiceStatusBox}>
                                            <Text style={[styles.lightText, { fontSize: 10 }]}>{data.status}</Text>
                                        </View>
                                        <Text style={styles.lightText}>Due in {data.Due}</Text>
                                    </View>
                                </Pressable>
                            )
                        })
                    }

                </View>
                <Pressable style={[styles.btn, { backgroundColor: '#1C85E8', width: '100%' }]} onPress={() => navigation.navigate("CreateInvoice")}>
                    <Text style={[styles.btnText, { color: '#FFF' }]}>+ Create new invoice</Text>
                </Pressable>

            </View >

            <StatusBar style='auto' />
        </SafeAreaView >
    )
}

export default Dashboard