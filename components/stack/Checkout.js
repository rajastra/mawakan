import { View, Text, Image } from 'react-native'
import React from 'react'

const Checkout = () => {
  return (
    <View>
      <Text>Checkout</Text>
      <Image source={require('../img/qr-dana.jpeg')} />
    </View>
  )
}

export default Checkout