export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'our classes',
  ContactUs = 'Contact us',
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  desc: string
}

export interface ClassType{
  name: string,
  description?: string,
  image: string
}
