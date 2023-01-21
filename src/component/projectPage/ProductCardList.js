import { useEffect,useState } from "react";
import { database } from "./db";
import ProductCard from "./ProductCard";
import { Header,ListContainer,MyProject,Wrapper } from "./ProductStyle";


const ProductCardList = () => {
  const [img,setImg] = useState([]);



  const List = database.map((item) => {
    return (
      <ProductCard
        key={`${item.image} + _ ${item.id}`}
        name={item.name}
        image={item.image}
        link={item.link}
      />
    );
  });
  return (
    <ListContainer>
      <MyProject> My Projects</MyProject>
      <Header>
        Here is a few of the projects I have been priviledged to work on:
      </Header>
      <Wrapper>{List}</Wrapper>
    </ListContainer>
  );
};

export default ProductCardList;
