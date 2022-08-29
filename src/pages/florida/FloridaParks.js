import aking from './animalkingdom.avif';
import epcot from './epcot.avif';
import hstd from './hollywoodstudios.avif';
import mking from './magickingdom.avif'


const FLORIDAPARKS = [
    {
        name: 'Magic Kingdom',
        location: 'Orlando, Florida',
        img: mking,
        alt: 'Picture of Mickey and Minnie',
        linkto: '/magickingdom',
    },
    {
        name: 'Epcot',
        location: 'Orlando, Florida',
        img: epcot,
        alt: 'Picture of Epcot',
        linkto: '/epcot',
    },
    {
        name: 'Hollywood Studios',
        location: 'Orlando, Florida',
        img: hstd,
        alt: 'Picture of Hollywood Studios',
        linkto: '/hollywoodstudios',
    },
    {
        name: 'Animal Kingdom',
        location: 'Orlando, Florida',
        img: aking,
        alt: 'Picutre of Animal Kingdom',
        linkto: '/animalkingdom'
    }
]

export default FLORIDAPARKS;