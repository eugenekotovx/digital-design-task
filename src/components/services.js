import './services.scss'
import SectionHeader from "./sectionHeader"
import Title from './services/title'
import Slider from './services/slider'
import Features from './services/features'

function Services() {
  return (
    <div className="services">
      <SectionHeader text="Services" />
      <div className="services__wrapper first-section">
        <Title text="SERVICES WE PROVIDE" />
        <h2 className="services__subtitle">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. <br></br>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        </h2>
        <div className="services__slider">
          <Slider items={SliderInfo} />
        </div>
      </div>
      <div className="services__wrapper">
        <Title text="SERVICES WE PROVIDE" />
        <h2 className="services__subtitle">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. <br></br>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        </h2>
        <div className="services__features">
          <Features items={FeaturesInfo}/>
        </div>
      </div>
    </div>
  );
}


const SliderInfo = [
  {
    id: 1,
    imgSrc: "./ellipse.png",
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
  },
  {
    id: 2,
    imgSrc: "./ellipse.png",
    title: 'Design',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    id: 3,
    imgSrc: "./ellipse.png",
    title: 'Development',
    description: 'At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.',
  },
  {
    id: 4,
    imgSrc: "./ellipse.png",
    title: 'Branding 2',
    description: 'At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.',
  },
  {
    id: 5,
    imgSrc: "./ellipse.png",
    title: 'Design 2',
    description: 'At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.',
  },
  {
    id: 6,
    imgSrc: "./ellipse.png",
    title: 'Development 2',
    description: 'At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.',
  }
];

const FeaturesInfo = [
  {
    id: 1,
    imgSrc: "./ellipse2.png",
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
  },
  {
    id: 2,
    imgSrc: "./ellipse2.png",
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
  },
  {
    id: 3,
    imgSrc: "./ellipse2.png",
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
  },
  {
    id: 4,
    imgSrc: "./ellipse2.png",
    title: 'ROCKET SCIENCE',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
  }
];


export default Services;
