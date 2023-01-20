import { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import BackButton from '../components/BackButton'
import CheckBox from '../components/Checkbox'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

const avaliableWeekDays = [
  'Domingo',
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]



export function NewHabit() {

  const [weekDays, SetWeekDays] = useState<number[]>([])

  const RenderCheckBox = (weekday: string, index: number) => {
    return (
      <CheckBox
        title={weekday}
        key={`${weekday}-${index}`}
        checked={weekDays.includes(index)}
        onPress={() => HandleToogleWeekDays(index)}
      />
    )
  }

  function HandleToogleWeekDays(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      SetWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      SetWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600"
          placeholder='Exercicios, dormir bem, etc...'
          placeholderTextColor={colors.zinc[500]}
        />

        <Text className="mt-4  mb-3 text-white font-semibold text-base">
          Qual a recorrência?
        </Text>


        {
          avaliableWeekDays.map((weekDay, index) => RenderCheckBox(weekDay, index))
        }

        <TouchableOpacity
          className='w-full h-14 flex-row items-center justify-center bg-green-600  rounded-md mt-6'
          activeOpacity={0.7}
        >
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />
          <Text className='font-semibold text-base text-white ml-2'>
            Confirmar
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}