import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IProductRow} from './interfaces';

export default function ProductRow(props: IProductRow) {
  return (
    <View style={styles.productRow}>
      <Text style={styles.productCol}>{props.name}</Text>
      <Text style={styles.productCol}>{props.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productRow: {
    flexDirection: 'row',
  },
  productCol: {
    flex: 1,
    color: '#000',
  },
});
