import RightArrow from '@/assets/svg/rightArrow';
import ChatBubble from '@/components/chatBubble';
import SVGButtonComponent from '@/components/customButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatScreen = ({ navigation }: any) => {

  useFocusEffect(
    React.useCallback(() => {
      // Hide tab bar when the screen is focused
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
      return () => {
        // Show tab bar when the screen is unfocused
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });
      };
    }, [navigation])
  );

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Penn N. (panther)",
      text: "Hey guys, thanks a lot for the impressive game, it was fun!",
      time: "20:00",
      avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
    {
      id: 2,
      sender: "",
      text: "Certainly, it was fantastic to see how long each point lasted. It's always fun to play with players",
      time: "20:00",
      avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
    {
      id: 3,
      sender: "Penn N. (panther)",
      text: "The dedication of the ball was stunning.",
      time: "20:00",
      avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
    {
      id: 5,
      sender: "Me",
      text: "I'm crossing my fingers that the next game will be crazy!",
      time: "20:00",
      isHighlight: false,
      avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
  ]);

  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "Me",
        text: inputText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  const goBack = () => {
    navigation.goBack();  // This will navigate back to the previous screen
  };

  const renderMessage = ({ item }) => {
    if (item.sender === "Me") {
      return <ChatBubble item={item} />;
    }

    return (
      <View style={[styles.messageContainer, item.isHighlight && styles.highlightMessage]}>
        <View style={styles.messageHeader}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.messageContent}>
            {item.sender ? <Text style={styles.sender}>{item.sender}</Text> : null}
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust for iOS and Android
      style={{ flex: 1 }} // Ensure the keyboard avoiding view fills the screen
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.date}>Monday, February 23 | 14:00 - Tel Aviv </Text>
          </View>
          <View style={styles.iconArrow} >
            <TouchableOpacity onPress={goBack} style={styles.iconArrow}>
              <RightArrow />
            </TouchableOpacity>
          </View>
        </View>

        {/* Message List */}
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id.toString()}
          style={styles.messageList}
        />

        {/* Input Box */}
        <View style={styles.inputContainer}>
          <View style={styles.textBoxContainer}>
            <Icon name="plus" size={20} color="#007BFF" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="Add a comment..."
              value={inputText}
              onChangeText={setInputText}
            />
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <SVGButtonComponent />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};


export default ChatScreen;


