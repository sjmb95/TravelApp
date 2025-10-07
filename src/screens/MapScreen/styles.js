import { Header } from "@react-navigation/stack";
import { StyleSheet , Dimensions} from "react-native";


const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container:{
        flex:1,    
    },
    map:{
        width:"100%",
        height: "100%",
    },
    header:{
        position:"absolute",
        top:20,
        borderRadius:15,
        backgroundColor:"white",
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        width:width-42,
        margin:20,
    
        
    },
    title:{
        fontSize:20,
        color:"#000"

    },
    back:{
        marginRight:16,
        width:10,
        height:10
        
    }




})

export default styles;