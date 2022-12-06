import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ISearchBar} from './interfaces';

export default function SearchBar(props: ISearchBar) {
  const {searchText, onSearchTextChange, toggleCheckBox, setToggleCheckBox} =
    props;

  return (
    <View>
      <TextInput
        value={searchText}
        onChangeText={onSearchTextChange}
        style={styles.textInput}
        placeholder="Search..."
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text>Only show products in stock</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    marginVertical: 10,
  },
});
