import React from "react";
import { PlaylistImgs } from "../../constants/constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";

const FeaturedPlaylists = () => {
  return (
    <section className="py-16  bg-[#191624]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Featured Playlists
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PlaylistImgs.map((playlist, index) => (
            <div key={playlist.id} className="animate-slideleft">
              <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                <Tilt
                  options={{ max: 45, scale: 1, speed: 450 }}
                  className="p-5 rounded-2xl"
                >
                  <div className="w-full h-[130px] relative">
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="bottom-1 left-5 absolute">
                      <p className="mt-2 font-bold text-white text-1xl">
                        {playlist.name}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaylists;
