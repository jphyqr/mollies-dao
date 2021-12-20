import React from "react";

const BasicCube = ({ side = 50, absolute, x, y, image }) => {
  return (
    <div className={`cube-container ${absolute ? "absolute" : ""}`}>
      <div className={`scene `}>
        {image && <div className='image'></div>}
        <div className={`cube animate-cube`}>
          <div className='cube__face cube__face--front'></div>
          <div className='cube__face cube__face--back'></div>
          <div className='cube__face cube__face--right'></div>
          <div className='cube__face cube__face--left'></div>
          <div className='cube__face cube__face--top'></div>
          <div className='cube__face cube__face--bottom'></div>
        </div>
      </div>

      <style jsx>{`



.absolute{
    position: fixed;
    top: ${x}%;
    left: ${y}%;
}
        .scene {

          width: ${side}px;
          height: ${side}px;

         
          position: relative;
        }

        .image {
          position: absolute;
       
          width: ${side}px;
          height: ${side}px;
          top:50%;
          left: 50%;
transform: translate(-50%,-50%);

background: url(${image}); 

-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
        }
        

        .cube {

            width: ${side}px;
            height: ${side}px;
            position: relative;
          
            transform-style: preserve-3d;
            transform: translateZ(-${side / 2}px)
            transition: transform 1s;
 
        
          }

          .cube__face {
            position: absolute;
            width: ${side}px;
            height: ${side}px;
            border: 1px solid grey;
            line-height: ${side}px;
            font-size: 40px;
            font-weight: bold;
            color: white;
            text-align: center;
              overflow: hidden;
          }

          .cube__face--front {
            transform: rotateY(0deg) translateZ(${side / 2}px);
          }
          .cube__face--right {
            transform: rotateY(90deg) translateZ(${side / 2}px);
          }
          .cube__face--back {
            transform: rotateY(180deg) translateZ(${side / 2}px);
          }
          .cube__face--left {
            transform: rotateY(-90deg) translateZ(${side / 2}px);
          }
          .cube__face--top {
            transform: rotateX(90deg) translateZ(${side / 2}px);
          }
          .cube__face--bottom {
            transform: rotateX(-90deg) translateZ(${side / 2}px);
          }


          .animate-cube{
            animation: spin ${6}s linear forwards infinite;
          }
      
          @keyframes spin {
              0% {
                transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
              }
              
              100% {
                transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg);
              }
            }
      `}</style>
    </div>
  );
};
export default BasicCube;
