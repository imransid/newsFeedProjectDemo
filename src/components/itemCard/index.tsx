import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // To make the card responsive

const ImageCard = () => {
    return (
        <View style={styles.card}>
            {/* Image Section */}
            <Image
                source={{
                    uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                }} // Replace with your image path
                style={styles.image}
            />
            {/* Overlay Content */}
            <View style={styles.overlay}>
                <Text style={styles.title}>
                    Lorem Ipsum is a nickname for such a completely meaningless text - some
                </Text>
                <Text style={styles.subtitle}>Lorem Ipsum is · 4 minutes of reading</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    card: {
        width: width * 0.9, // Responsive width
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        elevation: 5, // For shadow on Android
        shadowColor: "#000", // For shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    image: {
        width: "100%",
        height: 200,
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 15,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    },
    title: {
        color: "#fff",
        fontFamily: "Rubik", // Ensure Rubik font is available in your project
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 16, // Adjusted for spacing
        letterSpacing: 2.5,
        marginBottom: 8,
    },
    subtitle: {
        color: "#fff",
        fontFamily: "Rubik",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 16,
        letterSpacing: 1,
    },
});

export default ImageCard;