import imgGitIcon from './../../img/icons/gitHub-black.svg';

const  ButtonGitHub= ({link}) => {
    return ( 
        <a href={link} target='_blank' rel="noreferrer" className="btn-outline">
         <img src={imgGitIcon} alt="" />
         GitHub repo
        </a>
     );
}
 
export default ButtonGitHub;