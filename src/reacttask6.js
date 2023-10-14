import "./style.css";
import myimg from "./21bce90391.jpg";
import {useRef} from "react";
export function Home(){
    const home=useRef(null);
    const about=useRef(null);
    const skills=useRef(null);
    const projects=useRef(null);
    const contact=useRef(null);

   const scrollToSection=(elementRef)=>{
    window.scrollTo({
        top:elementRef.current.offsetTop,
        behavior:'smooth'
    })
   }
     
    return(

        <div class="App">
            <div class="hero">
                <ul>
                    <li onClick={()=>scrollToSection(home)} class="link">Home</li>
                    <li onClick={()=>scrollToSection(about)} class="link">About me</li>
                    <li onClick={()=>scrollToSection(skills)} class="link">Skills</li>
                    <li onClick={()=>scrollToSection(projects)} class="link">Projects</li>
                    <li onClick={()=>scrollToSection(contact)} class="link">Contact details</li>
                </ul>
            </div>
            <div ref={home} class="home">
                  <h3 class="heading">Home</h3>
                   <table>
                    <tr>
                    <td><h3 class="i1">Hi</h3>
                    <h3 class="i1">I am Sreeja</h3>
                    <h3 class="i1">Welcome to my portfolio website</h3>
                    <h3 class="i1">My resume link <a href="https://onedrive.live.com/edit.aspx?resid=A65381530B7AC110!3302&ithint=file%2cdocx&wdo=2&authkey=!AHXR2UPviXzlFaQ" target="_blank" rel="noreferrer" >It's here</a></h3>
                    <h3 class="i1">Currently engaged in MERN fullstack internship by <a href="https://www.ethnus.com" target="blank">ethnus</a> and Cloud practitioner internship by <a href="https://aws.amazon.com/" target="blank">AWS</a></h3></td>
                    <td><img src={myimg} alt="My img"></img></td>
                    </tr>
                   </table>

                  </div>
            <div ref={about}class="about">
                    <h3 className="heading">About me</h3>
                     <h4>Highly motivated and detail-oriented B.Tech graduate seeking a challenging position in 
the software engineering field. Offering a strong foundation in coding, along with a passion 
for artificial intelligence and machine learning. Committed to continuous learning and 
professional growth, with a proven ability to adapt to new technologies and work 
collaboratively in team environments.
</h4>  

            </div>
            <div ref={skills} class="skills">
                 <h3 className="heading">My skills</h3>
                 <h4>➢ MS Office [Power Point, Excel and Word].</h4>
                <h4>➢ Programming languages: Java, Python.</h4>
                <h4>➢ Web technologies:Html,CSS,JavaScript,PHP.</h4>
                <h4>➢ Solid understanding of Artificial intelligence and machine learning, cloud computing, web 
technologies,softskills.</h4>
                <h4>➢ Database: Oracle</h4>
                <h4>➢ Strong mathematical and logical reasoning abilities</h4>
                <h4>➢ Excellent written and verbal communication skills</h4>
                <h4>➢ Strong presentation and public speaking abilities</h4>
            </div>
            <div ref={projects} class="projects">
                <h3 class="heading">Projects done by me</h3>
                <h4>➢ Breast cancer prediction using Machine Learning models.</h4>
                <h4>➢ Firefighting robot using Arduino Uno.</h4>
                <h4>➢ Image caption generation using Deep learning Models and wrote a conference paper about 
that.</h4>
               <h4>➢ Review paper on cloud cryptography.</h4>
               <h4>➢ Basic website for flight booking using html,css,javascript and php.</h4>
            </div>
            <div ref={contact} class="contact">
                <h3 class="heading">Contact details</h3>
                <h4>Email me at gandlasreeja5@gmail.com</h4>
                <h4>Contact Number 7207292849</h4>
                <h4>My GitHub link <a href="https://github.com/gandlasreeja">It's here</a></h4>
                <h4>Instagram Id @gandlasreeja02</h4>
            </div>
        </div>
    )
}




