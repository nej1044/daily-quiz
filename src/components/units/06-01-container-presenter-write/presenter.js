const WriteUI=(props)=>{
  return(
      <div>
      판매자: <input type="text" onChange={props.handleChangeSeller}/><br />
      상품명: <input type="text" onChange={props.handleChangeName}/><br />
      상품내용: <input type="text" onChange={props.handleChangeDetail}/><br />
      상품가격: <input type="text" onChange={props.handleChangePrice}/><br />
      <br />
      <button onClick={props.handleClickProduct}>상품 등록</button>
    </div>
  )
}

export default WriteUI