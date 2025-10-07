import React , {useState, useEffect} from "react"
import { FlatList, SafeAreaView, ScrollView, View, Text, ImageBackground, Pressable, Image } from "react-native"
import styles from "./styles"
import Title from "../../components/Title"
import InfoCard from "../../components/InfoCard"
import MapView, { Marker } from "react-native-maps"
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';


const All = "All"

const AttractionDetails =({route, navigation})=>{

    const {item} = route?.params || {}
    const coords = {latitude: item?.coordinates?.lat,
                    longitude: item?.coordinates?.lon,
                    latitudeDelta: 0.009,
                    longitudeDelta:0.009
                    }
    const mainImage = item?.images?.length ? item.images[0] : {}
    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;
    const openHours = `OPEN
 ${item?.opening_time} -- ${item?.closing_time}`

    const onBack=()=>{
        navigation.goBack()
    }

    useEffect(()=>
        {console.log("location : "+item?.coordinates?.lon)},[])

    const onGalleryNavigate=()=>{

        navigation.navigate("Gallery",{images : item?.images})
    }

    const onShare=async()=>{

        try {

            const imageWithoutParams = mainImage.split('?')[0]
            const imageParts = imageWithoutParams.split('.')
            const imageExtension =  imageParts[imageParts.length -1]


            const base64Image = await ImgToBase64.getBase64String(mainImage)
            console.log("base64Image >> ",base64Image );
            console.log('image extension',imageExtension)
             Share.open({
                title: item?.name,
                message:"Hey There, I wanted to share to you this amaing attraction",
                url: `data/image/${imageExtension || 'jpg'};base64,${base64Image}`
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
            
        } catch (error) {
            console.log("sharing error", error.message);
        }
          
   


       

    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground imageStyle={{borderRadius:20 }} style={styles.mainImage} source={{uri : mainImage}}>
                

                    <View style={styles.header}>
                        <Pressable hitSlop={8} onPress={onBack}>
                            <Image style={styles.icon} source={require("../../assets/back.png")}/>
                        </Pressable>
                        <Pressable onPress={onShare} hitSlop={8}>
                            <Image style={styles.icon} source={require("../../assets/share.png")}/>
                        </Pressable>

                    </View>

                

                    

                    <Pressable style={styles.footer} onPress={onGalleryNavigate}>
                        {
                            slicedImages.length ? slicedImages.map((image, index)=>(
                                
                                <View key={image}>
                                    <Image key={image} source={{uri: image}} style={styles.miniImage}/>
                                    {
                                        diffImages > 0 && index === slicedImages.length - 1 ? (
                                            <View style={styles.moreImagesContainer}>
                                                <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                            </View>
                                        ) : null
                                    }
            
                                </View>
                                            
                            )) : null
                        }


                    </Pressable>
                
                </ImageBackground>    
                
                <View style={styles.headerContainer}>
                        <View style={{maxWidth:"70%"}} >
                                <Title style={styles.title} text={item?.name} />
                                <Text style={styles.city}>{item?.city}</Text>
                        </View>
                
                        <Title style={styles.title} text={item?.entry_price}/>
                
                </View>   
                
                <InfoCard text={item?.address} icon={require("../../assets/location_circle.png")}/>
                <InfoCard text={openHours}
                icon={require("../../assets/schedule.png")}/>

            <MapView
                style={styles.map}
                initialRegion={coords}   >

                    <Marker
                    title={item?.name}
                    coordinate={coords}/>

                </MapView>  
                <Text style={styles.mapText} onPress={()=>navigation.navigate("MapScreen", {item})}> Show full screen map</Text>    
            </ScrollView>              
        </SafeAreaView>
    )

}

export default AttractionDetails;