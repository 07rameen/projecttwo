
import React , {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Linking,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
  const[submitted,SetSubmitted]=useState(false);
  const onPresshandler=()=>
  { 
    SetSubmitted(!submitted);

  }

  
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
      {/* <Button title={submitted? 'Clear':'Submit'}
      onPress={onPresshandler}
      disabled={submitted}
        
      /> */}
      {/* TouchableOpacity , TouchableHighlight , Touchable without feeback */}
      {/* <TouchableWithoutFeedback
      style={styles.button}
      onPress={onPresshandler}
      // activeOpacity={0.9} 
      // underlayColor='#ddd'>
      >
      <Text style={styles.text}> 
      {submitted? 'Clear':'Submit'}</Text>
      </TouchableWithoutFeedback> */}
<Pressable
        onPress={onPresshandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{color:'#00f'}}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >

      <Text style={styles.text}> 
      {submitted? 'Clear':'Submit'}</Text>

      </Pressable>
      
      
      {submitted?
       <Text style={styles.text}> 
      You are registered as : {name}
       </Text>
       :
       null
      }
      
     
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
  button:
  {
    width:150,
    height:50,
    backgroundColor:'#00ff00',
    alignItems:'center'
  }
});

export default App;