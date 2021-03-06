import {gql, useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

const ProductNewPage=()=> {
  const router = useRouter()
  const [createProduct] = useMutation(CREATE_PRODUCT)
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

  const onClickSubmit =async()=> {
    const result = await createProduct({
      variables: {seller, createProductInput: {
        name,
        detail,
        price
      }}
    })
    router.push(`08-02-product-detail/${result.data?.createProduct._id}`)
  }
    return(
      <>
        <div>
          <h1>등록페이지</h1>
          판매자 <input type="text" onChange={onChangeSeller} /><br />
          제품명 <input type="text" onChange={onChangeName} /><br />
          상세내용 <input type="text" onChange={onChangeDetail} /><br />
          가격 <input type="number" onChange={onChangPrice} /><br />
          <button onClick={onClickSubmit}>등록하기</button>
        </div>
      </>
    )
  }
  
  export default ProductNewPage