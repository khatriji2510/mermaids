import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>The Seaqueens</title>
        <link rel="icon" href="/images/favicon.jpg" />

        
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/logo.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="#about" className="text-4xl text-black hover:text-black m-6">About</a>
              <a href="/mint" className="text-4xl text-black hover:text-black m-6">MINT!</a>
              <a href="#traits" className="text-4xl text-black hover:text-black m-6">traits</a>
              <a href="#roadmap" className="text-4xl text-black hover:text-black m-6">Roadmap</a>
              <a href="#team" className="text-4xl text-black hover:text-black m-6">Team</a>
              <a href="https://twitter.com/Seaqueensnft" className="text-4xl  hover:text-black m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/Wa8FQ3CjBq" className="text-4xl  hover:text-black m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          
        </div>
        <img className="lg:w-3/2 w-1/4 border-8 border-black " src="images/queen1.GIF" width="500px" />
        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-3/4 w-3/4">
                
                    <h1 className="text-7xl Poppitandfinchsans text- black">NAMASTE EVERYONE, meet <br/><span className="text-blau">The Sea Queens</span></h1>
                    <p className="text-2xl text-black my-6  montserrat">Let us introduce you to <span className="text-5xl Poppitandfinch ">SEA</span> <span className="text-blau text-5xl Poppitandfinchsans">Queens</span> 9999, The Queens of <span className="text-span-2 font-bold">OPEN SEA rulling the ocean of crypto.</span><br />‍<br />The Queens have been generated from the countless number of traits and carrying <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">LIMITLESS </span><span className="text-5xl Poppitandfinch ">POTENTIAL</span><span className="text-blau text-5xl Poppitandfinchsans"> on their crowns</span>.
                    </p>
                    <p className="text-2xl text-black my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> --- <br />‍
                    <span className="text-black text-2xl montserrat"><strong>TOTAL SUPPLY: 9999</strong> unique queens.<br/><strong>PRICE: 0.036 ETH </strong>each.</span></p>
                   
                  </div>
                  
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-black hover:text-black p-2 ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">The Sea Queens</h2>
                    <p className="text-xl text-black my-6  montserrat">The Queens are so attractive and fascinating. Although they are very hard to claim <span className="font-bold"> but Sea Queens </span>  have all the traits you need and you can get them easily through our website, each  <span className="font-bold"> QUEEN IS UNIQUE </span> and have a different set of  <span className="font-bold"> Traits. </span>    
                    </p>
                    <p className="text-xl text-black my-6  montserrat"> These varieties include different expressions of<span className="font-bold"> 500+ Hairstyles, various types of accessories, </span> skin colours, <span className="font-bold"> 50+ Fins</span> and many more.
                    </p>
                  </div>
                </div>
    

              <div id="roadmap" className="">
                    
              <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              <p className="text-3xl text-black my-6  montserrat"><span className="font-bold"> Our main aim is to support underrated artists in NFT community.</span>
              </p>
              <img src="/images/roadmap.jpg"/>  
              <p className="text-xl text-black my-6  montserrat"><span className="font-bold underline"> TO BE CONTINUED</span> ...........
              </p>



              </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">TEAM</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="bg-green-200 p-6 h-full border-4 border-black p-4 rounded-lg overflow-hidden" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/vipin.jpg" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Vipin</h3>
                    <a href="https://twitter.com/VipinKhatri2510" className="text-center text-4xl text-center Poppitandfinchsans underline text-black">(@VipinKhatri2510)</a>
                    <h4 className="text-xl text-black my-6  montserrat"><span className="font-bold">Founder/Dev</span></h4>
                    <li className="text-xl text-black my-6  montserrat">INDIAN NFT Artist </li>
                     <li className="text-xl text-black my-6  montserrat">Engineering student of Artificial Intelligence. </li>
                     
                  </div>
                  <div className="bg-green-200 p-6 h-full border-4 border-black p-4 rounded-lg overflow-hidden" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/preet.jpg" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Preet</h3>
                    <a href="https://twitter.com/pt_preet" className="text-center text-4xl text-center Poppitandfinchsans underline text-black"> (@pt_preet)</a>                
                    <h4 className="text-xl text-black my-6  montserrat"><span className="font-bold">Artist/Creator</span></h4>
                    <li className="text-xl text-black my-6  montserrat">INDIAN NFT Artist  </li>
                     <li className="text-xl text-black my-6  montserrat">Freelance Animator And 2D/3D illustrator by profession. </li>
                     
                    
                    </div>
                  
                  <div className="bg-green-200 p-6 h-full border-4 border-black p-4 rounded-lg overflow-hidden" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/rahul.jpg" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Rahul</h3>
                    <a href="https://twitter.com/pareekrahul073" className="text-center text-4xl text-center Poppitandfinchsans underline text-black"> (@pareekrahul073)</a>
                    <h4 className="text-xl text-black my-6  montserrat"><span className="font-bold">Web Developer</span></h4>
                    <li className="text-xl text-black my-6  montserrat">Hackathon Runnerup </li>
                     <li className="text-xl text-black my-6  montserrat">Engineering student of Artificial Intelligence and Data Science. </li>
                    
                  </div>
                  <div className="bg-green-200 p-6 h-full border-4 border-black p-4 rounded-lg overflow-hidden" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/mohak.jpg" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Mohak</h3>
                    <a href="https://twitter.com/MohakBardwa2" className="text-center text-4xl text-center Poppitandfinchsans underline text-black"> (@MohakBardwa2)</a>                
                    <h4 className="text-xl text-black my-6  montserrat"><span className="font-bold">Discord Mod/Community</span></h4>
                    <li className="text-xl text-black my-6  montserrat">Managing 100k discord servers </li>
                     <li className="text-xl text-black my-6  montserrat">Engineering student of Artificial Intelligence. </li>
                    
                    </div>
                
                </div>
       


              </div>   
              <div id="contact" className=" ">
                  
       


              </div>   
          </div>  
    </div>  
    )
  }
