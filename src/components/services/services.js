import './scss/services.scss'
import SectionHeader from "../sectionHeader"
import Subtitle from './subtitle'
import Title from './title'
import Slider from './slider'
import Features from './features'

function Services() {
  return (
    <section className="services">
      <SectionHeader text="Services" />
      <div className="services__wrapper first-section">
        <div className="container">
          <Title text="SERVICES WE PROVIDE" />
          <Subtitle className="services__subtitle" text={"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.\n Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."} />

          <div className="services__slider">
            <Slider items={SliderInfo} />
          </div>
        </div>

      </div>
      <div className="services__wrapper second-section">
        <div className="container">
          <Title text="SERVICES WE PROVIDE" />
          <Subtitle className="services__subtitle" text={"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.\n Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."} />
          <div className="services__features">
            <Features items={FeaturesInfo} />
          </div>
        </div>
      </div>
    </section>
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
