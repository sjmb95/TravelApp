import { StyleSheet, Dimensions } from "react-native";


const  {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        margin:20,
        
    },
   
    mainImage:{
        width:"100%",
        height: height/2,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center"
       
    },
     header:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

     },
     icon:{
        width:36,
        height:36,
        margin:16,
     },

     miniImage:{
        width:40,
        height:40,
        borderRadius:10,
        borderWidth:1, 
        marginHorizontal: 4,
        marginVertical: 8,
        
    
        

     },
     
     footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
        backgroundColor:'rgba(256, 256, 256, 0.35)',
        margin:10,
        paddingHorizontal:8,
        
     },
     moreImagesContainer:{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.38)',
        width: 40,
        height: 40,
        top: 8,
        left: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

     },
     moreImages:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
     },

     headerContainer:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginVertical:40,

     },

     title:{
      color:"#000"

     },
     city:{
      fontSize:20,
      fontWeight:"400",
      color:"#000",
      marginTop:8,
     },
     map:{    
      width:"100%",
      height:200,
      borderRadius:10,
   
     },

     mapText:{
      fontWeight:'bold',
      fontSize:16,
      color:"#4681A3",
      textAlign:"center",
      padding:16,
      paddingBottom:60 

     },
     price:{

     },

     textContainer:{

     },


})

export default styles;