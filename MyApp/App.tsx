
import React , {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

  const [name,setname]=useState('');

  
  return ( 
    <View style={styles.body}>
      <Text style={styles.text}> 
      Please Write Your Name:
       </Text>
      <TextInput style={styles.input} placeholder='e.g Rameen'
      onChangeText={(value)=>setname(value)}
      // keyboardType='default'
      // maxLength={3}
      // editable={false}
      // secureTextEntry
      
      >

      </TextInput>
      <Text style={styles.text}> 
      Your name is : {name}
       </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  body:
  {
  flex:1,
  alignItems:'center',
  backgroundColor: '#ffffff',
  },
  input:
  {
    width:200,
    borderWidth:1,
    borderColor:'#555',
    borderRadius:5,
    alignItems:'center',
    fontSize: 20,
  },
  text:
  {
   color: '#000',
   margin: 10,
   fontSize: 20,
   fontStyle: 'italic',
  },
});

export default App;