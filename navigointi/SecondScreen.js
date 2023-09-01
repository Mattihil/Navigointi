import React, {useLayoutEffect, useEffect}from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";

export default function SecondScreen({route, navigation}) {
    useEffect(() => {
        if (route.params?.message){
            alert(route.params.message)
        }
        BackHandler.addEventListener('hardwareBackPress',close);
        return() => {
            BackHandler.removeEventListener('hardwareBackPress',close)
        }
    }, [])

    function close() {
        navigation.goBack(null)
        return true;    
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backroundColor: '#f0f0f0'
            },
        })       
}, [])
}
