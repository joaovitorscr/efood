import { BannerBg, BannerSubTitle, BannerTitle } from './styles'

type Props = {
  cover: string
  title: string
  type: string
}

const Banner = ({ cover, title, type }: Props) => (
  <div>
    <BannerBg style={{ backgroundImage: `url(${cover})` }}>
      <div className="container">
        <BannerSubTitle>{type}</BannerSubTitle>
        <BannerTitle>{title}</BannerTitle>
      </div>
    </BannerBg>
  </div>
)

export default Banner
