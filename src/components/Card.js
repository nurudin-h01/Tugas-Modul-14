import { CardContainer, CardImage, CardBody, CardPrice, CardProductName, CardTitle, CardText } from './styles/Card';

import Button from './Button';


const Card = () => {
  return (
    <CardContainer width="400px">
      <CardImage src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
      <CardBody>
        <CardPrice>Rp 99000</CardPrice>
        <CardProductName>Topi Baseball</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
