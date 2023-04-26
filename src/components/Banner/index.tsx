import bannerLaDolce from '../../assets/images/food/restaurants/bannerLaDolce.png'
import { BannerBg, BannerSubTitle, BannerTitle } from './styles'

const Banner = () => (
  <div>
    <BannerBg style={{ backgroundImage: `url(${bannerLaDolce})` }}>
      <div className="container">
        <BannerSubTitle>Italiana</BannerSubTitle>
        <BannerTitle>La Dolce Vita Trattoria</BannerTitle>
      </div>
    </BannerBg>
  </div>
)

export default Banner
