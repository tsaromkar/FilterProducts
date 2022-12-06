import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {IPRODUCTS} from './interfaces';
import {products as ProductsData} from './mock';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = () => {
  let products: IPRODUCTS[] = Object.values(ProductsData);
  const [searchText, setSearchText] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleOnSearchTextChange = useCallback((value: any) => {
    setSearchText(value);
  }, []);

  const handleOnSetToggleCheckBox = useCallback((value: any) => {
    setToggleCheckBox(value);
  }, []);

  return (
    <View style={{padding: 16}}>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={handleOnSearchTextChange}
        toggleCheckBox={toggleCheckBox}
        setToggleCheckBox={handleOnSetToggleCheckBox}
      />
      <ProductTable
        products={products}
        filteredText={searchText}
        toggleCheckBox={toggleCheckBox}
      />
    </View>
  );
};

export default FilterableProductTable;
