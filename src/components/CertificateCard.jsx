const CertificationsCard = ({title,link,img})=>{
    return (
        <div className="certificate-card">
            <p>{title} | <a href={link} target="_blank">Verify Certificate</a></p>
            <img src={img} alt="" />
        </div>
    )
}
export default CertificationsCard;