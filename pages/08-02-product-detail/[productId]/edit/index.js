import {gql, useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const UPDATE_PRODUCT = gql`
  mutation updateProduct($productId: ID, $updateProductInput: UpdateProductInput!) {
    updateProduct(productId: $productId, updateProductInput: $updateProductInput) {
      _id
      number
      message
    }
  }
`

const ProductUpdatePage=()=> {
  const router = useRouter()
  const [updateProduct] = useMutation(UPDATE_PRODUCT)
  const [seller, setSeller] = useState('')
  const [name, setName] = useState('')
  const [detail, setDetail] = useState('')
  const [price, setPrice] = useState('')

  const onChangeSeller=(event)=> {
    setSeller(event.target.value)
  }

  const onChangeName=(event)=> {
    setName(event.target.value)
  }

  const onChangeDetail=(event)=> {
    setDetail(event.target.value)
  }

  const onChangPrice=(event)=> {
    setPrice(Number(event.target.value))
  }

  const onClickUpdate =async()=> {
    const result = await updateProduct({variables: {
      productId: router.query.productId,
      updateProductInput: {
        name,
        detail,
        price
      }
    }})
    router.push(`/08-02-product-detail/${result.data?.updateProduct._id}`)
  }
    return(
      <>
        <div>
          <h1>수정페이지</h1>
          판매자 <input type="text" onChange={onChangeSeller} /><br />
          제품명 <input type="text" onChange={onChangeName} /><br />
          상세내용 <input type="text" onChange={onChangeDetail} /><br />
          가격 <input type="number" onChange={onChangPrice} /><br />
          <button onClick={onClickUpdate}>수정하기</button>
        </div>
      </>
    )
  }
  
  export default ProductUpdatePage