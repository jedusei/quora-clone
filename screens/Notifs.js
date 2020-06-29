import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  FlatList, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import ImageWithBorder from '../components/ImageWithBorder';

const notifs = require('../assets/json/notifs.json');

export default function NotifsScreen({ navigation }) {
  const [state, setState] = React.useState(false);
  const refresh = () => setState(!state);
  return (
    <View style={styles.container}>
      <FlatList data={notifs}
        keyExtractor={(item, index) => String(index)}
        ListHeaderComponent={() =>
          <View style={styles.header}>
            <Text style={{ flex: 1, fontWeight: 'bold', color: '#6e6f71' }}>
              Mark All As Read
          </Text>
            <View style={{ marginHorizontal: 15 }}>
              <SimpleLineIcons name="equalizer" size={20} color="#6e6f71" />
            </View>
            <AntDesign name="setting" size={24} color="#6e6f71" />
          </View>
        }
        renderItem={({ item }) =>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {
            item.read = true;
            refresh();
            navigation.navigate('WebView', { url: item.link });
          }}>
            <View style={{ ...styles.notif_container, backgroundColor: (item.read ? '#fff' : undefined) }}>
              <ImageWithBorder source={{ uri: item.icon }} style={styles.notif_icon} />
              <View style={{ flex: 1, marginHorizontal: 15 }}>
                <Text style={styles.notif_header_text}>
                  Highlight in {item.name} · {item.shared_by} shared this · {item.time}
                </Text>
                {item.caption &&
                  <Text numberOfLines={2} style={styles.notif_caption}>{item.caption}</Text>
                }
                {item.question &&
                  <View style={styles.question_container}>
                    <Text numberOfLines={4} style={styles.question}>{item.question}</Text>
                  </View>
                }
              </View>
              <View style={{ paddingTop: 10 }}>
                <Feather name="more-horizontal" size={22} color="#78787a" />
              </View>
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf1f5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#f3f3f3'
  },
  notif_container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#e7eaed'
  },
  notif_icon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 20
  },
  notif_header_text: {
    color: '#7c7e80',
    fontSize: 13,
    marginBottom: 3
  },
  notif_caption: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  question_container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e8ea'
  },
  question: {
    fontSize: 15
  }
});
