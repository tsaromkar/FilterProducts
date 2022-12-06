import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {IProductCategoryRow} from './interfaces';

export default function ProductCategoryRow(props: IProductCategoryRow) {
  return <Text style={styles.category}>{props.category}</Text>;
}

const styles = StyleSheet.create({
  category: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
