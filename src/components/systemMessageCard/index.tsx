

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const SystemMessageCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>System message</Text>
            <Text style={styles.message}>
                Lorem Ipsum is a term for a completely common meaningless text - sometimes also called Lorem Ipsum!
            </Text>
            <View style={styles.footer}>
                <MaterialIcons name="access-time" size={16} color="gray" />
                <Text style={styles.timestamp}>an hour ago</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <MaterialIcons name="share" size={20} color="#3366CC" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F9F9F9',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0073E6',
        marginBottom: 8,
    },
    message: {
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timestamp: {
        fontSize: 12,
        color: 'gray',
        marginLeft: 4,
    },
    iconButton: {
        marginLeft: 'auto',
    },
});

export default SystemMessageCard;
