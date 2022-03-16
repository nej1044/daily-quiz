import { useQuery,gql } from "@apollo/client";
import { useRouter } from "next/router";
import ReadUI from "./presenter";

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

export default function Read() {
  const router = useRouter()
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {productId: router.query.myId}
  })
  return <ReadUI data={data} />
}