import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      {/* TODO: Remove this after developing auth functionality. 
                Adding temporary so I can route to the tab screens */}
      <Button title='Sign In' onPress={() => router.push("/")} />  
      <Button title='Sign Up' onPress={() => router.push("/sign-up")} />
    </View>
  )
}

export default SignIn