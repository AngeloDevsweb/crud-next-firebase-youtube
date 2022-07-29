import React from 'react'

//importar firebase
import firebaseApp from '../../firebase'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { async } from '@firebase/util'
import Router, { useRouter } from 'next/router'
const db = getFirestore(firebaseApp)



export default function ProductoSimple({producto}) {

    const {query} = useRouter()
    const router = useRouter()

    const deleteProduct = async()=>{
        const {product} = query
        await deleteDoc(doc(db, 'producto', product))
        router.push('/')
    }

  return (
    <div>
      <div className='container'>
            <div className='card'>
                <div className='card card-header'>
                    <h5>{producto.nombre}</h5>
                </div>

                <div className='card car-body'>
                    <p>{producto.precio}$</p>
                    <p>{producto.cantidad}unid.</p>
                    <button className='btn btn-danger' onClick={deleteProduct}>Eliminar</button>
                    <button className='btn btn-secondary mt-2' onClick={()=>router.push('/')}>Volver</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps({query: {product}}){
    const docRef = doc(db, 'producto', product)
    const docSnap = await getDoc(docRef)
    const producto = docSnap.data()

    return{
        props:{
            producto:producto
        }
    }
}