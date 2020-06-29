import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image, FlatList, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View
} from 'react-native';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import ImageWithBorder from '../components/ImageWithBorder';

const spaces = require('../assets/json/spaces.json');

export default function Spaces({ navigation }) {
  return (
    <View style={styles.container}>

      <FlatList data={spaces.subscribed}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() =>
          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.header_text}>Your Spaces</Text>
              <Text style={{ ...styles.sub_text, fontWeight: 'bold', marginRight: 5 }}>Recently visited</Text>
              <Entypo name="chevron-down" size={15} color="#838486" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'stretch', paddingVertical: 10 }}>
              <View style={styles.blue_btn}>
                <Ionicons name="md-add-circle-outline" size={22} color="#3e74ff" />
                <Text style={styles.blue_btn_text}>Create</Text>
              </View>
              <View style={styles.blue_btn}>
                <FontAwesome5 name="compass" size={20} color="#3e74ff" />
                <Text style={styles.blue_btn_text}>Discover</Text>
              </View>
            </View>
          </View>
        }
        renderItem={({ item }) =>
          <TouchableOpacity activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('WebView', { url: item.link });
            }}>
            <View style={styles.space_row}>
              <ImageWithBorder source={{ uri: item.icon }} style={styles.space_row_img} />
              <Text style={styles.space_row_text}>{item.name}</Text>
              <Entypo name="chevron-thin-right" size={18} color="#999b9e" />
            </View>
          </TouchableOpacity>
        }
        ListFooterComponent={() =>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
              <Text style={{ ...styles.sub_text, marginRight: 5 }}>View all</Text>
              <Entypo name="chevron-down" size={12} color="#838486" />
            </View>
            <View style={{ backgroundColor: '#e6e7e8', paddingBottom: 30 }}>
              <View style={{ padding: 20 }}>
                <Text style={styles.header_text}>Discover Spaces</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Spaces you might like</Text>
                  <Text style={{ ...styles.sub_text, fontWeight: 'bold' }}>View all</Text>
                </View>
              </View>
              <FlatList horizontal data={spaces.discover}
                keyExtractor={(item) => item.name}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                renderItem={({ item }) =>
                  <TouchableOpacity activeOpacity={0.7}
                    onPress={() => {
                      navigation.navigate('WebView', { url: item.link });
                    }}>
                    <View style={styles.space_card}>
                      <View style={styles.space_card_banner}>
                        <Image source={{ uri: item.banner }} style={{ ...styles.space_card_banner, height: styles.space_card_banner.height - 1 }} />
                      </View>
                      <View style={{ alignItems: 'center' }}>
                        <View style={styles.space_card_icon}>
                          <Image source={{ uri: item.icon }}
                            style={{
                              width: styles.space_card_icon.width - (2 * styles.space_card_icon.borderWidth),
                              height: styles.space_card_icon.height - (2 * styles.space_card_icon.borderWidth),
                              borderRadius: styles.space_card_icon.borderRadius
                            }} />
                        </View>
                        <Text style={{ ...styles.space_card_text, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text numberOfLines={3} style={styles.space_card_text}>{item.desc}</Text>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                          <View style={styles.follow_btn}>
                            <Ionicons name="md-add-circle-outline" size={22} color="#3e74ff" />
                            <Text style={styles.blue_btn_text}>
                              {"Follow  "}
                              <Text style={{ fontWeight: 'normal' }}>{item.followers}</Text>
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                } />
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
  header_text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  },
  sub_text: {
    color: '#838486',
    fontSize: 12
  },
  blue_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#3e74ff',
    borderRadius: 20
  },
  blue_btn_text: {
    color: '#3e74ff',
    marginLeft: 5,
    marginRight: 12,
    fontWeight: 'bold',
    fontSize: 13
  },
  space_row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f3f3'
  },
  space_row_img: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 20
  },
  space_row_text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold'
  },
  space_card: {
    width: 160,
    height: 230,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    marginHorizontal: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e6e7e8',
    backgroundColor: '#fff'
  },
  space_card_banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderColor: '#e6e7e8'
  },
  space_card_icon: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
    marginBottom: 5
  },
  space_card_text: {
    textAlign: 'center',
    fontSize: 13
  },
  follow_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#3e74ff',
    borderRadius: 20,
    backgroundColor: '#ebf0ff'
  }
});
