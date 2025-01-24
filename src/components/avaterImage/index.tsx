

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./style";

const Avatar = (item: any) => {
    return (
        <View
            style={styles.avaterWraper}
        >
            <Image source={{ uri: item.url }} style={styles.avatar} />
        </View>
    )

}


export default Avatar