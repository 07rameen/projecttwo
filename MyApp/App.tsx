
import React , {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const[name, setName]=useState('Rameen')
  const [session, setSession]=useState({number: 6, title:'state'})
  const [current,currentSession]=useState(true)
  const [counter, setCounter]=useState(0)
  const [five,setFive]=useState(0)

  const onClickHandler =()=>
  {
    setName('Programming with Rameen')
    setSession({number: 7,title:'Style'})
    currentSession(false)
    setCounter(counter+1)
    setFive(five+5)
  }
  return (
  <View style={styles.body}>
    <Text style={styles.text}>{five}</Text>
    <Text style={styles.text}>{name} </Text>
    <Text style={styles.text}>This is session No: {session.number} and about {session.title} </Text>
    <Text style={styles.text}> You clicked : {counter} times </Text>
    <Text style={styles.text}>{current ? 'current session': 'next session'} </Text>
     <Button title='Add' //</View>onPress={()=>{Linking.openURL('https://www.youtube.com/')}}
     onPress={onClickHandler}></Button> 
  </View>

  );
}

const styles = StyleSheet.create({
  body:
  {
    flex: 1,
  backgroundColor: '#000fffff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  text:
  {
   color: '#ffffff',
   fontSize: 20,
   fontStyle: 'italic',
   margin: 10,

  },
});

export default App;