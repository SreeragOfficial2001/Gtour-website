import React from 'react';

const Adventure = () => {
  return (
    <div className="bg-black text-white py-16 min-h-20"> 
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-6"> 
            This adventure isn't about change but it seems to be an inevitability.
          </h1>
          <p className="text-lg mb-10"> 
            Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.
          </p>
        </div>
        <div className="flex justify-center space-x-20">
          <div>
            <p className="text-6xl font-bold">0</p>
            <p className="text-xl">Trips</p> 
          </div>
          <div>
            <p className="text-6xl font-bold">0</p>
            <p className="text-xl">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
