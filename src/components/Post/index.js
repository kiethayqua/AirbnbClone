import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = (props) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri:
            'http://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      {/* Bed and Badroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec nisi
        tellus. Curabitur ultricies velit felis, non vehicula enim maximus nec.
        Vivamus eleifend eleifend orci, facilisis facilisis mauris porta sed.
      </Text>

      {/* Old price and new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.price}> $30</Text>/ night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
