import React, {useState} from 'react';
import {View, Text, Pressable, Dimensions} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = (props) => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center',
      }}>
      <View style={{width: '100%'}}>
        {/* Row 1: Adults */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          {/* Buttons with value */}
          <View style={styles.buttonsRow}>
            {/* - */}
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={{fontSize: 16}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

            {/* + */}
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={{fontSize: 16}}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 2: Children */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>
          {/* Buttons with value */}
          <View style={styles.buttonsRow}>
            {/* - */}
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={{fontSize: 16}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

            {/* + */}
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={{fontSize: 16}}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 3: Infants */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          {/* Buttons with value */}
          <View style={styles.buttonsRow}>
            {/* - */}
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={{fontSize: 16}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>

            {/* + */}
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={{fontSize: 16}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Search Button */}
      <Pressable
        style={{
          backgroundColor: '#f15454',
          height: 50,
          width: '80%',
          borderRadius: 10,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('SearchResults');
        }}>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
            }}>
            Search
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
