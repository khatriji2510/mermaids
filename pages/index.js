import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>The Seaqueens</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="Boring Bananas Co." key="ogtitle" />
        <meta property="og:description" content="Here at Boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://boringbananas.co/" key="ogurl"/>
        <meta property="og:image" content="https://boringbananas.co/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://boringbananas.co/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="boringbananas.co" key="twdomain" />
        <meta property="twitter:url" content="https://boringbananas.co/" key="twurl" />
        <meta name="twitter:title" content="Boring Bananas Co." key="twtitle" />
        <meta name="twitter:description" content="Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="twdesc" />
        <meta name="twitter:image" content="https://boringbananas.co/images/Hola.gif" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/Hola.gif" width="108" alt="" className="logo-image" /></a>
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
        <img className="lg:w-3/2 w-2/4" src="images/Hola.png" width="500px" />
        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-3/4 w-3/4">
                
                    <h1 className="text-7xl Poppitandfinchsans text- black">NAMASTE EVERYONE, meet <br/><span className="text-blau">Sea Queens</span></h1>
                    <p className="text-2xl text-black my-6  montserrat">Let us tell you about <span className="text-5xl Poppitandfinch ">SEA</span> <span className="text-blau text-5xl Poppitandfinchsans">Queens</span> 9999, we introduce Queens of <span className="text-span-2 font-bold">OPEN SEA rulling the ocean of crypto.</span>.<br />‍<br />Queens have been generated from countless number of traits and carrying <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">LIMITLESS </span><span className="text-5xl Poppitandfinch ">POTENTIAL</span><span className="text-blau text-5xl Poppitandfinchsans"> on their crowns</span>.
                    </p>
                    <p className="text-2xl text-black my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> --- <br />‍
                    <span className="text-black text-2xl montserrat"><strong>TOTAL SUPPLY: 9999</strong> unique queens.<br/><strong>PRICE: 0.036 ETH </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-10-29T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>

                  </div>
                  
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-black hover:text-black p-2 ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/Traits4.gif" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">The Sea Queens</h2>
                    <p className="text-xl text-black my-6  montserrat"> Queens are hard to get and are very attractive. <span className="font-bold"> But Sea Queens </span>  have all the traits you need and you can get them easily through our website each  <span className="font-bold"> QUEEN IS UNIQUE </span> and have a different set of  <span className="font-bold"> Traits. </span>    
                    </p>
                    <p className="text-xl text-black my-6  montserrat"> These traits varieties include different expressions.<span className="font-bold"> 500+ Hairstyles, many different accessories, </span> many different skin colours, <span className="font-bold"> 50+ Fins</span> and many more varieties.
                    </p>
                  </div>
                </div>
    

              <div id="roadmap" className="">
                <img src="/images/Roadmap.jpg"/>      
              <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              <ul className="">
                <li className="text-xl text-black my-6  montserrat"><span className="font-bold"> LAUNCH- </span> Prior announcement for discord members. </li>
                <li className="text-xl text-black my-6  montserrat"><span className="font-bold"> LAUNCH GIVEAWAY- </span> Seaqueens will reach their winners.</li>
                <li className="text-xl text-black my-6  montserrat"><span className="font-bold"> RARITY IMPLEMENTATION </span> on rarity.tool/spinner. </li>
                <li className="text-xl text-black my-6  montserrat"><span className="font-bold"> 100% SOLD - </span> We will bid on underrated artists of 0.9999 eth which will be choosen by the TSQs holders. </li>
                <li className="text-xl text-black my-6  montserrat"> We will <span className="font-bold underline">Sponsor GAS FEES </span> for upcoming artists who are unable to pay their gas fees to start their career. </li>
                <li className="text-xl text-black my-6  montserrat"> We will place bids of <span className="font-bold underline">0.3 eth</span> on artists, which will also be choosen by the TSQs holders.  </li>
                <li className="text-xl text-black my-6  montserrat"><span className="font-bold"> ANNOUNCEMENT </span> Date will be announced of our 2nd generation. </li>
                <li className="text-xl text-black my-6  montserrat"><span className="font-bold"> AIRDROP </span> 999 pieces of our 2nd generation TSQs will airdroped to the wallets of TSQs holders. </li>
              </ul>
              <p className="text-xl text-black my-6  montserrat"><span className="font-bold underline"> TO BE CONTINUED</span> ...........
              </p>



              </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">TEAM</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/vipin.jpg" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Vipin</h3>
                    <a href="https://twitter.com/VipinKhatri2510" className="text-center text-4xl text-center Poppitandfinchsans underline text-black"> (@VipinKhatri2510)</a>
                  </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/preet.jpg" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Preet</h3>
                    <a href="https://twitter.com/pt_preet" className="text-center text-4xl text-center Poppitandfinchsans underline text-black"> (@pt_preet)</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/rahul.jpg" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Rahul</h3>
                    <a href="https://twitter.com/pareekrahul073" className="text-center text-4xl text-center Poppitandfinchsans underline text-black"> (@pareekrahul073)</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/mohak.jpg" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Mohak</h3>
                    <a href="https://twitter.com/MohakBardwa2" className="text-center text-4xl text-center Poppitandfinchsans underline text-black"> (@MohakBardwa2)</a>                </div>
                
                </div>
       


              </div>   
              <div id="contact" className=" ">
                  
       


              </div>   
          </div>  
    </div>  
    )
  }