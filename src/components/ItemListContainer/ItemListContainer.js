import React, {useState, useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import Title from '../Title/Title';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'; 


export const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const {categoriaId} = useParams(); 

 
	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "productos");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("categoria", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);


 
  return (
    <>
    <div className='contendor'>
      <Title greeting={props.texto} />
      <ItemList data={data} />
    </div>
      
    </>
  )
}

export default ItemListContainer;
