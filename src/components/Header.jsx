import profile from '../assets/profile2.jpg';
const Header = () => {
    return (
        <header>
            <img src={profile} alt="" />
            <ul>
                <li><h2 style={
                    {
                        color: 'white'
                    }
                }>Zohaib Khan</h2></li>
                <li><p><b>Full Stack Web Developer | BS Computer Science Student | Islamia College University Peshawer</b></p></li>
                <li><p><b>"Certified Meta Backend & React Developer"</b>. Building High Performance Web applications using Django & React.</p></li>
            </ul>
        </header>
    )
}
export default Header;