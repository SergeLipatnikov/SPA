import tellogo from '../Image/telegram-svgrepo-com.svg';
import whatlogo from '../Image/whatsapp-svgrepo-com.svg';
import '../Contacts/contacts.sass';

function Contacts() {
    return (
        <div className='contacts'>
        <div className='tel'>
            <img className='tellogo' src={tellogo}/>
            <p>@lips</p>
        </div>
        <div className='tel'>
            <img className='tellogo' src={whatlogo}/>
            <p>@lips</p>
        </div>
        <div className='tel'>
            <img className='tellogo' src={tellogo}/>
            <p>@lips</p>
        </div>
        
    </div>
    )
  }
  
  export default Contacts;