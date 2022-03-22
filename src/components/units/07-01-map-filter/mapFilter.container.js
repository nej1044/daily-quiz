import {gql, useQuery,useMutation } from '@apollo/client'
import MapProductsUI from './mapFilter.presenter'


const FETCH_PRODUCTS = gql `
query {
  fetchProducts {
    _id
    seller
    name
    detail
    price
    createdAt
  }
}
`

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`

const MapProducts=()=>{
    const { data, refetch } = useQuery(FETCH_PRODUCTS)
    const [ deleteProduct ] = useMutation(DELETE_PRODUCT)
  
    const handleDelete = async(event)=> {
      try {
        await deleteProduct({
          variables: { productId: event.target.id },
          refetchQueries: [{ query: FETCH_PRODUCTS }] 
        })
      } catch(error) {
        alert(error.message)
      }
    }
    return <MapProductsUI data={data} handleDelete={handleDelete} />
}

export default MapProducts