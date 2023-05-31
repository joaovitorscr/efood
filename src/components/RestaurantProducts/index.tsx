import { useState } from 'react'

import { getDescription, parseToBrl } from '../../utils/index'

import * as S from './styles'

import close from '../../assets/images/close.svg'

type Props = {
  img: string
  title: string
  description: string
  portion: string
  price: number
}

const RestaurantProducts = ({
  description,
  img,
  title,
  portion,
  price
}: Props) => {
  const [open, setOpen] = useState(false)

  function handleModal() {
    setOpen(true)
  }

  return (
    <>
      <S.Card>
        <S.CardContent>
          <img src={img} alt={title} />
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDescription>
            {getDescription(description, 110)}
          </S.CardDescription>
          <S.CardButton type="button" onClick={handleModal}>
            Mais detalhes
          </S.CardButton>
        </S.CardContent>
      </S.Card>

      {open ? (
        <S.Modal>
          <S.ModalContent>
            <img src={img} alt={title} />
            <S.OpenCardInfo>
              <div>
                <S.CardTitle>{title}</S.CardTitle>
                <button type="button" onClick={() => setOpen(false)}>
                  <img src={close} alt="Close" title="Close" />
                </button>
              </div>
              <S.CardDescription>
                {description}
                <p>Serve: de {portion}</p>
              </S.CardDescription>

              <S.CardButton type="button">
                Adicionar ao carrinho - {parseToBrl(price)}
              </S.CardButton>
            </S.OpenCardInfo>
          </S.ModalContent>
          <div className="overlay" onClick={() => setOpen(false)} />
        </S.Modal>
      ) : (
        <></>
      )}
    </>
  )
}

export default RestaurantProducts
