import { ActivityIndicator, View } from 'react-native'
import {styled} from './styled'

export default function Loading() {
  return (
    <View style={styled.wrapper}>
      <ActivityIndicator color="#7C3AED"/>
    </View>
  )
}