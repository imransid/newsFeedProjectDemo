import MenuComponent from "@/assets/svg/menu"
import React from "react"
import { TextInput, TouchableOpacity, View, Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";

const FilterContainer = () => {

    return (
        <>
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <MenuComponent />
                </TouchableOpacity>
                <View style={styles.dropdown}>
                    <TextInput
                        placeholder="Date | hour..."
                        placeholderTextColor="#666"
                        style={styles.dropdownText}
                    />
                    <View style={{ height: 12, width: 60 }}></View>
                    <Icon name="chevron-down" size={20} color="#000" style={styles.dropdownIcon} />
                </View>
            </View>

            {/* Section Button */}
            <TouchableOpacity style={styles.sectionButton}>
                <Text style={styles.sectionButtonText}>Doubles games</Text>
            </TouchableOpacity>
        </>
    )
}

export default FilterContainer