import mainlogo from '../Image/mainlogo.png';
import '../Main/main.sass';

function Main() {
        return (
            <div className='Main'>
                <p className='Main__text'>
                    Добро пожаловать на мой сайт!<br/>
                    Я начинающий Frontend-разработчик.<br/> 
                    На данном сайте вы можете ознакомиться с моими работами. 
                </p>
                <img className='img' src={mainlogo} alt="logo"/>
            </div>
        )
    } 

  export default Main;