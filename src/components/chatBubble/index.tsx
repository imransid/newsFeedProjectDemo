

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BGComponent from "@/assets/svg/background"; // Import the SVG

const ChatBubble = (item: any) => {

    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                {/* SVG Background */}
                <View style={styles.svgWrapper}>
                    <BGComponent />
                    <View style={styles.textContainer}>
                        <Text style={styles.senderName}>{item.item.sender}</Text>
                        <Text style={styles.messageText}>
                            {item.item.text}
                        </Text>
                        <Text style={styles.timeText}>20:00</Text>
                    </View>
                </View>
                {/* Avatar */}
                <Image
                    source={{
                        uri: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
                    }}
                    style={styles.avatar}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end", // Align to the right
        padding: 10,
        backgroundColor: "#f5f5f5",
    },
    messageContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    svgWrapper: {
        position: "relative",
        width: 236, // SVG width
        height: 95, // SVG height
    },
    textContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 10,
        justifyContent: "center",
    },
    senderName: {
        fontWeight: "600", // Matches font-weight: 500;
        fontSize: 16, // Matches font-size: 16px;
        color: "#FFF", // Matches color: var(--white, #FFF);
        // textAlign: "right", // Matches text-align: right;
        fontFamily: "Rubik", // Matches font-family: Rubik;
        lineHeight: 14.004, // Matches line-height: 87.523% of 16px
    },

    messageText: {
        fontSize: 14,
        color: "#fff",
        marginTop: 5,
    },
    timeText: {
        fontSize: 10,
        color: "#e0e0e0",
        textAlign: "right",
        marginTop: 5,
        paddingRight: 5
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ccc",
        marginLeft: 10,
    },
});

export default ChatBubble;
