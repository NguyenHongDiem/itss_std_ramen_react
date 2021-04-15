import React, {useRef} from 'react';

function OrderForm(props) {
  const onSubmit = (e) => {
       e.preventDefault()
      
      const refs= {
        ramen:"選んでください",
        size:"選んでください",
        chashu:"選んでください"
      }
      
      const newOrder = {
        id: props.data.orders.length + 1,
        ramen: refs.ramen,
        size: refs.size,
        chashu: refs.chashu
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
          ref={useRef("ramen")} >
          <option defaultvalue="">選んでください</option>
          {ramenTypes}
        </select>
      </div>            
      <div class="mb-3">
        <label>大きさはどうしますか？</label>
        <select
          className="custom-select" 
          ref={useRef("size")} >
          <option defaultvalue="">選んでください</option>
          {ramenSizes}
        </select>
      </div>            
      <div class="mb-3">
        <label>チャーシューは何枚ですか？</label>
        <select
          className="custom-select" 
          ref={useRef("chashu")} >
          <option defaultvalue="">選んでください</option>
          {chashuSpoons}
        </select>
      </div>            
      <input className="btn btn-success" type="submit" value="注文" />
    </form>
  )
}


export default OrderForm;