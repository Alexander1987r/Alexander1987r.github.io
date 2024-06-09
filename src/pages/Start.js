import Header from './../components/Header/Header';

const  Start= () => {
    return ( 
        <div>
        <Header/>
        <main className="section">
        <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p className=''>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p className=''>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                    </li>
                </ul>
        </div>
        </main>
        </div>
     );
}
 

export default Start;