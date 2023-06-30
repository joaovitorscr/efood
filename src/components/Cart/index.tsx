import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import * as Yup from 'yup'
import { RootReducer } from '../../store'
import { remove, close, clear } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import { useEffect, useState } from 'react'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'

const Cart = () => {
  const [cartScreen, setCartScreen] = useState(true)
  const [checkout, setCheckout] = useState(false)
  const [multiStepForm, setMultiStepForm] = useState(false)
  const [formScreen, setFormScreen] = useState(0)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      deliverName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      deliverName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .max(8, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().min(
        4,
        'O campo precisa ter pelo menos 4 caracteres'
      ),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.deliverName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  useEffect(() => {
    if (!isSuccess) {
      setCheckout(true)
    }
  }, [isSuccess, dispatch])

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {checkout && data ? (
          <S.CheckoutContainer>
            <h3>Pedido realizado - {data.orderId}</h3>
            <div>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <br />
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <br />
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <br />
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </div>
            <S.DeliverButton
              onClick={() => [
                setCheckout(false),
                setCartScreen(true),
                dispatch(clear()),
                closeCart()
              ]}
            >
              Concluir
            </S.DeliverButton>
          </S.CheckoutContainer>
        ) : (
          <>
            {cartScreen ? (
              <>
                {items.length > 0 ? (
                  <>
                    <ul>
                      {items.map((item) => (
                        <S.CartItem key={item.id}>
                          <img src={item.foto} alt={item.nome} />
                          <div>
                            <h3>{item.nome}</h3>
                            <p>{parseToBrl(item.preco)}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            type="button"
                          />
                        </S.CartItem>
                      ))}
                    </ul>
                    <S.TotalContainer>
                      <p>Valor total</p>
                      <span>{parseToBrl(getTotalPrice(items))}</span>
                    </S.TotalContainer>
                    <S.DeliverButton
                      onClick={() => {
                        setCartScreen(false),
                          setMultiStepForm(true),
                          setFormScreen(0)
                      }}
                    >
                      Continuar com a entrega
                    </S.DeliverButton>
                  </>
                ) : (
                  <p>
                    O carrinho está vazio, adicione pelo menos um produto para
                    continuar com a compra
                  </p>
                )}
              </>
            ) : (
              <>
                {multiStepForm && (
                  <form onSubmit={form.handleSubmit}>
                    {formScreen === 0 && (
                      <S.CustomForm>
                        <h3>Entrega</h3>
                        <div>
                          <label htmlFor="deliverName">Quem irá receber</label>
                          <input
                            type="text"
                            id="deliverName"
                            name="deliverName"
                            value={form.values.deliverName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('deliverName') ? 'error' : ''
                            }
                          />
                        </div>
                        <div>
                          <label htmlFor="address">Endereço</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('address') ? 'error' : ''
                            }
                          />
                        </div>
                        <div>
                          <label htmlFor="city">Cidade</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('city') ? 'error' : ''
                            }
                          />
                        </div>
                        <div className="flexContainer">
                          <div className="cepField">
                            <label htmlFor="cep">CEP</label>
                            <input
                              type="text"
                              id="cep"
                              name="cep"
                              value={form.values.cep}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cep') ? 'error' : ''
                              }
                            />
                          </div>
                          <div>
                            <label htmlFor="houseNumber">Número</label>
                            <input
                              type="text"
                              id="houseNumber"
                              name="houseNumber"
                              value={form.values.houseNumber}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('houseNumber') ? 'error' : ''
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="complement">
                            Complemento (opcional)
                          </label>
                          <input
                            type="text"
                            id="complement"
                            name="complement"
                            value={form.values.complement}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('complement') ? 'error' : ''
                            }
                          />
                        </div>
                        <S.DeliverButton
                          onClick={() => setFormScreen(1)}
                          type="button"
                          disabled={form.isValid}
                        >
                          Continuar com o pagamento
                        </S.DeliverButton>
                        <S.DeliverButton
                          type="button"
                          onClick={() => {
                            setCartScreen(true), setFormScreen(0)
                          }}
                        >
                          Voltar para o carrinho
                        </S.DeliverButton>
                      </S.CustomForm>
                    )}
                    {formScreen === 1 && (
                      <S.CustomForm>
                        <h3>
                          Pagamento - Valor a pagar{' '}
                          {parseToBrl(getTotalPrice(items))}
                        </h3>
                        <div>
                          <label htmlFor="cardName">Nome no cartão</label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={form.values.cardName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardName') ? 'error' : ''
                            }
                          />
                        </div>
                        <div className="flexContainer">
                          <div>
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={form.values.cardNumber}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardNumber') ? 'error' : ''
                              }
                            />
                          </div>
                          <div>
                            <label htmlFor="cardCode">CVV</label>
                            <input
                              type="text"
                              id="cardCode"
                              name="cardCode"
                              value={form.values.cardCode}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardCode') ? 'error' : ''
                              }
                            />
                          </div>
                        </div>
                        <div className="flexContainer">
                          <div>
                            <label htmlFor="expiresMonth">
                              Mês de vencimento
                            </label>
                            <input
                              type="text"
                              id="expiresMonth"
                              name="expiresMonth"
                              value={form.values.expiresMonth}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('expiresMonth')
                                  ? 'error'
                                  : ''
                              }
                            />
                          </div>
                          <div>
                            <label htmlFor="expiresYear">
                              Ano de vencimento
                            </label>
                            <input
                              type="text"
                              id="expiresYear"
                              name="expiresYear"
                              value={form.values.expiresYear}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('expiresYear') ? 'error' : ''
                              }
                            />
                          </div>
                        </div>
                        <S.DeliverButton
                          type="submit"
                          onClick={() => form.handleSubmit}
                          title="Clique aqui para finalizar a compra"
                          disabled={isLoading}
                        >
                          {isLoading
                            ? 'Finalizando compra...'
                            : 'Finalizar compra'}
                        </S.DeliverButton>
                        <S.DeliverButton onClick={() => setFormScreen(0)}>
                          Voltar para a edição do endereço
                        </S.DeliverButton>
                      </S.CustomForm>
                    )}
                  </form>
                )}
              </>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
