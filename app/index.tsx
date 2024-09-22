import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <View className='mt-10'>
        <Text className='text-red-400 text-3xl'>index</Text>
      </View>
    </SafeAreaView>
  )
}

export default index