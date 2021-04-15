import React, {useRef} from 'react';

function OrderForm(props) {
  const ramen_ref = useRef();
  const size_ref = useRef();
  const chashu_ref = useRef();
  
  const onSubmit = (e) => {
       e.preventDefault()
      
      const newOrder = {
        id: props.data.orders.length + 1,
        ramen: ramen_ref.current.value,
        size: size_ref.current.value,
        chashu: chashu_ref.current.value
      }
      props.addOrder(newOrder)
  }


  const ramens = props.data.menu.ramens
  const sizes = props.data.menu.sizes
  const chashu = props.data.menu.chashu
  
  const ramenTypes = ramens.map((ramen, key) => {
    return <option key={key} value={ramen}>{ramen}</option>
  })
  
  const ramenSizes = sizes.map((size, key) => {
    return <option key={key} value={size}>{size}</option>
  })
  
  const chashuSpoons = chashu.map((spoon, key) => {
    return <option key={key} value={spoon}>{spoon}</option>
  })
  
  return (
    <form
      onSubmit= {onSubmit}>
      <h4 class="mb-3">注文をどうぞ</h4>
      <div class="mb-3">
        <label>どのラーメンにしますか？</label>
        <select
          className="custom-select" 
          ref={ramen_ref} >
          <option defaultvalue="">選んでください</option>
          {ramenTypes}
        </select>
      </div>            
      <div class="mb-3">
        <label>大きさはどうしますか？</label>
        <select
          className="custom-select" 
          ref={size_ref} >
          <option defaultvalue="">選んでください</option>
          {ramenSizes}
        </select>
      </div>            
      <div class="mb-3">
        <label>チャーシューは何枚ですか？</label>
        <select
          className="custom-select" 
          ref={chashu_ref} >
          <option defaultvalue="">選んでください</option>
          {chashuSpoons}
        </select>
      </div>            
      <input className="btn btn-success" type="submit" value="注文" />
    </form>
  )
}


export default OrderForm;