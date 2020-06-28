import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  FlatList, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { AntDesign, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

const questions = require('../assets/json/questions.json');

export default function Questions({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ backgroundColor: '#b92b27', borderRadius: 3, marginRight: 10, padding: 5 }}>
          <AntDesign name="star" size={13} color="#fff" />
        </View>
        <Text style={{ textTransform: 'uppercase', fontSize: 12, color: '#a5a5a5' }}>
          Questions for you
          </Text>
      </View>
      <FlatList data={questions}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) =>
          <View style={styles.question_container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.question_subtext}>
                Question added · {item.topic}
              </Text>
              <Ionicons name="ios-close" size={24} color="#696969" />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('WebView', { url: item.link });
              }}>
              <Text style={styles.question}>{item.question}</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.question_subtext, paddingVertical: 3 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.answers ? (item.answers + (item.answers > 1 ? " answers" : " answer")) : "No answer yet"}</Text>
              {" ·"} Last followed {item.last_followed}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
              <Feather name="edit" size={20} color="#59aeff" />
              <Text style={styles.bottom_text}>Answer</Text>
              <FontAwesome5 name="ban" size={18} color="#78787a" />
              <Text style={styles.bottom_text}>Pass</Text>
              <Feather name="rss" size={20} color="#78787a" />
              <Text style={styles.bottom_text}>
                Follow
              <Text style={{ ...styles.bottom_text, fontWeight: 'normal' }}> · {item.followers}</Text>
              </Text>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Feather name="more-horizontal" size={20} color="#78787a" />
              </View>
            </View>
          </View>
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#fff'
  },
  question_container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e6e6e6'
  },
  question_subtext: {
    flex: 1,
    color: '#b2b2b2',
    fontSize: 12
  },
  question: {
    fontWeight: 'bold',
    fontSize: 17.8
  },
  bottom_text: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#78787a'
  }
});
