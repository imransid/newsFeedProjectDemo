import BagComponent from '@/assets/svg/bag';
import ClockComponent from '@/assets/svg/clock';
import MessageComponent from '@/assets/svg/message';
import Avatar from '@/components/avaterImage';
import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import ImageCard from '@/components/itemCard';
import Header from '@/components/header';
import NewsCard from '@/components/newsCard';
import SystemMessageCard from '@/components/systemMessageCard';

const NewsPage = () => {
    return (
        <>
            <Header />
            <View style={styles.container}>

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.smallContainer}>
                        <View style={styles.matchHeader}>
                            <View>
                                <Text style={styles.headerText}>Yarkon Park, Tel Aviv | Court #1</Text>
                                <Text style={styles.subHeaderText}><BagComponent /> 02/24/2023 | <ClockComponent /> 02:07 | <MessageComponent /> 26 messages</Text>
                            </View>
                            <View style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon size={17} color="#145E94" name="sharealt" />
                            </View>
                        </View>

                        <View style={styles.matchContainer}>
                            <View style={styles.team}>
                                <Avatar url={"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"} />
                                <Text style={styles.name}>Mandler T.</Text>
                                <Text style={styles.tag}>(PRO)</Text>
                            </View>
                            <View style={styles.team}>
                                <Avatar url={"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"} />
                                <Text style={styles.name}>Oz Y.</Text>
                                <Text style={styles.tag}>(The Wiz)</Text>
                            </View>

                            <View style={styles.scores}>
                                <Text style={styles.score}>1 - 3</Text>
                                <FlatList
                                    data={[{ set: '1 - 0' }, { set: '1 - 2' }, { set: '4 - 3' }]}
                                    renderItem={({ item }) => <Text style={styles.setScore}>{item.set}</Text>}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>

                            <View style={styles.team}>
                                <Avatar url={"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"} />
                                <Text style={styles.name}>Goren S.</Text>
                                <Text style={styles.tag}>(hard)</Text>
                            </View>
                            <View style={styles.team}>
                                <Avatar url={"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"} />
                                <Text style={styles.name}>Penn N.</Text>
                                <Text style={styles.tag}>(panther)</Text>
                            </View>
                        </View>
                    </View>

                    {/* System Message */}
                    <View style={styles.systemMessage}>
                        <Text style={styles.systemText}>
                            Lorem Ipsum is a term for completely common meaningless text - sometimes also called Lorem Ipsum!
                        </Text>
                        <Text style={styles.timeText}>an hour ago</Text>
                    </View>
                    <View style={styles.fakeCard}></View>
                    <ImageCard />
                    <View style={styles.fakeCard}></View>
                    <NewsCard />
                    <View style={styles.fakeCard}></View>
                    <SystemMessageCard />

                </ScrollView>
            </View>
        </>
    );
};

export default NewsPage;


