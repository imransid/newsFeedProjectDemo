
import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import styles from "./style";

const NewsCard = () => {
    return (
        <>
            {/* News Card */}
            <View style={styles.card}>
                {/* Text Section */}
                <View style={styles.textContainer}>
                    <Text style={styles.category}>News</Text>
                    <Text style={styles.title}>
                        Lorem Ipsum is a term for a completely meaningless text - sometimes read
                    </Text>
                    <View style={styles.footer}>
                        <Text style={styles.timestamp}>an hour ago</Text>
                        <Text style={styles.divider}>·</Text>
                        <Text style={styles.comments}>26 comments</Text>
                    </View>
                </View>
                {/* Image Section */}
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/736x/05/80/23/05802371a972b3c28e6e905c5a538ce6.jpg'
                    }} // Replace with your image path
                    style={styles.image}
                />
            </View>
        </>
    );
};



export default NewsCard;
