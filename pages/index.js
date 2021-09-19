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
        <h1 className="text-7xl Poppitandfinchsans text- black">NAMASTE EVERYONE, meet <br/><span className="text-blau">The Sea Queens</span></h1>
        <img className="lg:w-3/2 w-1/4 border-8 border-black " src="images/queen1.GIF" width="500px" />
        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-3/4 w-3/4">
                
                    
                    <p className="text-2xl text-black my-6  montserrat">A collection of <span className="text-5xl Poppitandfinch "></span> <span className="text-blau text-5xl Poppitandfinchsans">9999 Mermaids</span> coming to rule <span className="text-span-2 font-bold"> the NFT ocean and your hearts.</span><br />‍<br />
                    </p>
                    <p className="text-2xl text-black my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> TBA <br />‍
                    <span className="text-black text-2xl montserrat"><strong>TOTAL SUPPLY: 9999</strong> unique queens.<br/><strong>PRICE: 0.036 ETH </strong>each.</span></p>
                   
                  </div>
                  
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-black hover:text-black p-2 ">COMING SOON</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">ABOUT The Sea Queens</h2>
                    <p className="text-xl text-black my-6  montserrat">The Sea Queens are generated from a combination of countless number of traits and each of them is carrying  <span className="font-bold"> LIMITLESS POTENTIAL </span> on their crowns.<span className="font-bold">  </span>   <span className="font-bold"> </span>    
                    </p>
                    <p className="text-xl text-black my-6  montserrat"> They’re inspired by the real queens of our world i.e. women.<br />‍Mermaids are regarded as Queens of the Sea signifying life and fertility within the ocean. Similarly, women are the queens of the earthly world without whom the genesis of life would cease to exist. However, marginalization and gender discrimination is an adversity that has plagued women from the dawn of time, especially in developing countries like India, where women have been oppressed by systematic sexism.
                    
                    </p>
                    <p className="text-xl text-black my-6  montserrat">The Sea Queens is a collectible project aimed to empower women, by creating awareness and helping organizations in India, by upholding their rights and pushing them to break barriers that are set by society.
                    <br />The Sea Queens aims to support Indian women artists as well as other artists in the NFT space by jump-starting their career, through Gas fees compensations, by bringing exposure to their work through a wider community of collectors, and also occasionally buying and collecting their art pieces as part of the community wallet. Hence bringing value to entire community of The Sea Queens.
                    </p>
                  </div>
                </div>
    

              <div id="roadmap" className="">
                    
              <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              <p className="text-3xl text-black my-6  montserrat"><span className="font-bold"></span>
              </p>
              <img src="/images/roadmap.PNG"/>  
              <p className="text-xl text-black my-6  montserrat"><span className="font-bold underline"> </span>
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
                    <h4 className="text-xl text-black my-6  montserrat"><span className="font-bold">Community Manager</span></h4>
                    <li className="text-xl text-black my-6  montserrat">Managing 100k discord servers </li>
                     <li className="text-xl text-black my-6  montserrat">Engineering student of Artificial Intelligence. </li>
                    
                    </div>
                
                </div>
       


              </div>   
              <div id="contact" className=" ">
              <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <a href="/" className=""><img src="images/logo.png" width="108" alt="" className="logo-image" /></a>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      
      <span class="ml-3 text-xl">The Seaqueens</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 The Seaqueens —
      <a href="https://twitter.com/Seaqueensnft" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Seaqueensnft</a>
    </p>
  </div>
</footer>   
       


              </div>   
          </div>  
    </div>  
    )
  }
