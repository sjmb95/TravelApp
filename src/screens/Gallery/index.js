import React , {useState, useEffect} from "react"
import { FlatList, SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from "react-native"

import styles from "./styles"


const All = "All"

const Gallery =({route, navigation})=>{
const {images} = route?.params || {}

const back=()=>{
    navigation.goBack()
}
   

    return (
        <SafeAreaView style={styles.container} >

            <View>
                 <TouchableOpacity style={styles.backContainer} onPress={back}>
                     <Image source={require("../../assets/back.png")} style={styles.backIcon}/>
                 </TouchableOpacity>
            </View>

            <FlatList
                keyExtractor={(item)=>String(item)}
                data={images}
                style={{marginBottom:20, paddingHorizontal:20}}
                renderItem={({item , index})=>(
                    <View>
                        <Image source={{ uri : item}} style={styles.image} />
                    </View>
                )}
            />   
           
            
        </SafeAreaView>
    )

}

export default Gallery;