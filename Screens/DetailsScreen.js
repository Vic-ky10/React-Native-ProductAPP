import { Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({route}) => {

  const {product} = route.params
   return (
    <View style={{padding:30}}>
      <Text  style={{fontSize:35}}>{product.name}</Text>
      <Text style={{fontSize:25}}>{product.price}</Text>
    </View>
  )
}

export default DetailsScreen

