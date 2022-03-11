import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation crateProduct($seller:String, $createProductInput: CreateProductInput!) {
    createProduct(seller:$seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

export default function DynamicRoutingWrite() {
  const [ createProduct ] = useMutation( CREATE_PRODUCT )
  const [seller, setSeller] = useState('')
  const [name, setName] = useState('')
  const [detail, setDetail] = useState('')
  const [price, setPrice] = useState(0)
  const router = useRouter()
  
  function handleChangeSeller(event) {
    setSeller(event.target.value)
  }

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangeDetail(event) {
    setDetail(event.target.value)
  }

  function handleChangePrice(event) {
    setPrice(event.target.value)
  }

  async function handleClickProduct() {
    try {
      const result = await createProduct({
        variables: { seller, createProductInput: {name, detail, price:Number(price)} }
      })
      console.log(result)
      alert('상품 등록이 완료되었습니다.')
      router.push(`05-02-dynamic-routing-read/${result.data.createProduct._id}`)
    } catch(error) {
      alert(`상품 등록에 실패했습니다. ${error.message}`)
    }
  }
  

  return (
    <div>
      판매자: <input type="text" onChange={handleChangeSeller}/><br />
      상품명: <input type="text" onChange={handleChangeName}/><br />
      상품내용: <input type="text" onChange={handleChangeDetail}/><br />
      상품가격: <input type="text" onChange={handleChangePrice}/><br />
      <br />
      <button onClick={handleClickProduct}>상품 등록</button>
    </div>
  )
}