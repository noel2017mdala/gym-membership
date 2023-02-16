import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { ClassType as OurClassType } from '../shared/types'
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"
import image5 from "../images/image5.png"
import image6 from "../images/image6.png"
import Heading from './Heading'


const ourClasses: Array<OurClassType> = [
        {
            name: "Weight Training Classes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: image1,
          },
          {
            name: "Yoga Classes",
            image: image2,
          },
          {
            name: "Ab Core Classes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: image3,
          },
          {
            name: "Adventure Classes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: image4,
          },
          {
            name: "Fitness Classes",
            image: image5,
          },
          {
            name: "Training Classes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: image6,
          },
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void
    name?:string,
    description?:string
    image?:string
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
   <section
   id='ourclasses'
   className='w-full bg-primary-100 py-40'
   >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5}}
     transition={{ duration: 0.5}}
     variants={{
       hidden: {
         opacity: 0,
         x: -50
       },
       visible: {
         opacity: 1,
         x: 0
       }
     }}

     className="mx-auto w-5/6"
    >

        <div className='md:w-3/5'>
            <Heading>
            OUR CLASSES
            </Heading>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
        </div>
    </motion.div>
<div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
    <ul className='w-[2800px] whitespace-nowrap'>
        {ourClasses.map((items: OurClassType, index) =>(
            <Class key={index}
            name={items.name}
            description={items.description}
            setSelectedPage={setSelectedPage}
            image={items.image}
            />
        ))}
    </ul>
</div>
    </motion.div>
   </section>
  )
}


const Class = ({name, description, setSelectedPage, image}: Props) =>{

    const overLayStyle = `p-5 absolute z-30 flex
    h-[380px] w-[480px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90
    `
    return (
        <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
            <div className={overLayStyle}>
            <p className='text-2xl'>{name}</p>
            <p className='mt-5'>{description}</p>
            </div>
            <img alt={`${image}`} src={image} />
        </li>
    )
}
export default OurClasses