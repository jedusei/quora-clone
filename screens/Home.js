import React from 'react';
import {
  Image, FlatList, StyleSheet,
  Text, TouchableOpacity, View
} from 'react-native';
import { EvilIcons, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ImageWithBorder from '../components/ImageWithBorder';

const feed = require('../assets/json/feed.json');

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList data={feed} showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        ItemSeparatorComponent={() => <View style={{ height: 5, backgroundColor: '#e6e7e8' }} />}
        renderItem={({ item }) =>
          <View style={styles.post}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ImageWithBorder source={{ uri: item.space_icon }} style={styles.space_icon} />
              <View style={{ flex: 1, marginHorizontal: 10 }}>
                <Text style={styles.space_title}>{item.space_title}<Text style={styles.post_subtext}> · {item.delta_time}</Text></Text>
                <Text style={styles.post_subtext}>Shared by {item.shared_by}</Text>
              </View>
              <Ionicons name="ios-close" size={24} color="#78787a" />
            </View>
            <TouchableOpacity activeOpacity={0.7}
              onPress={() => {
                navigation.navigate('WebView', { url: item.answer.link });
              }}>
              <View style={styles.answer_container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={{ uri: item.answer.user_icon }} style={styles.user_icon} />
                  <Text style={styles.post_subtext}>{item.answer.user} · Answered {item.answer.delta_time}</Text>
                </View>
                <Text style={styles.question}>{item.answer.question}</Text>
                <View>
                  <Text style={styles.answer} numberOfLines={3}>{item.answer.preview_text}</Text>
                  <Text style={styles.read_more_text}>Read More</Text>
                </View>
                <Image source={{ uri: item.answer.preview_img }} style={styles.answer_img} />
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
              <MaterialCommunityIcons name="arrow-up-bold-outline" size={24} color="#4e7fff" />
              <Text style={styles.post_stats}>{item.upvotes}</Text>
              <EvilIcons name="refresh" size={30} color="#78787a" />
              <Text style={styles.post_stats}>{item.shares}</Text>
              <EvilIcons name="comment" size={24} color="#78787a" />
              <Text style={{ ...styles.post_stats, flex: 1 }}>{item.comments}</Text>
              <View style={{ marginRight: 20 }}>
                <Feather name="share-2" size={20} color="#78787a" />
              </View>
              <Feather name="more-horizontal" size={22} color="#78787a" />
            </View>
          </View>
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  post: {
    paddingHorizontal: 20,
    paddingTop: 15
  },
  space_icon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#f3f3f3'
  },
  space_title: {
    fontWeight: 'bold'
  },
  post_subtext: {
    fontWeight: 'normal',
    fontSize: 13,
    color: '#808080'
  },
  answer_container: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f3f4f4'
  },
  user_icon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    borderRadius: 100,
    marginRight: 5
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5
  },
  answer: {
    fontSize: 15
  },
  read_more_text: {
    color: '#808080',
    position: 'absolute',
    right: 0,
    bottom: -0.5,
    backgroundColor: '#fff',
    paddingLeft: 5
  },
  answer_img: {
    resizeMode: 'cover',
    height: 210,
    borderRadius: 3,
    marginVertical: 5
  },
  post_stats: {
    color: '#808080',
    marginLeft: 5,
    marginRight: 15
  }
});
