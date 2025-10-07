import React , {useEffect, useState } from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';


const InfoCard =({icon, text, style})=>{
 const [textState, setText] = useState();



    return (

            <View style={styles.container}>
                <Image source={icon} style={styles.icon}/>
                <Text style={[styles.title , style]} > {text}</Text>
            </View>
            
        
    ); 
}



export default InfoCard;


