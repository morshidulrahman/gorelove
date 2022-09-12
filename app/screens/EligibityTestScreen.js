import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from "react";

const EligibityTestScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <View className="bg-white flex-1 items-center justify-center">
            <Image source={require('../../assets/test.png')} className="w-80 h-80 rounded-full mb-2" />
            <Text className="text-base font-semibold w-[62%] text-center text-gray-700 mb-3">
                if you are not certain about your eligibity to make this donation, take this quick eligibity test.
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("eligibitytest")
                }}
                className="bg-[#F50057] w-[70%] py-3 px-4 rounded-full mt-20">
                <Text className="text-white  text-lg text-center font-bold">
                    Take a test
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default EligibityTestScreen