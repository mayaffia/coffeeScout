import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Footer from "./Footer";


export default function Profile({navigation}) {
    return (
        <SafeAreaView>
            <Text style={styles.name}>Майя</Text>
            <View style={[styles.line, {top: 157}]} />
            <Text style={[styles.text, { top: 167}]}> Личные данные </Text>
            <View style={[styles.line, {top: 206}]} />
            <Text style={[styles.text, { top: 219}]}> История заказов </Text>
            <View style={[styles.line, {top: 255}]} />
            <Text style={[styles.text, { top: 271}]}> Настройки </Text>
            <View style={[styles.line, {top: 306}]} />
            <Text style={[styles.text, { top: 323}]}> Управление аккаунтом </Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('main')}>
                <Text style={styles.out}> Выйти </Text>
            </TouchableWithoutFeedback>

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
        fontFamily: 'MontserratAlternatesMedium',
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
        left: 27,
        fontFamily: 'MontserratAlternates',
    },
    out: {
        fontSize: 20,
        color: '#05704A',
        position:'absolute',
        top: 365,
        left: 148,
        fontWeight: 'bold'
    }

});

//export de