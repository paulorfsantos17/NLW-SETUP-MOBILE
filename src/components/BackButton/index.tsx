import {  TouchableOpacity, Text, TextInput } from "react-native";
import {Feather} from '@expo/vector-icons'
import { zinc } from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const  {goBack} = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={goBack}
    >
      <Feather
        name="arrow-left"
        size={32}
        color={zinc[400]}
      />
    </TouchableOpacity>
  )
}