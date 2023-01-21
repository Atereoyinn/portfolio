import { ImageStyle,Circle,BrowserClone,Container,Paragraph,Link } from "./ProductStyle";


const ProductCard = ({ name, image, link }) => {
  return (
    <Container>
      {console.log(image)}
      <BrowserClone>
       <Circle />
        <Circle />
        <Circle />
        <Paragraph>{name}</Paragraph>
      </BrowserClone>
      <Link href={link} target="_blank">
        <ImageStyle src={image} alt={name} />
      </Link>
    </Container>
  );
};

export default ProductCard;
