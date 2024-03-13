import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import {useFonts} from "expo-font";

export default function Registration({navigation}) {
  return (
    <SafeAreaView>
        <Text style={styles.header}>регистрация</Text>

        <View style={[styles.box, {top: 218}]}>
            <TextInput style={styles.input}
                       placeholder="имя"
                       placeholderTextColor="gray"/>
        </View>
        <View style={[styles.box, {top: 292}]}>
            <TextInput style={styles.input}
                       placeholder="e-mail"
                       placeholderTextColor="gray"/>
        </View>
        <View style={[styles.box, {top: 367}]}>
            <TextInput style={styles.input}
                       placeholder="пароль"
                       placeholderTextColor="gray"/>
        </View>


        <View style={styles.button}>
            <Button title={'зарегистрироваться'} color={'white'}
                            onPress={() => navigation.navigate('auth')}/>
        </View>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('auth')}>
                <Text style={styles.text}> уже есть аккаунт? <Text style={{fontFamily: 'MontserratAlternatesSemiBold'}}> войти </Text> </Text>
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        position: 'absolute',
        top: 149,
        left: 25,
        fontFamily: 'MontserratAlternates',
    },
    button: {
        backgroundColor: '#05704A',
        width: 329,
        height: 49,
        position: 'absolute',
        top: 457,
        left: 43,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
    },
    text: {
        position: 'absolute',
        top: 513,
        left: 100,
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

//export default Registration;