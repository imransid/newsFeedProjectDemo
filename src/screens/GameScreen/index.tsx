// Import dependencies
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Divider, IconButton, Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import CircleComponent from "@/components/CirclePlus"
import Icon from 'react-native-vector-icons/AntDesign';
import { Col, Grid, Row } from 'react-native-easy-grid'
import styles from './style';
import DropComponent from '@/assets/svg/drop'
import WeatherComponent from '@/assets/svg/weather';
import BagComponent from '@/assets/svg/bag';
import ClockComponent from '@/assets/svg/clock';
import MessageComponent from '@/assets/svg/message';
const GradientButton = ({ onPress, title }) => {
    return (
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
};

const MatchCard = () => {
    return (
        <Card style={styles.card}>
            <View style={styles.matchHeader}>
                <Row style={{ paddingVertical: 15, paddingHorizontal: 15 }}>
                    <Col style={{ width: '80%', alignItems: 'flex-start' }}>
                        <Text style={styles.location}>Yarkon Park, Tel Aviv | Court #2</Text>
                    </Col>
                    <Col style={{ alignItems: 'flex-end' }}>
                        <Icon size={17} color={"#145E94"} name='sharealt' />
                    </Col>
                </Row>
                <Row style={{ paddingLeft: 15 }}>
                    <View style={styles.textView}>
                        <BagComponent /><Text style={styles.textSUB}>02/24/2023</Text>
                    </View>

                    <View style={styles.textView}>
                        <ClockComponent /><Text style={styles.textSUB}>14:00</Text>
                    </View>
                    <View style={styles.textView}>
                        <MessageComponent /><Text style={styles.textSUB}>28 messages</Text>
                    </View>
                </Row>
            </View>
            <Divider />

            <View style={styles.playersRow}>
                <View style={styles.playerItem}>
                    <Avatar.Image size={60} source={{ uri: 'https://example.com/player1.jpg' }} />
                    <Text style={styles.playerName}>Mandler T.</Text>
                    <Text style={styles.playerTitle}>(PRO)</Text>
                </View>
                <View style={styles.playerItem}>
                    <Avatar.Image size={60} source={{ uri: 'https://example.com/player2.jpg' }} />
                    <Text style={styles.playerName}>Oz Y.</Text>
                    <Text style={styles.playerTitle}>(The Wiz)</Text>
                </View>
                <View style={styles.playerItem}>
                    <Text style={styles.vsText}>VS</Text>
                </View>
                <View style={styles.addPlayer}>
                    <CircleComponent />
                    <Text style={styles.playerName}>player</Text>
                    <Text style={styles.playerTitle}>((nickname))</Text>
                </View>
                <View style={styles.addPlayer}>
                    <CircleComponent />
                    <Text style={styles.playerName}>player</Text>
                    <Text style={styles.playerTitle}>((nickname))</Text>
                </View>
            </View>

            <View style={styles.footerRow}>
                <Grid>
                    <Row>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <DropComponent /><Text style={styles.footerText}>Precipitation</Text>
                        </View>
                    </Row>
                    <Row>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <WeatherComponent /><Text style={styles.footerText}>Weather - cloudy</Text>
                        </View>
                    </Row>
                </Grid>

                <View>
                    <GradientButton title="Chat" onPress={() => alert('Chat pressed')} />
                </View>
            </View>
        </Card>
    );
};

const HomeScreen = () => (
    <View style={styles.container}>
        <MatchCard />
    </View>
);

export default HomeScreen;
