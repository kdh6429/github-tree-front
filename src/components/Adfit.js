import React, {useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Adfit = ({unit, width, height, refresh}) => {
    const adRef = React.createRef();
    useEffect(() => { 
      
      let ins = document.createElement('ins');
      let scr = document.createElement('script');

      ins.className = 'kakao_ad_area';
      ins.style.cssText = "display:none; width:100%;";
      scr.async = true;
      scr.type = "text/javascript";
      scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
      ins.setAttribute('data-ad-width', width.toString()); 
      ins.setAttribute('data-ad-height', height.toString());
      ins.setAttribute('data-ad-unit', unit);

    adRef.current?.childNodes.forEach( node => {
        adRef.current?.removeChild(node);
    })
    console.log( "adRef", adRef);
    // adRef.current?.removeChild()
    adRef.current?.appendChild(ins);
    adRef.current?.appendChild(scr);
    }, [refresh]);

    return (
        <div ref={adRef} />
    )
};

export default Adfit;
