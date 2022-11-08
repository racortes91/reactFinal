import React, { useEffect, useState } from 'react'; 
import './ItemDetailContainer.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';


const productos = [
  {nombre: "God Of War Ragnarök",id: 1, img: "https://www.microplay.cl/files/uploads/God_Of_War_Ragnarok_PS5-1-portada-falabella.jpg", precio: 10000, categoria: "ps5"},
  {nombre: "Resident Evil VIII", id: 2, img: "https://www.microplay.cl/files/uploads/Resident-_Evil_-VIII_-Village-_Gold_-Edi-portada-falabella-1.jpg", precio: 10000, categoria: "ps5"},
  {nombre: "Plague Tale Requiem",id: 3, img: "https://www.microplay.cl/files/uploads/A_-Plague_-Tale_-Requiem-_PS5-1-portada-falabella-1.jpg", precio: 10000, categoria: "ps5"},
  {nombre: "Paw Patrol Mighty Pups save",id: 4, img: "https://www.microplay.cl/files/uploads/Paw_-Patrol-_Mighty-_Pups-_Save_-Adventu-portada.jpg", precio: 10000, categoria: "nintendo"},
  {nombre: "Pokemon Violet",id: 5, img: "https://www.microplay.cl/files/uploads/Pokemon_-Violet_-Switch-1-portada.jpg", precio: 10000, categoria: "nintendo"},
  {nombre: "Mario Rabbids Sparks Of Hope",id: 6, img: "https://www.microplay.cl/files/uploads/Mario-Rabbids-Sparks-Of-Hope-Switch-portada.jpg", precio: 10000, categoria: "nintendo"},
  {nombre: "Elden Ring",id: 7, img: "https://www.microplay.cl/files/uploads/Elden-Ring-Xbox-One-portada-1.jpg", precio: 10000, categoria: "xbox"},
  {nombre: "Fifa 23",id: 8, img:"https://www.microplay.cl/files/uploads/FIFA_-23-_xboxone-1-portada.jpg", precio: 10000, categoria: "xbox"},
  {nombre: "Battlefield 2042",id: 9, img:"https://www.microplay.cl/files/uploads/Battlefield-2042-Xbox-Series-X-portada.jpg", precio: 10000, categoria: "xbox"}
]

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    

    const {detalleId} = useParams(); 


    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        getData.then(res => setData(res.find(producto => producto.id == parseInt(detalleId))));
    }, [])

  return (
    <ItemDetail data={data} />
  );
};

export default ItemDetailContainer;

