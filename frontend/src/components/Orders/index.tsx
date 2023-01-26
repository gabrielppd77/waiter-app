import { Order } from "../../@types/Order";
import { OrdersBoard } from "../OrdersBoard";

import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "1",
    status: "DONE",
    table: "Mesa 1",
    products: [
      {
        _id: "11",
        product: {
          imagePath: "123",
          name: "123",
          price: 32,
        },
        quantity: 2,
      },
      {
        _id: "12",
        product: {
          imagePath: "123",
          name: "123",
          price: 32,
        },
        quantity: 2,
      },
      {
        _id: "13",
        product: {
          imagePath: "123",
          name: "123",
          price: 32,
        },
        quantity: 2,
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⏰" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={orders} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]} />
    </Container>
  );
}
