import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { getDescription, parseToBrl } from '../../utils/index'

import * as S from './styles'

import close from '../../assets/images/close.svg'
import { add, open } from '../../store/reducers/cart'

export type Product = {
  id: number
  preco: number
  porcao: string
  descricao: string
  foto: string
  nome: string
}

type Props = {
  product: Product
}

const RestaurantProducts = ({ product }: Props) => {
  const [openModal, setOpenModal] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(product))
    setOpenModal(false)
    dispatch(open())
  }

  return (
    <>
      <S.Card>
        <S.CardContent>
          <img src={product.foto} alt={product.nome} />
          <S.CardTitle>{product.nome}</S.CardTitle>
          <S.CardDescription>
            {getDescription(product.descricao, 110)}
          </S.CardDescription>
          <S.CardButton type="button" onClick={() => setOpenModal(true)}>
            Mais detalhes
          </S.CardButton>
        </S.CardContent>
      </S.Card>

      {openModal && (
        <S.Modal>
          <S.ModalContent>
            <img src={product.foto} alt={product.nome} />
            <S.OpenCardInfo>
              <div>
                <S.CardTitle>{product.nome}</S.CardTitle>
                <button type="button" onClick={() => setOpenModal(false)}>
                  <img src={close} alt="Close" title="Close" />
                </button>
              </div>
              <S.CardDescription>
                {product.descricao}
                <p>Serve: de {product.porcao}</p>
              </S.CardDescription>
              <S.CardButton type="button" onClick={addToCart}>
                Adicionar ao carrinho - {parseToBrl(product.preco)}
              </S.CardButton>
            </S.OpenCardInfo>
          </S.ModalContent>
          <div className="overlay" onClick={() => setOpenModal(false)} />
        </S.Modal>
      )}
    </>
  )
}

export default RestaurantProducts
