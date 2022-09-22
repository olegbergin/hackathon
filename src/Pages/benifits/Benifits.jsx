import './benifit.css';
const Benifits = () => {
    return(
        <div dir="rtl" className="benifit-container">


            <div>
            <h1 className="benifit-title">הטבות לעובדי עירייה:</h1>
            <p className="benifit-text">אנחנו בעיריית דימונה מוקירים את העבודה הקשה שלכם ורוצים לתגמל אותכם על כל מה שאתם עושים בשביל התושבים בעיר לכן יצרנו קשר עם חברות שונות על מנת לעשות לכם את החיים קצת יותר קליםץץ</p>   
            </div>


            <div className="copons">
            <p dir="rtl" className="benifit-title">קופונים</p>
            <p dir="rtl" className="benifit-text"> </p>
            <img src="https://cashcow-cdn.azureedge.net/media-gallery/PRRHxLb3V0k=/%D7%A7%D7%95%D7%A4%D7%95%D7%9F-03.png" alt="" className="copon-img"/>
            <a href="https://www.codecoupon.co.il/" target='_blank' rel="noreferrer"><button className="copon-btn">לקבלת הקופון</button></a>
            <img src="https://cashcow-cdn.azureedge.net/media-gallery/PRRHxLb3V0k=/copyof_%D7%A7%D7%95%D7%A4%D7%95%D7%9F-02.png" alt="" className="copon-img"/>
            <a href="https://www.codecoupon.co.il/" target='_blank' rel="noreferrer"><button className="copon-btn">לקבלת הקופון</button></a>

            </div>


            <div>
            <p dir="rtl" className="benifit-title"></p>
            <p dir="rtl" className="benifit-text"></p>
            </div>
        </div>
    )
}
export default Benifits