

import React, {useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import Footer from "./Footer";
import MapViewDirections from "react-native-maps-directions";
import {Polyline} from "react-native-maps";
import * as Location from 'expo-location';

export default function MapScreen({navigation}) {
    const markers = [
        {
            latitude: 	55.697695,
            longitude: 37.497517,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            name : 'first'
        },
        {

        }
    ]




    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{
                latitude: 	55.7522,
                longitude: 37.6156,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation >
                {markers.map((marker, index) => (
                    <Marker key={index} coordinate={marker}>
                        <Callout>
                            <View>
                                <Text>One Price Coffee</Text>
                            </View>
                        </Callout>
                    </Marker>
                    ))}
            </MapView>
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
