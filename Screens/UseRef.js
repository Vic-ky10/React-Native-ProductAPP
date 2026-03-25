
import {  Button, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextInput } from 'react-native-web'

const UseRef = () => {
    const [value, setValue] = useState(null)
    const inputRef = useRef(null)
    const focusInput = () => {
        inputRef.current.focus();
    }

   
  return (
    <View>
    <TextInput 
      ref={inputRef}
      placeholder='Enter Name'
      style={{borderWidth:1 , padding:10}}
      onChangeText={(text) => setValue(text) }
    />
    <Button 
    title='Focus Input' onPress={focusInput}/>
    <Text>{value}</Text>
    </View>
  )
}

export default UseRef

