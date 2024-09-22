import { View, SafeAreaView } from 'react-native'
import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'

const Home = () => {
  return (
    <SafeAreaView>
      <View className='mt-10 flex flex-col gap-4'>
        <CustomButton
          color='primary'
          onPress={() => {
            router.push("/products")
          }}
        >
          Productos
        </CustomButton>
        <CustomButton
          color='secondary'
          onPress={() => {
            router.push("/settings")
          }}
        >
          Ajustes
        </CustomButton>
      </View>
    </SafeAreaView>
  )
}

export default Home