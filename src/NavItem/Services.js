import Footer from '../Footer/Footer';
import Button from '../Custom/Button';
import Header from '../Header/Header'
import s from './Services.module.scss'
function Services(){
    return(
    <div className={s.services}>
        
        <Button/>
        <h1>ՍԵՐՎԻՍ ՊԱՏՎԵՐՈՎ</h1>
        <h2>ԻՆՉ ԵՆՔ ՄԵՆՔ ԱՌԱՋԱՐԿՈՒՄ </h2>

        <div className={s.servicesInfo}>
            <div>
                <p className={s.top}>ԶԱՆԳԱՀԱՐԵՔ ՄԵԶ</p>
                <p>(+374 43) 10 10 10</p>
            </div>
            <div>
                <p className={s.top}>ԳՐԵՔ ՄԵԶ</p>
                <p>info@mobile_shop.am</p>
            </div>
            <div>
                <p className={s.top}>ԱՅՑԵԼԵՔ ՄԵԶ</p>
                <p>ԵՐԵՎԱՆ,ՀԱՅԱՍՏԱՆ</p>
            </div>
        </div>

        <div className={s.info}>
            <img src="https://yerevanmobile.am/media/wysiwyg/Technical-Support.jpg"></img>
            <p>Մեր Սերվիս կենտրոնում աշխատում են միայն փորձառու և վերապատրաստված մասնագետներ։
                Սերվիս կենտրոնը հագեցած է նորագույն սարքավորումներով</p>
        </div>
        <div className={s.info}>
            <p> Սերվիս կենտրոնը իրականացնում է բջջային հեռախոսների և պլանշետների ախտորոշում և 
                վերանորոգում՝ սեղմ ժամկետներում և մատչելի գներով</p>
            <img src="https://yerevanmobile.am/media/wysiwyg/service003.jpg"></img>
           
        </div>
    </div>
      
    )
}
export default Services