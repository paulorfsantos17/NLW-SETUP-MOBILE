import { TouchableOpacity, Dimensions, TouchableOpacityProps } from 'react-native'
import React from 'react'

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =  (Dimensions.get('window').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps extends TouchableOpacityProps {

}

export default function HabitDay({...rest}: HabitDayProps) {

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800'
      style={{ width: DAY_SIZE, height: DAY_SIZE }} 
      {...rest}
    />


  )
}