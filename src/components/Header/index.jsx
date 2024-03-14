import logoImage from '../../assets/icon.jpg'; 

function Header() {
  return (
    <div className='mt-12 mb-5 flex flex-col gap-5 items-center justify-center text-black'> 
      <img src={logoImage} alt="Logo" className="w-20 h-16 mr-2" /> 
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'>For a debt free Education!</h1>
      <p className='text-lg md:text-xl lg:text-2xl text-center'>Get the latest scholarship openings right here, right now.</p>
    </div>
  );
}

export default Header;
