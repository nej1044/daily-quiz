import * as S from './mapFilter.styles'

const MapProductsUI=(props)=>{
    return (
        <>
        <div>
          {props.data?.fetchProducts.map((el, idx)=>(
            <S.Row key={el?._id}>
              <S.Column><input type="checkbox" /></S.Column>
              <S.Column>{idx+1}</S.Column>
              <S.Column>{el?.name}</S.Column>
              <S.Column>{el?.price}</S.Column>
              <S.Column>{el?.seller}</S.Column>
              <S.Column>{el?.createdAt}</S.Column>
              <S.Column><button id={el?._id} onClick={props.handleDelete}>삭제하기</button></S.Column>
            </S.Row>
          ))}
        </div>
      </>
    )
}

export default MapProductsUI