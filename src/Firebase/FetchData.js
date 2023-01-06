import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import db from './FirebaseConfig';


async function fetchData(genre) {        
    let q
    genre ? q  = query(collection(db, 'bookstore'), where('genre', '==', genre)) : q = collection(db, 'bookstore')

    const querySnapshot = await getDocs(q);    
    return querySnapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
       
    }));   
}

export const getBookById = async (id) => {
    const docSnap = await getDoc(doc(db, 'bookstore', id));
    return {
        id: id,
        ...docSnap.data()
    }
}

export default fetchData;