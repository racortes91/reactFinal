import React, {useState, useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import Title from '../Title/Title';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';


const productos = [
  {nombre: "God Of War Ragnarök",id: 1, img: "https://www.microplay.cl/files/uploads/God_Of_War_Ragnarok_PS5-1-portada-falabella.jpg", precio: 10000, categoria: "ps5"},
  {nombre: "Call Of Duty Modern Warfare 2", id: 2, img: "https://www.microplay.cl/files/uploads/Call-_Of-_D…y-_Modern-_Warfare_-II-_PS5-portada-falabella.jpg", precio: 10000, categoria: "ps5"},
  {nombre: "Plague Tale Requiem",id: 3, img: "https://www.microplay.cl/files/uploads/A_-Plague_-Tale_-Requiem-_PS5-1-portada-falabella-1.jpg", precio: 10000, categoria: "ps5"},
  {nombre: "Paw Patrol Mighty Pups save",id: 4, img: "https://www.microplay.cl/files/uploads/Paw_-Patrol-_Mighty-_Pups-_Save_-Adventu-portada.jpg", precio: 10000, categoria: "nintendo"},
  {nombre: "Pokemon Violet",id: 5, img: "https://www.microplay.cl/files/uploads/Pokemon_-Violet_-Switch-1-portada.jpg", precio: 10000, categoria: "nintendo"},
  {nombre: "Mario Rabbids Sparks Of Hope",id: 6, img: "https://www.microplay.cl/files/uploads/Mario-Rabbids-Sparks-Of-Hope-Switch-portada.jpg", precio: 10000, categoria: "nintendo"},
  {nombre: "Elden Ring",id: 7, img: "https://www.microplay.cl/files/uploads/Elden-Ring-Xbox-One-portada-1.jpg", precio: 10000, categoria: "xbox"},
  {nombre: "Fifa 23",id: 8, img:"https://www.microplay.cl/files/uploads/FIFA_-23-_xboxone-1-portada.jpg", precio: 10000, categoria: "xbox"},
  {nombre: "Battlefield 2042",id: 9, img:"https://www.microplay.cl/files/uploads/Battlefield-2042-Xbox-Series-X-portada.jpg", precio: 10000, categoria: "xbox"}
]

export const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams(); 

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() => {
        resolve(productos);
      }, 2000);
    });
    if(categoriaId) {
      getData.then(res => setData(res.filter(product => product.categoria === categoriaId)));
    }else {
      getData.then(res => setData(res));
    }
  }, [categoriaId]);


 
  return (
    <>
      <Title greeting={props.texto} />
      <ItemList data={data} />
    </>
  )
}

export default ItemListContainer;
