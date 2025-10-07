import React , {useState, useEffect} from "react"
import { FlatList, SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from "react-native"
import MapView, {Marker} from "react-native-maps"
import styles from "./styles"


const All = "All"

const MapScreen =({route, navigation})=>{
const {item} = route?.params || {}
const coords = {latitude: item?.coordinates?.lat,
                    longitude: item?.coordinates?.lon,
                    latitudeDelta: 0.009,
                    longitudeDelta:0.009
                    }

const onBack=()=>{
    navigation.goBack()
}
   

    return (
      
            <View style={styles.container}>
                   <MapView
                style={styles.map}
                initialRegion={coords}   >
                    

                    <Marker
                    title={item?.name}
                    coordinate={coords}/>

                </MapView>  
                <View style={styles.header}>
                    <TouchableOpacity onPress={onBack}>
                      <Image  source={require("../../assets/back.png")} style={styles}/> 
                    </TouchableOpacity>
                     <Text style={styles.title} >{`${item?.name, item?.city}`}</Text>  
                </View>    
              
            </View>     
                   
    )

}

export default MapScreen;