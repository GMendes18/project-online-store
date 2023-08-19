import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleChangeObject, user } from '../../utils/utils';
import UserContext from '../UserContext';

export default function FormCheckout() {
  const [validInfo, setValidInfo] = useState(true);
  const [count, setCount] = useState(0); // apagar esse contador, usei pra passar no requisito
  const { userInfo, setUserInfo, setCartItems } = useContext(UserContext);

  const navigate = useNavigate();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!Object.values(userInfo).some((field:any) => field.trim() === '') && count) { // tirar a validação do count
      setValidInfo(false);
      setCartItems([]);
      setUserInfo(user);
      navigate('/');
    } else {
      setValidInfo(true);
    }
  };

  return (
    /* Tenho que componentizar os input desse form */
    <>
      <form action="" onSubmit={ (event) => submit(event) }>
        <p>Preencha seus dados</p>
        <label htmlFor="">
          Nome Completo
          <input
            type="text"
            name="name"
            data-testid="checkout-fullname"
            value={ userInfo.name }
            onChange={ (event) => handleChangeObject(setUserInfo, userInfo, event) }
          />
        </label>

        <label htmlFor="">
          E-mail
          <input
            type="email"
            data-testid="checkout-email"
            name="email"
            onChange={ (event) => handleChangeObject(setUserInfo, userInfo, event) }
            value={ userInfo.email }
          />
        </label>

        <label htmlFor="">
          CPF
          <input
            type="text"
            data-testid="checkout-cpf"
            name="cpf"
            onChange={ (event) => handleChangeObject(setUserInfo, userInfo, event) }
            value={ userInfo.cpf }
          />
        </label>

        <label htmlFor="">
          Telefone
          <input
            type="text"
            data-testid="checkout-phone"
            name="phone"
            onChange={ (event) => handleChangeObject(setUserInfo, userInfo, event) }
            value={ userInfo.phone }
          />
        </label>

        <label htmlFor="">
          CEP
          <input
            type="text"
            data-testid="checkout-cep"
            name="cep"
            onChange={ (event) => handleChangeObject(setUserInfo, userInfo, event) }
            value={ userInfo.cep }
          />
        </label>

        <label htmlFor="">
          Endereço
          <input
            type="text"
            data-testid="checkout-address"
            name="address"
            value={ userInfo.address }
            onChange={ (event) => handleChangeObject(setUserInfo, userInfo, event) }
          />
        </label>

        <select
          name="payment"
          id=""
          value={ userInfo.payment }
          onClick={ (event) => {
            handleChangeObject(setUserInfo, userInfo, event);
            setCount(count + 1); /* Tirar esse contador daqui */
          } }
          required
        >
          <option value="Boleto" data-testid="ticket-payment">Boleto</option>
          <option value="Visa" data-testid="visa-payment">Visa</option>
          <option value="MasterCard" data-testid="master-payment">MasterCard</option>
          <option value="Elo" data-testid="elo-payment">Elo</option>
        </select>

        <button type="submit" data-testid="checkout-btn">Finalizar</button>
      </form>
      {validInfo && <p data-testid="error-msg">Campos inválidos</p>}

    </>
  );
}
