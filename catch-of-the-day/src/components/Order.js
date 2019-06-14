import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
    renderOrder = (key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      // Make sure the fish is loaded before we continue
      if (!fish) return null;

      if (!isAvailable) {
        return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>;
      }

      return (
        <CSSTransition classNames="order" key={key} timeout={{enter: 250, exit: 250}}>
          <li>
            {count} lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
          </li>
        </CSSTransition>
      );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((previousTotal, key) => {
          const fish = this.props.fishes[key];
          const count = this.props.order[key];
          const isAvailable = fish && fish.status === 'available';

          if (isAvailable) {
            return previousTotal + (count * fish.price)
          }

          return previousTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                  { orderIds.map(this.renderOrder) }
                </TransitionGroup>
                <div className="total">Total: <strong>{formatPrice(total)}</strong></div>
            </div>
        );
    }
}

export default Order;
