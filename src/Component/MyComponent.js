// Now we are in your app, let’s imagine it’s a React app

// This import doesn’t include coordinates of countries: it’s lighter
// that 'dotted-map', so especially useful in fronts.
// However, you must give it a map you have pre-computed before.
import DottedMap from 'dotted-map/without-countries';
import  "./MyComponent.css";

// Basically myMap.js contains something like:
//
// const MyMapString = 'the string mapJsonString that you got on the first step';
// export default MyMapString;
import {MyMapString} from './myMap';

const MyComponent = ({dat}) => {
  // It’s safe to re-create the map at each render, because of the
  // pre-computation it’s super fast ⚡️
  const map = new DottedMap({ map: JSON.parse(MyMapString) });

  map.addPin({
    lat: 40.73061,
    lng: -73.935242,
    svgOptions: { color: '#d6ff79', radius: 0.4 },
  });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: '#FFFFFF',
    shape: 'hexagon',
    backgroundColor: '#E2E4F0',
  });

  return (
    <div>
      <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} />
      <div className='chic mainA'>
       
        <div className='chicB mainB'></div>
       
        <div className='chicD'>
            Canada 6,28,572

        </div>
      </div>

      <div className='mainA braz'>
      <div className='brazA mainB'></div>
       
       <div className='brazD'>
           Brazil 4,92,911

       </div>
      </div>

      <div className='mainA germ'>
      <div className='germA mainB'></div>
       
       <div className='germD'>
           Germany 14,25,910

       </div>
      </div>

      <div className='mainA rus'>
      <div className='rusA mainB'></div>
       
       <div className='rusD'>
           Russia 3,48,579

       </div>
      </div>

      <div className='mainA jap'>
      <div className='japA mainB'></div>
       
       <div className='japD'>
           Japan 15,73,335

       </div>

      </div>
    </div>
  );
};

export default MyComponent;