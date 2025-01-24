import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Text, Divider, Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { Col, Grid, Row } from 'react-native-easy-grid';

import styles from './style';
import CircleComponent from '@/components/CirclePlus';
import DropComponent from '@/assets/svg/drop';
import WeatherComponent from '@/assets/svg/weather';
import BagComponent from '@/assets/svg/bag';
import ClockComponent from '@/assets/svg/clock';
import MessageComponent from '@/assets/svg/message';
import Header from '@/components/header';
import FilterContainer from '@/components/filterContainer';
import { useNavigation } from '@react-navigation/native';

const GradientButton = ({ onPress, title }) => (
    <LinearGradient
        colors={['#3498DB', '#34506D']}
        style={styles.gradientButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <Text style={styles.gradientButtonText} onPress={onPress}>
            {title}
        </Text>
    </LinearGradient>
);

const MatchCard = () => {
    const navigation = useNavigation();

    return (
        <Card style={styles.card}>
            {/* Header Section */}
            <View style={styles.matchHeader}>
                <Row style={styles.headerRow}>
                    <Col style={styles.locationCol}>
                        <Text style={styles.location}>Yarkon Park, Tel Aviv | Court #2</Text>
                    </Col>
                    <Col style={styles.shareCol}>
                        <Icon size={17} color="#145E94" name="sharealt" />
                    </Col>
                </Row>
                <Row style={styles.infoRow}>
                    <View style={styles.textView}>
                        <BagComponent />
                        <Text style={styles.textSUB}>02/24/2023</Text>
                    </View>
                    <View style={styles.textView}>
                        <ClockComponent />
                        <Text style={styles.textSUB}>14:00</Text>
                    </View>
                    <View style={styles.textView}>
                        <MessageComponent />
                        <Text style={styles.textSUB}>28 messages</Text>
                    </View>
                </Row>
            </View>

            <Divider />

            {/* Players Section */}
            <View style={styles.playersRow}>
                {[
                    { name: 'Mandler T.', title: '(PRO)', uri: 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' },
                    { name: 'Oz Y.', title: '(The Wiz)', uri: 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' },
                ].map((player, index) => (
                    <View key={index} style={styles.playerItem}>
                        <Avatar.Image size={60} source={{ uri: player.uri }} />
                        <Text style={styles.playerName}>{player.name}</Text>
                        <Text style={styles.playerTitle}>{player.title}</Text>
                    </View>
                ))}
                <View style={styles.playerItem}>
                    <Text style={styles.vsText}>VS</Text>
                </View>
                {[...Array(2)].map((_, index) => (
                    <View key={index} style={styles.addPlayer}>
                        <CircleComponent />
                        <Text style={styles.playerName}>player</Text>
                        <Text style={styles.playerTitle}>(nickname)</Text>
                    </View>
                ))}
            </View>

            {/* Footer Section */}
            <View style={styles.footerRow}>
                <Grid>
                    {[
                        { Component: DropComponent, label: 'Precipitation' },
                        { Component: WeatherComponent, label: 'Weather - cloudy' },
                    ].map((item, index) => (
                        <Row key={index} style={styles.footerRowItem}>
                            <item.Component />
                            <Text style={styles.footerText}>{item.label}</Text>
                        </Row>
                    ))}
                </Grid>
                <GradientButton title="Chat" onPress={() => navigation.navigate('ChatScreen' as never)} />
            </View>
        </Card>
    )
}



const HomeScreen = () => (
    <View style={styles.container}>
        {/* Fixed Header */}
        <Header />

        <View style={styles.extraPadding}>
            <FilterContainer />
        </View>



        <ScrollView contentContainerStyle={styles.scrollContent}>
            <MatchCard />
            <MatchCard />
            <MatchCard />
        </ScrollView>

    </View>
);

export default HomeScreen;
