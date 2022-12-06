export interface IPRODUCTS {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface IPRODUCTSDATA {
  products: IPRODUCTS[];
  filteredText: string;
  toggleCheckBox: boolean;
}

export interface ISearchBar {
  searchText: string;
  onSearchTextChange: (value: any) => void;
  toggleCheckBox: boolean;
  setToggleCheckBox: (value: boolean) => void;
}

export interface IProductCategoryRow {
  category: string;
}

export interface IProductRow {
  name: string;
  price: string;
}
