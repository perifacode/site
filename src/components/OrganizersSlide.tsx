import { Flex, Heading } from '@chakra-ui/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Swiper.module.scss';
import { Organizer, OrganizerProps } from './Organizer';


export type OrganizersSlideProps = {
  organizers: OrganizerProps[]
}

export const OrganizersSlide = ({ organizers }: OrganizersSlideProps) => {
  return (
    <Flex
      h="60vh"
      bg="brand.primary"
      direction="column"
    >
      <Heading as="h2" py={12} textAlign="center">Organizadores</Heading>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={3}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiper}
        breakpoints={
          {
            320: {
              slidesPerView: 1
            }, 
            800: {
              slidesPerView: 3
            }
          }
        }
      >
        
        {
          organizers.map(organizer => {
            return (
              <SwiperSlide 
                key={organizer.name}
              >
                <Organizer
                  name={organizer.name}
                  avatar={organizer.avatar}
                  username={organizer.username}
                  miniBio={organizer.miniBio}
                /> 
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </Flex>
  )
}
