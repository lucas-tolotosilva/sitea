import logo from '../img/logo.png'
export default function ApplicationLogo(props) {
    return (
        <div className="w-36  rounded-full">
            <img className='w-full h-full object-fill' src={logo} alt="Logo" />
        </div>
    );
}
