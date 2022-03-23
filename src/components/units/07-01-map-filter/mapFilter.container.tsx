import {useQuery,useMutation } from '@apollo/client'
import MapProductsUI from './mapFilter.presenter'
import { DELETE_PRODUCT, FETCH_PRODUCTS } from './mapFilter.queries'
import { MouseEvent } from 'react'

const MapProducts=()=>{
    const { data } = useQuery(FETCH_PRODUCTS)
    const [ deleteProduct ] = useMutation(DELETE_PRODUCT)
  
    const handleDelete = async(event: MouseEvent<HTMLButtonElement>)=> {
      try {
        await deleteProduct({
          variables: { productId: (event.target as HTMLButtonElement).id },
          refetchQueries: [{ query: FETCH_PRODUCTS }] 
        })
      } catch(error) {
        if (error instanceof Error) alert(error.message)
      }
    }
    return <MapProductsUI data={data} handleDelete={handleDelete} />
}

export default MapProducts