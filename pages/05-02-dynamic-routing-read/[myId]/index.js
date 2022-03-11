import { useQuery,gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`

export default function DynamicProdectRead() {
  const router = useRouter()
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {productId: router.query.myId}
  })
  return(
    <>
    <div>판매자: {data ? data.fetchProduct.seller : "loading..."}</div>
    <div>상품명: {data ? data.fetchProduct.name  : "loading..."}</div>
    <div>상품상세: {data ? data.fetchProduct.detail  : "loading..."}</div>
    <div>상품가격: {data ? data.fetchProduct.price  : "loading..."}</div>
  </>
  )
}