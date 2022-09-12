import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppIntroSlider from 'react-native-app-intro-slider';



const slides = [
  {
    key: 1,

    text: 'Have you been feeling well and healthy recently',
    image: require('../../assets/healtyi.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,

    text: 'Do you weight atleast 50 kg',
    image: require('../../assets/weight.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,

    text: 'Are you currently pregnant or breastfeeding',
    image: require('../../assets/pregnant.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,

    text: 'Received as transfusion in the past 3 months',
    image: require('../../assets/donate.jpg'),
    backgroundColor: '#22bcb5',
  }
];


const EligibityTest = () => {
  const [state, setstate] = useState(false)
  const navigation = useNavigation();
  const renderitem = ({ item }) => {
    return (
      <View className="bg-white flex-1 items-center justify-center">
        <Image source={item.image} className="w-80 h-80 rounded-full mb-5" />
        <Text className="text-base font-semibold w-[50%] text-center text-gray-700">{item.text}</Text>
        <View className="flex-row items-center justify-center space-x-4 mt-6">
          <Text className="bg-[#F50057] px-5 py-2 text-white rounded-full text-base">Yes</Text>
          <Text className="bg-[#ed3878fa] px-5 py-2 text-white rounded-full text-base">No</Text>
        </View>
      </View>

    )
  }

  const renderNextButton = () => {
    return (
      <View className='bg-[#F50057] px-5 py-2 rounded-md mt-2' >
        <Text className="text-white capitalize">next</Text>
      </View>
    );
  };

  const showDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("congrate")
        }}
        className="bg-[#F50057] px-4 py-2 rounded-md mt-2">
        <Text className="text-white capitalize">
          done
        </Text>
      </TouchableOpacity>
    );
  };

  const showSkipButton = () => {
    return (
      <View className='bg-[#F50057] px-5 py-2 rounded-md mt-2' >
        <Text className="text-white capitalize">skip</Text>
      </View>
    );
  };

  const showbackboutton = () => {
    return (
      <View className='bg-[#F50057] px-5 py-2 rounded-md mt-2' >
        <Text className="text-white capitalize">Back</Text>
      </View>
    );
  };



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <AppIntroSlider
      renderItem={renderitem}
      data={slides}
      renderSkipButton={showSkipButton}
      showPrevButton={true}
      activeDotStyle={{ backgroundColor: '#F50057' }}
      renderNextButton={renderNextButton}
      showSkipButton={true}
      renderDoneButton={showDoneButton}
      renderPrevButton={showbackboutton}

    />
  )
};

export default EligibityTest;
