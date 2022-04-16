import React, { useEffect , useRef, useState} from "react";
import {BsFillBagCheckFill , BsFillCreditCardFill} from "react-icons/bs";

import {FaTwitterSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa"
import {AiOutlineArrowUp} from "react-icons/ai";
import people2 from "./data1";

import Aos from "aos";
import "aos/dist/aos.css"

const Index3 = () => {

  const A = useRef(null)


  const [h, setH] = useState('three-line')
  const [t, setT] = useState( "side-bar-edit")
 
  const [r , setR] = useState('fourth-body__button')


  const Look = () => {
    setT("side-bar")
    setH('three-line-edit')
      }
    
      const Look1 = () => {
        setT("side-bar-edit")
    setH('three-line')
      } 
    
      
      
    


  useEffect(() => {
 
    Aos.init({duration:2000});
  })

 



  return(
    <main className="main">
      <section className="section">

      <div  className=  {t}  >
        <div    ref={A} onClick= {Look1}     className= {h}></div>
      
          <section className="side-bar__holder">

               <ul className="side-bar__ul">
                 <li className="side-bar__li">home</li>
                 <li className="side-bar__li">lotions </li>
                 <li className="side-bar__li"> prices</li>
                 <li className="side-bar__li">team</li>
                 <li className="side-bar__li">contact</li>
               </ul>
              <div className="side-bar__icon-holder">
                <FaInstagramSquare   className="side-bar__icon" ></FaInstagramSquare>
                <FaTwitterSquare   className="side-bar__icon" ></FaTwitterSquare>
                <FaLinkedin   className="side-bar__icon" ></FaLinkedin>
              </div>
          </section>
        </div>
         
      
      <header className="header">
      <div    onClick={Look}     className="three-line"></div>
       <div className="header__allheading">
      
           <h1 className="heading">
               <span className="heading1"> L&D </span>
               <span className="heading1"> lotion</span>
               <span className= "heading2">  light and dark </span>
           </h1>

         <button className="head-btn">discover</button>
       </div>
      
</header>








<div className="third-section">



<section className="third-section__holder">

  <div  data-aos = "fade-right"  className="third-section__1">
     
<section className="third-section__1-holder">


<figure className="third-section__figure">
<div className="third-section__img-holder">
<img src={"./web-cream/IMG_3206.JPG"}  alt="" className="third-section__img" />

</div>
<p className="third-section__p-span"> <AiOutlineArrowUp></AiOutlineArrowUp></p>
  <figcaption  className="third-section__figure-cap"> open </figcaption>
</figure>
<p className="third-section__p">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aliquam officia est dolorum, ipsam omnis quam porro neque harum, accusamus expedita eaque dolore eos voluptatibus architecto? Maiores aperiam assumenda ex!
</p>


</section>

  </div>

  <div  data-aos = "fade-up" className="third-section__2">

  <section className="third-section__2-holder">


<figure className="third-section__figure">
<div className="third-section__img-holder">
<img src={"./web-cream/IMG_3210.JPG"}  alt="" className="third-section__img" />

</div>
<p className="third-section__p-span"><AiOutlineArrowUp></AiOutlineArrowUp></p>
  <figcaption  className="third-section__figure-cap"> pour </figcaption>
</figure>
<p className="third-section__p">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aliquam officia est dolorum, ipsam omnis quam porro neque harum, accusamus expedita eaque dolore eos voluptatibus architecto? Maiores aperiam assumenda ex!
</p>


</section>


</div>

<div  data-aos = "fade-left" className="third-section__3">

<section className="third-section__3-holder">


<figure className="third-section__figure">
<div className="third-section__img-holder">
<img src={"./web-cream/IMG_3208.JPG"}  alt="" className="third-section__img" />
</div> 
<p className="third-section__p-span"><AiOutlineArrowUp></AiOutlineArrowUp></p>


  <figcaption  className="third-section__figure-cap"> apply </figcaption>
</figure>
<p className="third-section__p">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aliquam officia est dolorum, ipsam omnis quam porro neque harum, accusamus expedita eaque dolore eos voluptatibus architecto? Maiores aperiam assumenda ex!
</p>

</section>
    
</div>

</section>
</div>
     


    
       





<section className="third-body3">

<div className="third-body3__video-holder">
 <video controls loop  muted  autoPlay  className="third-body3__video">
      <source type="video/mp4" src={'./web-cream/1023566578-preview.mp4'} />
  </video> 
 </div>

 

<div className="third-body3__holder">
   <header className="third-body3__main1">
   <h2 data-aos = "fade-down" className="third-body3__h2">

steps to get our product


</h2>

<p data-aos = "fade-right" className="third-body3__head-p">
 we break down the four steps to get hold of out product
</p>


   </header>

   <div className="third-body3__main2">

    <section className="third-body3__main2-holder">

        {



people2.map((e) => {
        

   const {number, head, para} = e;


   return <div className="third-body3__cannot-believe3">
      <section className="third-body3__cannot-believe3-holder">
      <p className="third-body3__main2-num">{number}</p>
       <h2 className="third-body3__main2-head">{head}</h2>
       <p className="third-body3__main2-para1">{para}</p>
      </section>
   </div>


})
         
        }


     </section>
   </div>
</div>
</section>















<section className="fifth-body">
                 <div className="fifth-body__holder">
                   <h2 data-aos = "fade-down" className="fifth-body__h2">


                   apply in our monthly promo to win unlimited supply of our product


                   </h2>

                   <p data-aos = "fade-right" className="fifth-body__para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus tempora officiis sit omnis sequi rerum aperiam optio qui deleniti velit, ut at veritatis a reiciendis animi quo fugiat aspernatur?
                   </p>
                     


                     
                   <button data-aos = "fade-up" style ={{width: '10rem' }} className = {r} >
                         learn more
                        </button>


                 </div>


            </section>

            


      <section>
          <div class="fifth">
              <div class="fifth-main">
                  <div class="form">
                      <form action="#" class="form-main">
                        <div class="u-center  u-margin-bottom-2">
                            <h3 class="heading-secondary">
                                start booking
                            </h3>
                        </div>
                         <div class="form-main1">
                             <input type="text" class="form-input1" placeholder="Full name" id="name" required/> 
                            
                             <label for="name" class="label1">Full name</label>
                         </div>
                         <div class="form-main1">
                            <input type="email" class="form-input1" placeholder="Email address" id="email" required/> 
                            <label for="email" class="label1">Email address </label>
                        </div>
                        <div class="form-radio">
                            <div class="form-radio1">
                                <input type="radio" class="form-radio-input1" id="radio1" name="size"/>
                                <label for="radio1" class="label2">
                                    <span class="form-radio-button">

                                    </span>
                                    
                                     shoes avaluable now
                                </label>
                            </div>
                            <div class="form-radio1">
                                <input type="radio" class="form-radio-input1" id="radio2" name="size"/>
                                <label for="radio2" class="label2">
                                    <span class="form-radio-button">

                                    </span>
                                     shoes on delivery 
                                </label>
                            </div>
                        </div>

                        <div>
                            <button class="fifth-footer"> Next Step  &rarr;</button>
                         </div>
                      </form>
                  </div>
              </div>

          </div>




      </section>



      
    


    <footer class="foter"   id="foter">
        <div class="footer-head">
            <h1 data-aos = "fade-down" class="footer-head1">  ld </h1>
        </div>
        <div class="footer-main">
            <div  class="footer-main1">
                <div class="footer-nav">
                    <ul class="footer-list">
                        <li class="footer-list1"><a href="#" class="footer-link">company</a></li>
                        <li class="footer-list1"><a href="#" class="footer-link">ContactUs</a></li>
                        <li class="footer-list1"><a href="#" class="footer-link">carrers</a></li>
                        <li class="footer-list1"><a href="#" class="footer-link">privacypolicy</a></li>
                        <li class="footer-list1"><a href="#" class="footer-link">terms</a></li>
                    </ul>
                </div>
            </div>
            <div  class="footer-main2">
                <p class="footer-copyrright">
    Built by <a href="#" class="footer-link">patricia-son</a>  with the help of <a href="#" class="footer-link"> akintan seyi</a> copyright &copy;  this is my original design and layout
                </p>
            </div>
        </div>
      
    </footer>



      </section>
    </main>
    
    )






}

export default  Index3;