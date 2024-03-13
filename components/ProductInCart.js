import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

//<Image source={require('../assets/image.svg')} />
const ProductInCart = () => {
    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };


    return (
        <View style={styles.square}>
            <Image source={require('../assets/coffee.png')} style={styles.image} />
            <Text style={styles.label}>капучино</Text>
            <View style={styles.plusminus}>
                <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
                    <View style={styles.plus}><Text style={styles.buttonText}>-</Text></View>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
                    <View style={styles.plus}><Text style={styles.buttonText}>+</Text></View>
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    square: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        // alignItems : 'center',
        // justifyContent : 'space-between',
        width: 350,
        height: 128,
        backgroundColor: 'white',
        borderRadius: 6,
        // position: 'absolute',
        shadowColor: 'grey',
        shadowOffset: {
            width: 2,
            height: 1,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        marginLeft: 20,
        marginTop: 10,
        width: 100,
        height: 100
    },
    label: {
        //marginHorizontal: 300,
        fontSize: 18,
        color: 'black',
        fontFamily: 'MontserratAlternates',
        marginTop: 20,
        marginLeft: 20
    },

    button: {
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 25,
        //fontWeight: 'bold',
        color: '#169366',
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
        color: '#169366',
        marginTop: 5
    },

    plusminus : {
        flex: 1,
        flexDirection: 'row',
        marginTop: 80,
        right: 100
    },
    plus : {
        width: 30,
        height: 30,
        backgroundColor: '#e3e6e4',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center'
    }

});

export default ProductInCart;
