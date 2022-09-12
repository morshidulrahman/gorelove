import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./app/Redux/store";
import Congratulation from "./app/screens/Congratulation";
import EligibityTestScreen from "./app/screens/EligibityTestScreen";
import EligibityTest from "./app/screens/EligibityTest";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="eligibityscreen" component={EligibityTestScreen} />
            <Stack.Screen name="eligibitytest" component={EligibityTest} />
            <Stack.Screen name="congrate" component={Congratulation} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
