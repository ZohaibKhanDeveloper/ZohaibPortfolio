import { Link } from "react-router";
const Navbar = () => {
    return (
        <div id="navbar">
            <ul>
                <li><Link to='/'><i class="bi bi-info-circle-fill"></i> About</Link></li>
                <li><Link to='/projects'><i class="bi bi-file-earmark-zip-fill"></i> Projects</Link></li>
                <li><Link to='/certifications'><i class="bi bi-award-fill"></i> Certifications</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;