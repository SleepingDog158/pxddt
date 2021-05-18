import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
export const ListByType = ({navigation}) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get('https://jzkrt.sse.codesandbox.io/byType')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{marginTop: 20}}>
            <View style={styles.header_container}>
              <Text style={styles.header}>{item.type}</Text>
            </View>

            <FlatList
              data={item.order}
              renderItem={({item}) => (
                <View style={styles.item}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', flex: 5}}
                    onPress={() => navigation.navigate('OrderScreen',{
                      item: item
                    })}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'Montserrat-Medium',
                          color: '#25282B',
                        }}>
                        Đơn hàng {item.code}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Montserrat-Regular',
                          color: '#25282B',
                        }}>
                        {item.vehicle}
                      </Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 12,
                          fontFamily: 'Montserrat-Medium',
                          color: '#25282B',
                        }}>
                        {item.provider}
                      </Text>
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 16,
                          fontFamily: 'Montserrat-Medium',
                          color: '#25282B',
                        }}>
                        {item.product}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#003C77', '#65A465']}
                        style={{
                          height: 50,
                          width: 50,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Icon name="qr-code-outline" size={40} color="#fff" />
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 19,
    color: '#424242',
  },
  header_container: {
    width: '50%',
    borderBottomWidth: 1,
    borderColor: 'red',
    paddingBottom: 5,
    paddingLeft: 5,
    marginBottom: 2,
  },
  item: {
    flexDirection: 'row',
    height: 85,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
