
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
    <View style={styles.row}>
      <View style={styles.view1}>
      <Text style={styles.text}> 1 </Text>
      </View> 
      
      <View style={styles.view2}>
      <Text style={styles.text}> 2 </Text>
      </View> 
      <View style={styles.view3}>
      <Text style={styles.text}> 3 </Text>
    </View>
    </View>

    <View style={styles.row}>
      <View style={styles.view4}>
        <Text style={styles.text}> 4 </Text>
    </View>
    </View>

    <View style={styles.row}>
      <View style={styles.view5}>
        <Text style={styles.text}> 5 </Text>
    </View>
    </View>

    <View style={styles.biggerarea}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>





  </View>

  );
}

const styles = StyleSheet.create({
  body:
  {
  flex:1,
  flexDirection: 'column',
  backgroundColor: '#000fffff',
  alignItems: 'flex-start',
  justifyContent: 'center',
  },
  row:
  {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1:
  {
    flex:1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  view2:
  {
    flex:2,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  view3:
  {
    flex:3,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center'

  },
   mainView:
  {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center'

  },
   view4:
  {
    width:400,
    height:100,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center'

  },
   view5:
  {
    width:400,
    height:100,
    backgroundColor: '#ff0f00',
    alignItems: 'center',
    justifyContent: 'center'

  },

  biggerarea: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view6:{
     flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  view7:{
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:
  {
   color: '#000',
   fontSize: 20,
   fontStyle: 'italic',
   margin: 10,

  },
});

export default App;