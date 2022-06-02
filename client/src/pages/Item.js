import { useParams } from "react-router-dom";
import styled from "styled-components";
import CartFrom from "../components/UI/CartForm";
import { useContext } from "react";
import CommodityContext from "../store/Commodity-context";

const Headline = styled.div`
  padding: 2rem 0;
`;

const MainContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 60% 30%;

  gap: 1rem;
`;
const ImgListWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const ImgList = styled.img`
  height: 10%;
  width: 100%;
  transition: 0.3s all;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (min-width: 786px) {
    height: 12%;
  }
  @media screen and (min-width: 1050px) {
    height: 15%;
  }
`;

const MainImg = styled.img`
  height: 70%;
  max-width: 45rem;
  margin: 0 auto;
`;

const CartField = styled.div`
  height: 100%;
  width: 100%;

  -webkit-box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
`;

const CartHeadline = styled.h2`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 2;
  line-height: 2;
`;
const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const PriceStyle = styled.div`
  color: red;
  font-size: 3rem;
  line-height: 2;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;
`;

const BtnStyle = styled.button`
  all: unset;

  border: 1px solid #000;

  height: 4rem;
  padding: 0 1rem;

  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;

  transition: all 0.3s;
  &:hover {
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;

const Item = () => {
  //!可以拿到 params 的 id
  const params = useParams();
  const CommodityCtx = useContext(CommodityContext);
  const detailProduct = CommodityCtx.find((item) => {
    return item.id === params.itemId;
  });

  return (
    <MainContainer>
      <Headline>OUTDOOROUTDOOR / FURNITURE</Headline>
      <MainWrapper>
        <div>
          <ImgListWrapper>
            <ImgList src={detailProduct.image} />
            <ImgList src={detailProduct.image} />
            <ImgList src={detailProduct.image} />
            <ImgList src={detailProduct.image} />
          </ImgListWrapper>
        </div>
        <div>
          <MainImg src={detailProduct.image} />
        </div>
        <CartField>
          <ContextContainer>
            <CartHeadline>{detailProduct.name}</CartHeadline>
            <PriceStyle>$ {detailProduct.price}</PriceStyle>
            <FormWrapper>
              <CartFrom style={{ display: "flex", justify: "center" }} />
              <BtnStyle>ADD to Cart</BtnStyle>
              <BtnStyle>REVIEW +</BtnStyle>
            </FormWrapper>
          </ContextContainer>
        </CartField>
      </MainWrapper>
    </MainContainer>
  );
};

export default Item;
