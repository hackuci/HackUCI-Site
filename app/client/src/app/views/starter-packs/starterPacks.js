import React from "react";

import "./starterPacks.scss";

import { Fireflies, Tooltip } from "app/components/";
import { starterPackData } from "./../../../assets/data/starter-pack-info.js";

import ProjectIdeas from "./project-ideas/projectIdeas";

function StarterPacks({ match }) {
  // return (
  //   <div className="starter-packs">
  //     <Fireflies fireflyCount={30} />
  //     <h2>Starter Packs Coming Soon!</h2>
  //   </div>
  // );

  function getOptionalContent(optionalName) {
    for (let i = 0; i < starterPackData.length; i++) {
      for (let j = 0; j < starterPackData[i].packs.length; j++) {
        if (starterPackData[i].packs[j].name.toLowerCase() === optionalName) {
          return starterPackData[i].packs[j].content;
        }
      }
    }
    return null;
  }

  if (match.params.optionalDirections) {
    return (
      <div className="starter-packs">
        <div className="starter-packs-instructions">
          {getOptionalContent(match.params.optionalDirections)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="starter-packs">
        <Fireflies fireflyCount={30} />
        <ProjectIdeas />
        <h2 style={{ marginBottom: "2rem" }}>Starter Packs</h2>
        {starterPackData.map(function(starterPack, index) {
          return (
            <div className="starter-pack-card" key={index}>
              <div className="starter-pack-card-information">
                <h3>{starterPack.name}</h3>
                <p>{starterPack.description}</p>
              </div>
              <div className="starter-pack-card-links">
                {starterPack.packs.map(function(pack, indexTwo) {
                  return (
                    <Tooltip content={pack.tooltip}>
                      <a
                        className="starter-pack-card-link"
                        href={pack.link}
                        target="_blank"
                        key={indexTwo}
                      >
                        <div>
                          <h4>{pack.name}</h4>
                        </div>
                      </a>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div style={{ height: "5rem" }} />
      </div>
    );
  }
}

export default StarterPacks;
