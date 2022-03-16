import styled from '@emotion/styled'


const Row = styled.div`
display: flex;
`

const Column = styled.div`
width: 20%;
`

const MapProductsUI=(props)=>{
    return (
        <>
        <div>
          {data?.fetchProducts.map((el, idx)=>(
            <Row key={el?._id}>
              <Column><input type="checkbox" /></Column>
              <Column>{idx+1}</Column>
              <Column>{el?.name}</Column>
              <Column>{el?.price}</Column>
              <Column>{el?.seller}</Column>
              <Column>{el?.createdAt}</Column>
              <Column><button id={el?._id} onClick={handleDelete}>삭제하기</button></Column>
            </Row>
          ))}
        </div>
      </>
    )
}

export default MapProductsUI