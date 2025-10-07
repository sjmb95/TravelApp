import React , {useState, useEffect} from "react"
import { FlatList, SafeAreaView, ScrollView, View, Text } from "react-native"
import Title  from "../../components/Title"
import styles from "./styles"
import Categories from "../../components/Categories"
import AttractionCard from "../../components/AttractionCard"
import jsonData from '../../data/attractions.json'
import categories from "../../data/categories.json"
import { useNavigation } from "@react-navigation/native"



const All = "All"

const Home =()=>{


    const [selectedCategory, setSelectedCategory ] = useState(All)
    const [data, setData] = useState([])
    const navigation = useNavigation();

    useEffect(()=>{

        // console.log("json data : ",jsonData);
        setData(jsonData);

    }, [])

    useEffect(()=>{

        if(selectedCategory == All){
            setData(jsonData)
        }else{
            const filteredData = jsonData?.filter((item)=> item.categories.includes(selectedCategory))
            setData(filteredData)
        }

    },[selectedCategory])

    return (
        <SafeAreaView style={styles.container} >
            
               
                {/* <ScrollView contentContainerStyle={styles.row} >
                    {
                        [...data,...data]?.map((item, index)=>(
                        <AttractionCard 
                            key={item.id}
                            title={item.name} 
                            subtitle={item.city}
                            imageSrc={item.images?.length ? item.images[0] : null }
                            style={index % 2 === 0 ? {marginRight : 12} : {}}
                        />
                    
                        ))
                    }
                    
                </ScrollView> */}

               <FlatList
                    data={data}
                    numColumns={2} // fixed, don’t change dynamically
                    style={{flexGrow:1}}
                    ListEmptyComponent={(<Text style={styles.emptyText}>No Items found</Text>)}
                    ListHeaderComponent={(
                        <>
                         <Title style={{fontWeight :"normal"}} text="Where do" />
                        <Title text="you want to go ?" />

                        <Title text="Explore locations" style={styles.subtitle}/>

                        <Categories 
                            selectedCategory={selectedCategory}
                            onCategoryPress={setSelectedCategory} 
                            categories={[All, ...categories]}
                        
                        />
                        
                        </>
                    )}
                    keyExtractor={(item) => String(item?.id)}
                    renderItem={({ item, index }) => (
                        <AttractionCard
                         key={item.id}
                        title={item.name}
                        subtitle={item.city}
                        onPress={()=>navigation.navigate("AttractionDetails", {item})}
                        imageSrc={item.images?.length ? item.images[0] : null}
                        style={{ marginRight: index % 2 === 0 ? 12 : 0 }}
                        
                        />
                    )}
                      contentContainerStyle={{ padding: 16, paddingBottom: 50 }} // adds scroll space
                    showsVerticalScrollIndicator={false}
                    // balances columns
              />
                                
            
        </SafeAreaView>
    )

}

export default Home;