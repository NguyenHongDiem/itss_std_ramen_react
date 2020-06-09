import React, {Component} from 'react';

class OrderForm extends Component {
  onSubmit = (e) => {
       e.preventDefault()
      
      let newOrder = {
        id: this.props.data.orders.length + 1,
        ramen: this.refs.ramen.value,
        size: this.refs.size.value,
        chashu: this.refs.chashu.value
      }
      this.props.addOrder(newOrder)
      
      this.refs.ramen.value="選んでください"
      this.refs.size.value="選んでください"
      this.refs.chashu.value="選んでください"
  }

  render() {
    let ramens = this.props.data.menu.ramens
    let sizes = this.props.data.menu.sizes
    let chashu = this.props.data.menu.chashu
    
    let ramenTypes = ramens.map((ramen, key) => {
      return <option key={key} value={ramen}>{ramen}</option>
    })
    
    let ramenSizes = sizes.map((size, key) => {
      return <option key={key} value={size}>{size}</option>
    })
    
    let chashuSpoons = chashu.map((spoon, key) => {
      return <option key={key} value={spoon}>{spoon}</option>
    })
    
    return (
      <form
        onSubmit= {this.onSubmit}>
        <h4 class="mb-3">注文をどうぞ</h4>
        <div class="mb-3">
          <label>どのラーメンにしますか？</label>
          <select
            className="custom-select" 
            ref="ramen" >
            <option defaultvalue="">選んでください</option>
            {ramenTypes}
          </select>
        </div>            
        <div class="mb-3">
          <label>大きさはどうしますか？</label>
          <select
            className="custom-select" 
            ref="size">
            <option defaultvalue="">選んでください</option>
            {ramenSizes}
          </select>
        </div>            
        <div class="mb-3">
          <label>チャーシューは何枚ですか？</label>
          <select
            className="custom-select" 
            ref="chashu">
            <option defaultvalue="">選んでください</option>
            {chashuSpoons}
          </select>
        </div>            
        <input className="btn btn-success" type="submit" value="注文" />
      </form>
    )
  }
}

export default OrderForm;