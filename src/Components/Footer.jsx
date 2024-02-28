import logoFooter from './../img/logo_footer.png'
import insta from './../img/instagram.png'
import whats from './../img/whatsapp.png'


export default function Footer(props) {
    
    return(
        <>
            
            <div className='w-full flex flex-col justify-center items-center bg-yelowT mt-10'>
                    <div className='w-36 rounded-full py-10'>
                    
                        <img className='w-full border-white' src={logoFooter} alt="Logo" />
                    </div>
                    <div className='flex gap-8 mb-10'>
                        <a href="https://www.instagram.com/_amaiseventos/" target="_blank"><img className='w-10' src={insta} /></a>
                        <a href="https://api.whatsapp.com/send?phone=5511940686744" target="_blank" rel="noopener noreferrer"><img className='w-10' src={whats} /></a>
                    </div>
                    <div className='mb-4'>
                        <span className='font-bold text-sm '>© Copyright 2024 | Todo os direitos reservados | Feito por <a href="https://www.instagram.com/toloto.dev/" target="_blank" className='font-bold'>Lucas Toloto</a></span>
                    </div>
            </div>
        </>
    )
}