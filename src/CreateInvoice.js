import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Pressable,
    Image,
} from 'react-native';
import styles from './Styles';

const CreateInvoice = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={[styles.lightText, styles.boldText]}>Details</Text>
                <View style={[styles.borderView, styles.elevationProp]}>
                    <Text style={[styles.lightText, { fontSize: 13 }]}>No. #10</Text>
                    <Text style={[styles.darkText, styles.boldText, { marginVertical: 0 }]}>Mar 02, 2023</Text>
                    <Text style={[styles.lightText, { fontSize: 13 }]}>Due on Mar 09, 2023</Text>
                </View>

                <Text style={[styles.lightText, styles.boldText]}>Client</Text>
                <Pressable style={[styles.borderView, styles.elevationProp, styles.rowFlexStart]}>
                    <View style={styles.blueCircle}>
                        <Image source={require('./Assets/userIcon.png')} />
                    </View>
                    <Text style={[styles.darkText, styles.boldText, { fontSize: 14 }]}>+ Add client details</Text>
                </Pressable>

                <Text style={[styles.lightText, styles.boldText]}>Items</Text>
                <Pressable style={[styles.borderView, styles.elevationProp, styles.rowFlexStart]}>
                    <View style={styles.blueCircle}>
                        <Image source={require('./Assets/itemsIcon.png')} />
                    </View>
                    <Text style={[styles.darkText, styles.boldText, { fontSize: 14 }]}>+ Add items</Text>
                </Pressable>

                <Text style={[styles.lightText, styles.boldText]}>Total</Text>
                <View style={[styles.borderView, styles.elevationProp]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.lightText]}>Subtotal</Text>
                        <Text style={[styles.lightText]}>₹0.0</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.lightText]}>Tax</Text>
                        <Text style={[styles.lightText]}>₹0.0</Text>
                    </View>
                    <View style={{ borderWidth: 0.2, borderColor: '#EEEEEE' }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.darkText]}>Total</Text>
                        <Text style={[styles.darkText]}>₹0.0</Text>
                    </View>
                </View>

                <Text style={[styles.lightText, styles.boldText]}>Note</Text>
                <Pressable style={[styles.borderView, styles.elevationProp, styles.rowFlexStart]}>
                    <View style={styles.blueCircle}>
                        <Image source={require('./Assets/notesIcon.png')} />
                    </View>
                    <Text style={[styles.darkText, styles.boldText, { fontSize: 14 }]}>+ Add note</Text>
                </Pressable>

                <Text style={[styles.lightText, styles.boldText]}>Signature</Text>
                <Pressable style={[styles.borderView, styles.elevationProp, styles.rowFlexStart]}>
                    <View style={styles.blueCircle}>
                        <Image source={require('./Assets/signatureIcon.png')} />
                    </View>
                    <Text style={[styles.darkText, styles.boldText, { fontSize: 14 }]}>+ Add signature</Text>
                </Pressable>

                <Text style={[styles.lightText, styles.boldText]}>Photo</Text>
                <Pressable style={[styles.borderView, styles.elevationProp, styles.rowFlexStart]}>
                    <View style={styles.blueCircle}>
                        <Image source={require('./Assets/photoIcon.png')} />
                    </View>
                    <Text style={[styles.darkText, styles.boldText, { fontSize: 14 }]}>+ Add photo</Text>
                </Pressable>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <Pressable style={[styles.btn, { backgroundColor: '#1C85E8' }]}>
                        <Text style={[styles.btnText, { color: '#FFF' }]}>Save</Text>
                    </Pressable>
                    <Pressable style={[styles.btn, {}]}>
                        <Text style={[styles.btnText, { color: '#1C85E8' }]}>Share</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateInvoice;