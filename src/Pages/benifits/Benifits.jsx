import './benifit.css';
const Benifits = () => {
    return(
        <div dir="rtl" className="benifit-container">


            <div>
            <h1 className="benifit-title">הטבות לעובדי עירייה:</h1>
            <p className="benifit-text">אנחנו בעיריית דימונה מוקירים את העבודה הקשה שלכם ורוצים לתגמל אותכם על כל מה שאתם עושים בשביל התושבים בעיר לכן יצרנו קשר עם חברות שונות על מנת לעשות לכם את החיים קצת יותר קלים</p>   
            </div>


            <div className="copons">
            <p dir="rtl" className="benifit-title">קופונים</p>
            <p dir="rtl" className="benifit-text"> </p>
            <img src="https://cashcow-cdn.azureedge.net/media-gallery/PRRHxLb3V0k=/%D7%A7%D7%95%D7%A4%D7%95%D7%9F-03.png" alt="" className="copon-img"/>
            <a href="https://www.codecoupon.co.il/" target='_blank' rel="noreferrer"><button className="copon-btn">לקבלת הקופון</button></a>
            <img src="https://cashcow-cdn.azureedge.net/media-gallery/PRRHxLb3V0k=/copyof_%D7%A7%D7%95%D7%A4%D7%95%D7%9F-02.png" alt="" className="copon-img"/>
            <a href="https://www.codecoupon.co.il/" target='_blank' rel="noreferrer"><button className="copon-btn">לקבלת הקופון</button></a>

            </div>

             <p className="benifit-title" dir="rtl">הטבות מיוחדות לעובדי העירייה עם כרטיס האשראי של כאל</p>   
            <p className="benifit-text" dir="rtl">עובדי עיריית דימונה זכאיים להטבות הנחות ומתנות בשימוש בכרטיס אשרי של כאל</p>

            <div>
            <p dir="rtl" className="benifit-title"></p>
            <p dir="rtl" className="benifit-text"></p>
            
            <a href='https://www.cal-online.co.il/benefits/iski-benefits/'  target='_blank'> <img src="https://שירות-לקוחות.org.il/wp-content/uploads/2019/09/%D7%9B%D7%A8%D7%98%D7%99%D7%A1-%D7%90%D7%A9%D7%A8%D7%90%D7%99-%D7%A9%D7%95%D7%A4%D7%A8%D7%A1%D7%9C-300x181.jpg" alt="" /></a>
            </div>
        </div>
    )
}
export default Benifits