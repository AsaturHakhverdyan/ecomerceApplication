import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import s from '../NavItem/Contact.module.scss';
import Button from '../Custom/Button'

function Contact(){
    return (
         <div className={s.contact}>
       
           <Button/>
           <h1>Կապ</h1>
           <div className={s.contactInfo}>
                <div>
                    <div>
                        <p className={s.info}>Սայաթ-Նովա 22</p>
                    </div>
                    <div>
                        <p className={s.info}>Հեռ</p>
                        <p>(+374 11) 83 83 83</p>
                    </div>
                    <div>
                        <p className={s.info}>Էլ-հասցե</p>
                        <p>@hjcbx.am</p>
                    </div>
                    <div>
                        <p className={s.info}>Աշխատանքային ժամեր</p>
                        <p>Երկ-Շբթ։ 10:00-20:00</p>
                        <p>Կրկ։ 11:00-19:00</p>
                    </div>
                </div>


                <div>
                    <div>
                        <p className={s.info}>Սայաթ-Նովա 22</p>
                    </div>
                    <div>
                        <p className={s.info}>Հեռ</p>
                        <p>(+374 11) 83 83 83</p>
                    </div>
                    <div>
                        <p className={s.info}>Էլ-հասցե</p>
                        <p>@hjcbx.am</p>
                    </div>
                    <div>
                        <p className={s.info}>Աշխատանքային ժամեր</p>
                        <p>Երկ-Շբթ։ 10:00-20:00</p>
                        <p>Կրկ։ 11:00-19:00</p>
                    </div>
                </div>
                <div className={s.input}>
                    {/* <input type= 'text' value='Անուն'></input>
                    <input type= 'text' value='Էլ հասցե'></input>
                    <input type= 'text' value='Թեմա'></input> */}

                    <input type= 'text' placeholder='Անուն'></input>
                    <input type= 'text'  placeholder='Էլ հասցե'></input>
                    <input type= 'text'  placeholder='Թեմա'></input>
                    <button>Ուղարկել</button>
                </div>
           </div>
          
 
        </div>
    )
}

export default Contact