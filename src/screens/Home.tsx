import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, Alert } from 'react-native'
import HabitDay, { DAY_SIZE } from '../components/HabitDay'
import Header from '../components/Header'
import { api } from '../lib/axios'
import { generateDatesFromYearBegining } from '../utils/generated-dates-from-year-beginning'

type Summary = Array<{
  id: string
  date: string
  completed: number
  amount: number
}>


const weekDays = [
  'D',
  'S',
  'T',
  'Q',
  'Q',
  'S',
  'S',
]

const datesFromYearsStart = generateDatesFromYearBegining()
const minimumSumaryDateSizes = 18 * 5
const amoutOfDaysToFill = minimumSumaryDateSizes - datesFromYearsStart.length

const LayoutWeekDays = (weekDay: string, index: number) => {
  return (
    <Text
      key={`${weekDay}-${index}`}
      className='text-zinc-500 text-xl font-bold text-center mx-1'
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
    >
      {weekDay}
    </Text>
  )
}

const LayoutAmoutOfDaysToFill = (weekDay: unknown, i: number) => {
  return (
    <View
      key={i}
      className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40'
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
    />
  )
}

const RenderHabitDay = (date: Date) => {
  const { navigate } = useNavigation()
  return (
    <HabitDay
      key={date.toISOString()}
      onPress={() => navigate('habit', { date: date.toISOString() })}
    />
  )
}



export function Home() {
  const [loading, setloading] = useState<boolean>(true)
  const [summary, setSummary] = useState<Summary>([])

  function fetchData() {


      setloading(true)
      
      api.get('summary')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

    } 
  

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />
      <View className='flex flex-row mt-6 mb-2'>
        {
          weekDays.map((weekDay, index) => LayoutWeekDays(weekDay, index))
        }
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-wrap flex-row  mb-2">

          {
            datesFromYearsStart.map((date) => RenderHabitDay(date))
          }

          {
            amoutOfDaysToFill > 0 && Array
              .from({ length: amoutOfDaysToFill })
              .map((_, i) => LayoutAmoutOfDaysToFill(_, i))
          }
        </View>
      </ScrollView>


    </View>
  )
}
