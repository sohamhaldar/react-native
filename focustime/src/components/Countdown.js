import { Text,SafeAreaView, StyleSheet,View } from 'react-native';
import React, { useState,useEffect ,useRef} from 'react';
import {TextInput} from 'react-native-paper';
import {fontSizes} from '../utils/sizes';
import {colors} from '../utils/colors';
import {spacing} from '../utils/sizes'

const minToMillis=(min)=>min*1000*60;
const formatTime=(time)=>time<10?`0${time}`:time;

export const Countdown=({
  minutes=20,
  isPaused=true,
  onProgress,onEnd
})=>{

  const interval=useRef(null)

  const countDown=()=>{
    setMillis((time)=>{
      if(time===0){
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft=time-1000;
      onProgress(timeLeft/minToMillis(minutes))
      return timeLeft;
    })
  }
  useEffect(()=>{
    setMillis(minToMillis(minutes));
  },[minutes])

  useEffect(()=>{
    if(isPaused){
      if(interval.current) clearInterval(interval.current);
      return;
    }

    interval.current=setInterval(countDown,1000);

    return ()=> clearInterval(interval.current)

  },[isPaused])


  const[millis,setMillis]=useState(minToMillis(minutes));

  const minute=Math.floor(millis/1000/60)%60;
  const seconds=Math.floor(millis/1000)%60;

  return(
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
  )
}

const styles=StyleSheet.create({
  text:{
    fontSize:fontSizes.xxxl,
    fontWeight:'bold',
    color:colors.white,
    padding:spacing.lg,
    backgroundColor:'rgba(94, 132, 226, 0.3)'

  }
})