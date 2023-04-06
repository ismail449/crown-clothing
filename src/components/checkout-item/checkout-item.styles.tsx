import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 11px;
    padding: 0px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    padding-right: 2px;
  }
`;

export const Name = styled.span`
  width: 23%;
`;

export const Quantity = styled(Name)`
  display: flex;
`;

export const Price = styled.span`
  width: 23%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
/*.checkout-item-container {
  

  .image-container {
    
  }
  .name,
  .quantity,
  .price {
    
  }

  .quantity {
    

    .arrow {
      
    }

    .value {
      
    }
  }

  .remove-button {
    
  }
}
*/
