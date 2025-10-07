import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";


const Categories=({categories, selectedCategory, onCategoryPress})=>{


    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={(item)=> String(item)}
            renderItem={({item, index})=>{

                const selected = selectedCategory
                return(
                 <TouchableOpacity onPress={()=>onCategoryPress(item)} style={[styles.itemContainer, selected === item ? styles.selectedItemContainer : {}]}>
                     <Text style={[styles.item, selected === item ? styles.selectedItem : {}]}>{item}</Text>
                </TouchableOpacity>
                )
            }}
        />
    );

}

export default Categories