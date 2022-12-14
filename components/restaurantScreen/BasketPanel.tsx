import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useAppSelector } from '../../state/hooks'
import {
  getItemCount,
  getTotalPrice
} from '../../state/features/carts/cartsSlice'
import { useNavigation } from '@react-navigation/native'

const BasketPanel = () => {
  const nav = useNavigation()
  const itemCount = useAppSelector(getItemCount)
  const { subTotal } = useAppSelector(getTotalPrice)

  return (
    <>
      {itemCount > 0 && (
        <View className="w-full px-6 absolute bottom-10 ">
          <TouchableOpacity
            onPress={() => {
              nav.navigate('BasketScreen' as never)
            }}
            className="flex-row items-center justify-between bg-[#00CCBB] p-4 rounded-lg"
          >
            <Text className="bg-[#01A296] px-2 py-1 text-white font-extrabold text-lg">
              {itemCount}
            </Text>
            <Text className="text-white text-lg font-extrabold">
              View Basket
            </Text>
            <Text className="text-white text-lg font-extrabold">
              <Currency quantity={subTotal} currency="GBP" />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default BasketPanel
