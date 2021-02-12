import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet,KeyboardAvoidingView, Text, Keyboard,
   TouchableOpacity, View, TextInput, Image, Animated } from 'react-native';

export default function App() {

  const[offset] = useState(new Animated.ValueXY({x:0,y:95}));
  const [logo]= useState(new Animated.ValueXY({x:115,y:140}));
  
  
  useEffect(()=>{
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide);


    Animated.parallel([

    Animated.spring(offset.y,{
      toValue:0,
      speed:4,
      bounciness:25, 
      
    })
    
  ]).start();
 
  },[]);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue:55,
        duration:100,
        
      }),
      Animated.timing(logo.y,{
        toValue:65,
        duration:100,
        
      }),
    ]).start();
  }

  function keyboardDidHide(){
   Animated.parallel([
     Animated.timing(logo.x,{
       toValue:115,
       duration:100,
       
     }),
     Animated.timing(logo.y,{
       toValue:140,
       duration:100,
       
     }),
   ]).start();
  }
  return (


    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerlogo}>
      <Animated.Image
       style={{
        width:logo.x,
        height:logo.y
      }}
        source={require('./assets/logo.png')}
      />

    </View>
    
    <Animated.View style={[styles.cont,{
      transform:[
      {translateY:offset.y}
        
      ]

    }
    
    ]}>
        <TextInput style={styles.input}
        placeholder="Email"
        autoCorrect={false} // para o corretor não interferir.
        />

     <TextInput style={styles.input}
        placeholder="Senha"
        autoCorrect={false} 
        />

    <TouchableOpacity style={styles.btnSubmit}>
      <Text style={styles.text}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnSubmit1}>
      <Text style={styles.text1}>Criar conta gratuita</Text>
    </TouchableOpacity>



      </Animated.View>

    </KeyboardAvoidingView>


  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#191919',

    
  },


  containerlogo:{
  flex:1,
  justifyContent:"center"

  },

  cont:{
    flex:1,
    alignItems:"center",
    width:'90%',
    justifyContent:"center",
    position:'relative',
    top:-15
    
    
  },

  input:{
    backgroundColor:'#FFF',
    color:'#222',
    borderRadius:15,
    marginBottom:15,
    padding:10,
    fontSize:17,
    width:'90%'
    
    
  },

  btnSubmit:{
    width:"90%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#35AAFF",
    height:45,
    borderRadius:15,
    padding:10,
    fontSize:17
  
  },
  text:{
    color:"#FFF",
    fontSize:17
  },

  btnSubmit1:{
    marginTop:15,
  },

  text1:{
    color:"#FFF",
    fontSize:15
  }





});
