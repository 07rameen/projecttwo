
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

  const[Items,setItems]=useState([
    {name:'item 1'},
    {name:'item 2'},
    {name:'item 3'},
    {name:'item 4'},
    {name:'item 5'},
    {name:'item 6'},
    {name:'item 7'},
    {name:'item 50'},
    {name:'item 60'},
    {name:'item 70'},
    {name:'item 80'},
    {name:'item 90'}


  ])

  const DATA=[
    {
      title:'Tile One',
      data:['Item 1-1','Item 1-2','Item 1-3'],

    },
    {
      title:'Tile TWO',
      data:['Item 2-1','Item 2-2','Item 2-3'],

    },
    {
      title:'Tile THREE',
      data:['Item 3-1','Item 3-2','Item 3-3'],

    },
    {
      title:'Tile FOUR',
      data:['Item 4-1','Item 4-2','Item 4-3'],

    },
  ]

  const[Refreshing,setRefreshing]=useState(false)
  const onRefresh =() =>
  {
    setRefreshing(true);
    setItems([...Items,{name:'Key is 69'}]);
    setRefreshing(false);

  }

  return (
    // <FlatList
    // // numColumns={2}
    // // horizontal
    // keyExtractor={(item,index)=>index.toString()}
    //   data={Items}
    //   renderItem={({item})=>(
    //     <View style={styles.item}>
    //              <Text style={styles.text}> {item.name} </Text>
    //     </View>

    //   )}
    //   refreshControl={
    //       <RefreshControl
    //         refreshing={ Refreshing}
    //           onRefresh={onRefresh}
    //           colors={['#ff00ff']}
    //       />
      
    //      }/>
    
    <SectionList
    //what is key extractor doing?
    keyExtractor={(item,index)=>index.toString()}
    sections={DATA}
    //to display items use render item 
    renderItem={({item})=>(
        
                   <Text style={styles.text}> {item} </Text>
        //item for showing the nested stuff 1-1 wagera 
  
        )}
        //display title using render section header
        renderSectionHeader={({section})=>
        <View style={styles.item}>
        <Text style={styles.text}> {section.title} </Text>
        {/* here internal array items are being displayed item.name karnay ki zaroorat nahin */}
</View>
}

    />

    
  

  );
}

const styles = StyleSheet.create({
  body:
  {
  flex:1,
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  },
  item:
  {
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
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