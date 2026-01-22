import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CertificationsCard from "../components/CertificateCard";
import python_ds_ai from "../assets/python-ds-ai_page-0001.jpg";
import meta_backend from "../assets/meta-backend_page-0001.jpg";
import react_basics from "../assets/react-basics_page-0001.jpg";
import react_advanced from "../assets/advanced-react_page-0001.jpg";
const CertificationsPage = () => {
    return (
        <div className="container">
            <Header />
            <Navbar/>
            <CertificationsCard title="Meta Backend Developer Specialization"
            link="https://coursera.org/verify/professional-cert/A0B4Y1VBSO4Y"
            img={meta_backend}
            />
            <CertificationsCard title="Python for Data Science, AI, & Development"
            link="https://www.coursera.org/account/accomplishments/verify/91OY3CH0LKI3"
            img={python_ds_ai}
            />
            <CertificationsCard title="Meta React Basics"
            link="https://www.coursera.org/account/accomplishments/verify/G6KX61FQ57E3"
            img={react_basics}
            />
            <CertificationsCard title="Meta React Advanced"
            link="https://www.coursera.org/account/accomplishments/verify/I308TPS5ZXMI"
            img={react_advanced}
            />
        </div>
    )
}
export default CertificationsPage;