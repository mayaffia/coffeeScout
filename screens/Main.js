import React from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from "../components/Product";
import Footer from "./Footer";

export default function Main({navigation}) {
    return (
        <SafeAreaView>
           <Text style={[styles.text, {top: 76, left: 25}]}> привет, Майя! </Text>
            <Text style={[styles.text, {top: 104,left: 25, opacity: 0.62}]}> что хотите выпить сегодня? </Text>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.input}
                    placeholder="искать"
                />
                <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
            </View>

            <Text style={[styles.header, {top: 202}]}> популярно сейчас</Text>


            <ScrollView horizontal={true} style={styles.scrollCont}>
                <View style={styles.pro}>
                    <Product  />
                    <Product />
                    <Product  />
                    <Product/>
                </View>
            </ScrollView>


            <Text style={[styles.header, {top: 411}]}> кофейни поблизости</Text>
            <Text style={[styles.header, {top: 590}]}> вы недавно заказывали</Text>

            <ScrollView horizontal={true} style={styles.scrollCont2}>
                <View style={styles.pro}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </View>
            </ScrollView>

            <Footer navigation={navigation}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    name: {
        fontSize: 36,
        position: 'absolute',
        top: 84,
        left: 38,
    },
    line: {
        position: 'absolute',
        left: 0,
        right: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    text: {
        fontSize: 20,
        position: 'absolute',
        fontFamily: 'MontserratAlternates',
    },
    out: {
        fontSize: 20,
        color: '#05704A',
        position:'absolute',
        top: 365,
        left: 148,
        fontWeight: 'bold'
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        width: 349,
        height : 48,
        position: 'absolute',
        top: 132,
        left: 22,
    },
    input: {
        flex: 1,
        height: 40,
        fontFamily: 'MontserratAlternates',
    },
    searchIcon: {
        marginLeft: 10,
    },

    header: {
        position: 'absolute',
        left: 25,
        fontFamily: 'MontserratAlternatesSemiBold',
    },
    box: {
        width: 128,
        height: 128,
        backgroundColor: '#169366',
        borderRadius: 6,
        position: 'absolute'
    },
    product: {
        position: 'absolute',
        top: 250,
        left: 50
    },
    scrollCont: {
        top: 200,
        height: 180,
        //backgroundColor: 'blue'
    },
    scrollCont2: {
        top: 400,
        height: 180,
        //backgroundColor: 'green'
    },
    pro : {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 20
    },
    pro2 : {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection : 'row',
        marginLeft: 20,
        left: 0
    }

});
