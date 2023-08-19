import { ProductProps, UserInfoProps } from '../types';

export function handleChange(setState: any, { value }:any) {
  setState(value);
}

export function totalPrice(items: ProductProps[]) {
  items.reduce(
    (acc, item) => acc + (item.price * item.quantityCart),
    0,
  ).toFixed(2);
}

export function handleChangeObject(setState: any, state: any, event:
React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  const { name, value } = event.target;
  setState({
    ...state,
    [name]: value,
  });
}

export const user = {
  name: '', email: '', cep: '', cpf: '', phone: '', address: '' } as UserInfoProps;
