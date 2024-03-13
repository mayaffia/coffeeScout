import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import {useFonts} from "expo-font";
import * as Font from 'expo-font';

/*

const customFonts = {
    fontFamily: require('../assets/fonts/MontserratAlternates-Black.ttf'),
};
addCustomFonts(customFonts);*/


export default function Auth({navigation}) {

    return (
        <SafeAreaView>
            <Text style={styles.header}>войти</Text>

            <View style={[styles.box, {top: 218}]}>
                <TextInput style={styles.input}
                           placeholder="e-mail"
                           placeholderTextColor="gray"/>
            </View>

            <View style={[styles.box, {top: 292}]}>
                <TextInput style={styles.input}
                           placeholder="пароль"
                           placeholderTextColor="gray"/>
            </View>


            <View style={styles.button}>
                <Button title={'войти'} color={'white'}
                        onPress={() => navigation.navigate('profile')}
                />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('registration')}>
                <Text style={styles.text}> нет аккаунта?<Text style={{fontFamily: 'MontserratAlternatesSemiBold'}}> зарегистрироваться</Text> </Text>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

//<Text style={styles.text}> нет аккаунта?  <TouchableWithoutFeedback onPress={() => navigation.navigate('registration')}><Text style={{fontWeight:'bold'}}> зарегистрироваться</Text> </TouchableWithoutFeedback></Text>

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        position: 'absolute',
        top: 149,
        left: 40,
        fontFamily: 'MontserratAlternates',
    },
    button: {
        backgroundColor: '#05704A',
        width: 329,
        height: 49,
        position: 'absolute',
        top: 373,
        left: 43,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
    },
    text: {
        position: 'absolute',
        top: 441,
        left: 55,
        fontFamily: 'MontserratAlternates',
    },
    input: {
        height: 55,
        width: 350,
        borderWidth: 1,
        paddingLeft: 10,
        fontFamily: 'MontserratAlternates',
    },

    box : {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
    }
});
