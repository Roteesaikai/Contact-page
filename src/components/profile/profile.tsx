import '../background/bg.css'
interface IProfile{
    img : string
    name : String
    chat : any
}
export function Chat(props:IProfile){
    return <>
    <div className='flex'><img className='img' src={props.img} alt='image'/>
    <div className='name'>{props.name}</div>
    <div className="chat">{props.chat}</div>   
    </div>   
    </>
}