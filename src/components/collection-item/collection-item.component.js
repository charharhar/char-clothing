import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  ImageContainer,
  CustomButtonContainer,
  CollectionFooterContainer,
  CollectionFooterName,
  CollectionFooterPrice,
} from './collection-item.styles';

import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />

      <CollectionFooterContainer className="collection-footer">
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>{price}</CollectionFooterPrice>
      </CollectionFooterContainer>

      <CustomButtonContainer onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
