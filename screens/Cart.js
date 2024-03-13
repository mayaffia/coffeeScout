import React from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput,
    ScrollView, FlatList
} from 'react-native';
import Footer from "./Footer";
import ProductInCart from "../components/ProductInCart";
import Icon from "react-native-vector-icons/FontAwesome";
import Product from "../components/Product";


export default function Cart({navigation}) {
    return (
        <SafeAreaView>



            <Text style={styles.header}>корзина</Text>
            <View style={styles.container}>
                <ProductInCart />
                <ProductInCart />

            </View>

            <Footer navigation={navigation}/>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', // Это свойство добавляет расстояние между элементами
        alignItems: 'center',
        top: 100
    },
    header: {
        fontSize: 30,
        position: 'absolute',
        top: 70,
        left: 135,
        fontFamily: 'MontserratAlternates',

    },



});

