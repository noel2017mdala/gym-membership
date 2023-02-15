import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import Heading from './Heading'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ActionButton from './Navbar/ActionButton'
import benifitsImage from '../images/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the art facilities',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of diverse classes",
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and pro trainers',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
  icon?: JSX.Element
  title?: string
  desc?: string
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <Heading>More than just a gym</Heading>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* {Benefits} */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              desc={benefit.desc}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* {Graphics and description} */}
        <div className="mt-16 items-center justify-between  gap-20 md:mt-28 md:flex">
          {/* {Graphics} */}
          <img
            className="mx-auto"
            alt="Benefits-page-graphics"
            src={benifitsImage}
          />

          {/* {Description} */}
          <div>
            {/* {Title} */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                >
                  <Heading>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className="text-primary-500">FIT</span>
                  </Heading>
                </motion.div>
              </div>
            </div>
            {/* {Description} */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -50,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* {Button} */}

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const Benefit = ({ icon, title, desc, setSelectedPage }: Props) => {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{desc}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => {
          setSelectedPage(SelectedPage.ContactUs)
        }}
        href={SelectedPage.ContactUs}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default Benefits
