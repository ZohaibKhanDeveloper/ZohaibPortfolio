import Header from "../components/Header";
import Navbar from "../components/Navbar";
import html from "../assets/icons8-html-5-240.png";
import css from "../assets/icons8-css-logo-48.png";
import cpp from "../assets/icons8-c++-240.png";
import python from "../assets/icons8-python-240.png";
import postgre from "../assets/icons8-postgresql-100.png";
import mysql from "../assets/icons8-mysql-96.png";
import django from "../assets/icons8-django-96.png";
import js from "../assets/icons8-javascript-100.png";
import reactlogo from "../assets/icons8-react-80.png";
import postman from "../assets/icons8-postman-inc-96.png";
import git from "../assets/icons8-git-240.png";
import github from "../assets/icons8-github-logo-240.png";
import islamialogo from "../assets/Islamia_University,_Peshawar_Logo.png";
import kmslogo from "../assets/kmslogo.jpg";
import selenium from "../assets/icons8-selenium-100.png";
import vscode from "../assets/icons8-vs-code-240.png";
const AboutPage = () => {
    return (
        <div className="container">
            <Header />
            <Navbar />
            <p id="intro">
                My name is Zohaib khan & I am a full stack developer.
                I can build high performance web applications, ERP systems,
                and can work on long term software and web projects. My core stack is
                Django with Django REST Framework for backend and React.js for frontend creating a
                powerful stack for big systems.
                <ul>
                    <li><a href="https://www.linkedin.com/in/zohaib-khan-6a4b13308/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="https://github.com/ZohaibKhanDeveloper" target="_blank"><i className="bi bi-github"></i></a></li>
                    <li><a href="https://web.facebook.com/profile.php?id=61555401548753" target="_blank"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="../../public/zohaib-khan-resume.pdf" download={true}>Resume</a></li>
                </ul>
            </p>
            <p className="sections">
                <ul>
                    <li className="intro-headings"><i class="bi bi-tools"></i> Skills</li>
                    <ul>
                        <li><i class="bi bi-caret-right-fill"></i> Problem Solving</li>
                        <li><i class="bi bi-caret-right-fill"></i> Frontend Development</li>
                        <li><i class="bi bi-caret-right-fill"></i> Backend Development</li>
                        <li><i class="bi bi-caret-right-fill"></i> Web Scraping</li>
                        <li><i class="bi bi-caret-right-fill"></i> Web Mining</li>
                    </ul>
                    <li className="intro-headings"><i class="bi bi-cpu-fill"></i> Languages and Tools</li>
                    <p id="lang-tools-imgs">
                        <img src={cpp} alt="" />
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={reactlogo} alt="" />
                        <img src={python} alt="" />
                        <img src={django} alt="" />
                        <img src={mysql} alt="" />
                        <img src={postgre} alt="" />
                        <img src={vscode} alt="" />
                        <img src={postman} alt="" />
                        <img src={selenium} alt="" />
                        <img src={git} alt="" />
                        <img src={github} alt="" />
                    </p>
                    <li className="intro-headings"><i class="bi bi-journal-album"></i> Education</li>
                    <p className="education">
                        <img src={islamialogo} alt="" />
                        <ul>
                            <li>Islamia College University Peshawer</li>
                            <li>Bachelor Of Computer Science (3.67/4.0)</li>
                        </ul>
                    </p>
                    <p className="education">
                        <img src={islamialogo} alt="" />
                        <ul>
                            <li>Islamia College University Peshawer</li>
                            <li>BISE Peshawer | HSSC | FSc. CS 85.81%</li>
                        </ul>
                    </p>
                    <p className="education">
                        <img style={{
                            borderRadius:"50%"
                        }} src={kmslogo} alt="" />
                        <ul>
                            <li>The Khyber Model School & College Mushterzai Peshawer</li>
                            <li>BISE Peshawer | SSC | Matriculation 85.81%</li>
                        </ul>
                    </p>
                </ul>
            </p>
        </div>
    )
}
export default AboutPage;