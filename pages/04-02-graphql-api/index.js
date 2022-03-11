import { useMutation, gql } from '@apollo/client'
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

const GraphQLAPI=()=>{
    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [ mySeller, setMySeller] = useState('')
    const [ myName, setMyName] = useState('')
    const [ myDetail, setMyDetail] = useState('')
    const [ myPrice, setMyPrice] = useState(0)
  
    function onChangeMySeller(event) {
      setMySeller(event.target.value)
    }
  
    function onChangeMyName(event) {
      setMyName(event.target.value)
    }
  
    function onChangeMyDetail(event) {
      setMyDetail(event.target.value)
    }
  
    function onChangeMyPrice(event) {
      setMyPrice(event.target.value)
    }
  
    // 함수
    async function zzz() {
      const result = await createProduct({
        variables: {
          seller: mySeller, 
          createProductInput: {
            name: myName, 
            detail: myDetail, 
            price: Number(myPrice)
            }
        } 
      })
      console.log(result)
    }
    
  
    return (
      <>
        판매자: <input type="text" onChange={onChangeMySeller}/><br />
        상품명: <input type="text" onChange={onChangeMyName}/><br />
        상품내용: <input type="text" onChange={onChangeMyDetail}/><br />
        상품가격: <input type="text"  onChange={onChangeMyPrice}/><br />
        <button onClick={zzz}>게시물 등록</button>
      </>
    )
}

export default GraphQLAPI;