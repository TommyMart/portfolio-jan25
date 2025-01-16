import React, { useEffect, useState } from "react";
import { faAws, faCss, faCss3, faFigma, faGit, faGithub, faHtml5, faJs, faLinkedin, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fadeIcon.css";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const icons = [ faReact, faJs, faPython, faCss, faHtml5, faFigma, faNodeJs, faAws, faGit, faGithub, faDatabase ]

const DisplayIcons = () => {
    const [iconData, setIconData] = useState({ icon: null, x: 0, y:0 });

    const getRandomPagePoint = () => {
        // Get width and height of browser window
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Get random X and Y values
        const randomX = Math.floor(Math.random() * windowWidth);
        const randomY = Math.floor(Math.random() * windowHeight);

        // Return icon coordinates
        return [randomX, randomY]
    }

    const getRandomIcon = () => {
        const randomIconIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIconIndex];
    };

    const createRandomIcon = () => {
        let [x, y] = getRandomPagePoint();
        let icon = getRandomIcon();
        setIconData({ icon, x, y });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            createRandomIcon();
        }, 3000);
       
        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    
    
      return (
        <>
        {iconData.icon && (
            <div
            key={Date.now()}
            className="fade-icon"
            style={{
              position: "absolute",
              left: `${iconData.x}px`,
              top: `${iconData.y}px`,
            }}
          >
            <FontAwesomeIcon icon={iconData.icon} size="3x" />
          </div>
      )}
    </>
    );
};

export default DisplayIcons;