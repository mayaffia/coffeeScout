import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Product = ({top, left}) => {
    return (
        <View style={[styles.square, {top: top, left: left}]}>

            <Text style={styles.label}>капучино</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    square: {
        marginHorizontal: 10,
        //flex: 1,
       // alignItems : 'center',
       // justifyContent : 'space-between',
        width: 128,
        height: 128,
        backgroundColor: '#169366',
        borderRadius: 6,
       // position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {

    },
    label: {
        marginTop: 100,
        fontSize: 14,
        color: 'white',
        marginLeft: 10,
        fontFamily: 'MontserratAlternates',
    },
});

export default Product;
