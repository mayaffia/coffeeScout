import React from 'react';
import {View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, TouchableWithoutFeedback} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Product from "../components/Product";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Footer({navigation}) {
    return (
        <View style={styles.NavContainer}>
            <View style={styles.NavBar}>

                <Pressable onPress={() => navigation.navigate('main')}>
                    <Icon name="home" size={30} color="#000" style={styles.searchIcon} />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('map')}>
                    <Icon name="map-marker" size={30} color="#000" style={styles.searchIcon} />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('cart')}>
                    <Icon name="shopping-cart" size={30} color="#000" style={styles.searchIcon} />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('profile')}>
                    <Icon name="user" size={30} color="#000" style={styles.searchIcon} />
                </Pressable>



            </View>
            <View style={styles.navText}>
                <Text> главная </Text>
                <Text> карта </Text>
                <Text> корзина </Text>
                <Text> профиль </Text>
            </View>
        </View>
    );
}

/*const Footer = (navigation) => {
    return (
        <View style={styles.NavContainer}>
            <View style={styles.NavBar}>
                <Pressable onPress={() => navigation.navigate('main')}>
                    <Icon name="home" size={30} color="#000" style={styles.searchIcon} />
                </Pressable>

                <Icon name="map-marker" size={30} color="#000" style={styles.searchIcon} />
                <Icon name="shopping-cart" size={30} color="#000" style={styles.searchIcon} />
                <Icon name="user" size={30} color="#000" style={styles.searchIcon} />
            </View>
            <View style={styles.navText}>
                <Text> главная </Text>
                <Text> карта </Text>
                <Text> корзина </Text>
                <Text> профиль </Text>
            </View>
        </View>


    );
};
*/
const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'red',
        position: 'absolute',
       // top: 814,
        width: '100%',
        height: 59,
        alignItems: 'center',
        bottom: 20

    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    NavContainer : {
        position: 'absolute',
         top: 814,
        width: '100%',
        height: 59,
        alignItems: 'center',
        bottom: 20
    },
    NavBar: {
        flexDirection:'row',
        width: '90%',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal:20
    },
    navText: {
        flexDirection:'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
});


