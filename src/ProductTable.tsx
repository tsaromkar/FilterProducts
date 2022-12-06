import React, {useMemo} from 'react';
import {View} from 'react-native';
import {IPRODUCTSDATA} from './interfaces';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable(props: IPRODUCTSDATA) {
  const {products, filteredText, toggleCheckBox} = props;
  const filteredProducts = useMemo(() => {
    let category = '';
    let filtered =
      filteredText === ''
        ? products
        : products.filter(prod =>
            prod.name.toLowerCase().includes(filteredText.toLowerCase()),
          );
    filtered = toggleCheckBox
      ? filtered.filter(prod => prod.stocked === true)
      : filtered;
    return (
      <View>
        {filtered.map((prod, index) => {
          if (prod.category !== category) {
            category = prod.category;
            return (
              <View key={index + category}>
                <ProductCategoryRow category={prod.category} />
                <ProductRow name={prod.name} price={prod.price} />
              </View>
            );
          }
          return (
            <ProductRow
              name={prod.name}
              price={prod.price}
              key={index + category}
            />
          );
        })}
      </View>
    );
  }, [filteredText, products, toggleCheckBox]);

  return (
    <View style={{marginTop: 5}}>
      <ProductRow name="Name" price="Price" />
      {filteredProducts}
    </View>
  );
}
