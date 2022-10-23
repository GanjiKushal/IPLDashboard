import './mainpage.css'
import { useNavigate } from 'react-router-dom'

function Mainpage() {
    const navigate=useNavigate()
    return (
        <div className='maincontainer-1'>
            <div className='topcontainer-1'>
                <div className='image1'>
                    <img src='bccilogo.jpg' alt='bccilogo' />
                </div>
                <div className='middlepart-1'>
                    <h1>
                        KLUTCHH
                    </h1>
                    <h2>
                        IPL DASHBOARD
                    </h2>
                </div>
                <div className='image2'>
                    <img src='ipl logo.png' alt='trophy' />
                </div>

            </div>
            <div className='scrool'>
                <marquee behavior='alternate'>Welcome to your Favourite IPL Dashboard--Kutchh!!!!</marquee>
            </div>
            <div className='bottomcontainer-1'>
                <div className='left'>
                    <div className='lefttop'>
                        <h1 className='h1tag'>Choose Your Analysis!!!</h1>
                    </div>
                    <div className='leftbottom'>
                        <h2 className='h21tag' onClick={()=>navigate('/teamvsteam')}>Team vs Team Analysis</h2>
                        <h2 className='h22tag' onClick={()=>navigate('/team')}>Team Analysis</h2>
                        {/* <h2 className='h23tag' onClick={()=>navigate('/trail')}>Trail</h2>  */}
                    </div>

                </div>
                <div className='right'>
                    {/* <h1>this place is for pie chart</h1> */}
                    <img src='ipl-Trophy (1).webp' alt='trophy'/>
                </div>

            </div>

        </div>
    )
}
export default Mainpage