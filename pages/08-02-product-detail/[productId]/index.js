import { useRouter } from "next/router"
import { gql, useQuery} from '@apollo/client'

const FETCH_PRODUCT=gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`

const ProductDetailPage=()=>{
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT, { variables: {
        productId: router.query.productId
    }})

    const moveUpdate=()=> {
        router.push(`/08-02-product-detail/${router.query.productId}/edit`)
    }

    return(
        <>
        <div>
          <h1>등록페이지</h1>
          판매자: <span>{data?.fetchProduct.seller}</span><br />
          상품명: <span>{data?.fetchProduct.name}</span><br />
          상세내용: <span>{data?.fetchProduct.detail}</span><br />
          가격: <span>{data?.fetchProduct.price}</span><br />
          <button onClick={moveUpdate}>수정하기</button>
        </div>
      </>
    )
}

export default ProductDetailPage