import Image from "next/image"

const Footbar =() => {
    return (
        <div className='footbar'>
            <div className="imgframe">
                <Image src=
                    "https://hips.hearstapps.com/hmg-prod/images/cat-quotes-ginger-cat-on-bed-64e3990220b36.jpeg" 
                    fill
                    alt="cat"
                    className="imgroot"
                    />
            </div>
        </div>
    );
  }
  
  export default Footbar;
  