import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from "react";

const Congratulation = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <View className="bg-white flex-1 items-center justify-center">
            <Image source={require('../../assets/congrate.png')} className="w-80 h-80 rounded-full mb-5" />
            <Text className="text-base font-bold w-[50%] text-center text-gray-700 mb-1">
                Congratulation!!!
            </Text>
            <Text className="text-base font-semibold w-[50%] text-center text-gray-700">
                You are eligable to donate blood
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("eligibityscreen")
                }}
                className="bg-[#F50057] w-[70%] py-3 px-4 rounded-full mt-20">
                <Text className="text-white capitalize text-lg text-center font-bold">
                    continue
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Congratulation