import { Text,SafeAreaView, StyleSheet,View } from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../../components/RoundedButton';
import {fontSizes,spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors';


export const Focus=({addSubject})=>{
  const [subject,setSubject]=useState(null);
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex:1,marginRight:spacing.md}} 
          onSubmitEditing={
            ({nativeEvent})=>{
              setSubject(nativeEvent.text)
            }
          } />
          <RoundedButton size={50} title="+" onPress={()=>addSubject(subject)}/>
        </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer:{
    flex:0.5,
    padding:spacing.md,
    justifyContent:'center',
  },
  title:{
    color:colors.white,
    fontWeight:'bold',
    fontSize:fontSizes.lg
  },
  inputContainer:{
    paddingTop:spacing.md,
    flexDirection:"row",
    alignItems:"center"
  }
});
