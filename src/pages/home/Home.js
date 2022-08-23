import ParkList from './ParkList';
import { Link } from 'react-router-dom';

const PARKS = [
    {
        name: 'Disneyland',
        location: 'Anaheim, California',
        img: "https://images.unsplash.com/photo-1484923720570-4bc210954735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        alt: 'Relevant photo of Disney park',
        linkto: '/disneyland',
    },
    {
        name: 'Magic Kingdom',
        location: 'Orlando, Florida',
        img: "https://images.unsplash.com/photo-1588882929086-51acd6e39954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        alt: 'Picture of Mickey and Minnie',
        linkto: '/magickingdom',
    },
    {
        name: 'Epcot',
        location: 'Orlando, Florida',
        img: "https://images.unsplash.com/photo-1554324042-88b7823c4c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXBjb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        alt: 'Picture of Epcot',
        linkto: '/epcot',
    },
    {
        name: 'Hollywood Studios',
        location: 'Orlando, Florida',
        img: "https://images.unsplash.com/photo-1557159437-0dc55fdcc7c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9sbHl3b29kJTIwc3R1ZGlvc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60",
        alt: 'Picture of Hollywood Studios',
        linkto: '/hollywoodstudios',
    },
    {
        name: 'Animal Kingdom',
        location: 'Orlando, Florida',
        img: "https://images.unsplash.com/photo-1590176447012-fd1b2aa7f654?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwa2luZ2RvbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60",
        alt: 'Picutre of Animal Kingdom',
        linkto: '/animalkingdom'
    },
    {
        name: 'California Adventure',
        location: 'Anaheim, California',
        img: "https://images.unsplash.com/photo-1624310025313-16402c819991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbGlmb3JuaWElMjBhZHZlbnR1cmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        alt: 'Picture of California Adventure',
        linkto: '/californiaadventure',
    }
]

function HomePage() {
    return (
        <div>
            <ParkList parks={PARKS}/>
        </div>
    );
}

export default HomePage;

