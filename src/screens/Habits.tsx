import { View, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import BackButton from '../components/BackButton'
import dayjs from 'dayjs'
import { ProgressBar } from '../components/ProgressBar'
import CheckBox from '../components/Checkbox'



interface Params {
  date: string
}


export function Habits() {
  const route = useRoute()
  const { date } = route.params as Params

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMoth = parsedDate.format('DD/MM')

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className='mt-6 text-zinc-400 font-semibold text-base lowercase'>
          {dayOfWeek}
        </Text>

        <Text className=' text-white font-semibold  text-3xl'>
          {dayAndMoth}
        </Text>

        <ProgressBar progress={30} />
        <View className='mt-6'>
          <CheckBox title='Beber 2L de água'
            checked={false}
            />
          <CheckBox title='Caminhar'
            checked={false}
            />
        </View>
      </ScrollView>
    </View>
  )
}