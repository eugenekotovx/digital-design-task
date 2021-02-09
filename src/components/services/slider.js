import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ReactComponent as ArrowLeft } from '../../Icons/ArrowL.svg'
import { ReactComponent as ArrowRight } from '../../Icons/ArrowR.svg'
function Slider({ items }) {
    return <Carousel
        className="carousel-container"
        slidesPerPage={3}
        slidesPerScroll={1}
        offset={87}
        itemWidth={210}
        width={940}
        arrowLeft={<ArrowLeft className="slider-item__arrow--left slider-item__arrow" />}
        arrowRight={<ArrowRight className="slider-item__arrow--right slider-item__arrow" />}
        addArrowClickHandler
    >
        {items.map(item => (
            <div key={item.id} className="slider-item">
                <img className="slider-item__image" src={item.imgSrc} />
                <h1 className="slider-item__title">{item.title}</h1>
                <p className="slider-item__description">{item.description}</p>
            </div>
        ))}
    </Carousel>
}

export default Slider