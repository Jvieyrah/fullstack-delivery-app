import React, { useContext, useEffect } from 'react';
import CardSaleSeller from '../../components/SellersComponents/CardSaleSeller';
import NavigationSeller from '../../components/SellersComponents/NavigationSeller';
import ProductContext from '../../context/ProductContext';

function SellerOrders() {
  const { orders, fetchOrders } = useContext(ProductContext);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <header>
        <NavigationSeller />
      </header>

      <main>
        { orders.map((order) => (<CardSaleSeller
          key={ order.id }
          { ...order }
        />))}
      </main>

    </div>
  );
}

export default SellerOrders;
