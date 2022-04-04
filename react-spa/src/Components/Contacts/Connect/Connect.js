import tellogo from "./../../Image/telegram-svgrepo-com.svg";
import whatlogo from './../../Image/whatsapp-svgrepo-com.svg';

import '../Connect/connect.sass';




function Connect() {
    return (
            <div className="connect">
                <div className="name"> 
                    <p>Let's<br/> Connect</p>
                </div>
                <div className="icon">
                    <div className='tel'>
                        <a href="https://t.me/Lipatnikov_Sergey"><img className='tellogo' src={tellogo}/></a>
                    </div>
                    <div className='tel'>
                        <img className='tellogo' src={whatlogo}/>
                    </div>
                    <div className='tel'>
                        <img className='tellogo' src={tellogo}/>
                    </div>
                </div>
            </div>
    )
  }
  
  export default Connect;