import React, {Component} from 'react';

class CurrentOrder extends Component {
  onClick = (e, id) => {
      this.props.deleteOrder(id)
  }
  render() {
    let orders = this.props.data.map((order, key) => {
      return (
        <li 
          key={key}
          class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">{order.ramen}
                <medium class="text-muted">  {order.size}</medium>
              </h6>
              <small class="text-muted">チャーシュー {order.chashu}</small>
            </div>
            <span>
              <button 
                type="button" 
                className="btn btn-danger btn-xs"
                onClick={()=>this.props.deleteOrder(order.id)}>
                削除
              </button>
            </span>
        </li>
      )
    })
    return (
      <div className="container">
        <h4>注文リスト</h4>          
        <ul class="list-group mb-3">
          {orders}
        </ul>
        {
          !orders.length && 
            <div className="alert alert-info" role="alert">
              まだ注文がありません
            </div>
        }
      </div>
    )
  }
}
export default CurrentOrder;