import { Chat } from '../profile/profile'
import './bg.css'
export default function Card(){
    return <>
        <div className='Card'>
            <Chat
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSCRrx-Ug72ewPFuGyN5z2flmPbgDeUBIOlLCSy9FpCHiCJ0tRKKq83nRaCjtHiqmY9XTtKVdndn63WbdM9E4u4jq7nmLQJ7LGbAFA9U'
                name="Spider Man"
                chat="Call Do Kuy Noi"
            />
        </div>
        <div className='Card'>
            <Chat
                img='https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg'
                name="Captain America"
                chat="Yak Dai Katatongdang"
            />
        </div>
        <div className='Card'>
            <Chat
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlx_ZxZnn33pT4_Ydh5Z8ehzIm4x6FgE_Qw&s'
                name="Ironman"
                chat="I am Ironman"
            />
        </div>
        <div className='Card'>
            <Chat
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR255J6iZZCue7B16n1JU2Hp9ePT16YJz5xrg&s'
                name="Dortor Strange"
                chat="Yak kin pizza tae mai mee tung"
            />
        </div>
        <div className='Card'>
            <Chat
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeBULFgpmft3hzDi_SJ3uxBEmfQoLzc_FPw&s'
                name="Loki"
                chat="Miss U my old friend"
            />
        </div>
        <div className='Card'>
            <Chat
                img='https://www.gamereactor.eu/media/15/thor_3821533b.png'
                name="Thor"
                chat="I am lord of the rings"
            />
        </div>
        <div className='Card'>
            <Chat
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVVpJWyBA-tdUT7Vxvh97xuf7mi994L4CVQ&s'
                name="Hulk"
                chat="Hulk Smash"
            />
        </div>
    </>
}
