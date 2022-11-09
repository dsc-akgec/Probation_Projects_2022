const Footer = () => {
    return (
       
      <div className="socials">
        <h2>THE NEW YORKER</h2>  
        <p className="copyright">Company Name © 2022</p>
                <a href="#"><i className="icon ion-social-instagram"></i></a>
                <a href="#"><i className="icon ion-social-snapchat"></i></a>
                <a href="#"><i className="icon ion-social-twitter"></i></a>
                <a href="#"><i className="icon ion-social-facebook"></i></a>
                <h4>ABOUT US</h4>
         <ul className="list-inline">
         {/* <li class="list-inline-item"><a href="#">ABOUT US</a></li> */}
         <li className="list-inline-item"><a href="#">CONTACT</a></li>
         <li className="list-inline-item"><a href="#">ADVERTISE</a></li>
         <li className="list-inline-item"><a href="#">WRITE FOR US</a></li>
         <li className="list-inline-item"><a href="#">EVENTS</a></li>
         <li className="list-inline-item"><a href="#">IN-PRESS</a></li> 
         {/* <li class="list-inline-item"><a href="#"></a></li>  */}
         
         </ul>
         <h4>POPULAR CATEGORY</h4>
         <ul className="list-inline">
         <li className="list-inline-item"><a href="#">CULTURE</a></li>
         <li className="list-inline-item"><a href="#">POLITICS</a></li>
         <li className="list-inline-item"><a href="#">SPORTS</a></li>
         <li className="list-inline-item"><a href="#">STYLE</a></li>
         <li className="list-inline-item"><a href="#">TRAVEL</a></li>
         <li className="list-inline-item"><a href="#">ARTS</a></li>
         </ul>
         </div>
      );
}
 
export default Footer;
