
import React , {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack= createStackNavigator();

function ScreenA({navigation}: {navigation: any})
{
  const onPressHandler=()=>
  {
    //navigation.navigate('Root', { screen: 'Settings' });
    navigation.navigate('ScreenB');
    //navigation.goback //navigation.replace

  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A 
      </Text>
      <Pressable 
      onPress={onPressHandler}
      style={({pressed})=>({backgroundColor: pressed? '#ddd':'#0f0'})}>
          <Text style={styles.text}>
          Go to screen B
        </Text>
      </Pressable>
    </View>
  )

}

function ScreenB({navigation}: {navigation: any}) {

  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Go Back to Screen A
        </Text>
      </Pressable>
    </View>
  )
}

function App()
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          //options={{header:()=>null}}
          />
          <Stack.Screen
           name="ScreenB"
           component={ScreenB}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles=StyleSheet.create({
body:
{
flex:1,
justifyContent: 'center',
alignItems: 'center',
},
text:
{
  fontSize:40,
  fontWeight:'bold',
  margin: 10,
}

})

export default App;