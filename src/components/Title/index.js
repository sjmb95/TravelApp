import React , {useEffect, useState } from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';


const Title =({text, style})=>{
 const [textState, setText] = useState();



    return (
            <Text style={[styles.title , style]} > {text}</Text>
        
    ); 
}

Title.defaultProps ={
    text : "default text"
}

export default Title;


