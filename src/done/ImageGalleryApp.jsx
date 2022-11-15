import React from "react";
import { createRoot } from "react-dom/client";
// copy below from here only for TestDome
const ImageGallery = (props) => {
  const [links, setLinks] = React.useState(props.links);

  const removePicture = (link) => {
    setLinks((prev) => {
      const newLinks = prev.filter((l) => l != link);
      return [...newLinks];
    });
  };

  return (
    <div>
      {links
        ? links.map((link, index) => {
            return (
              <div key={index} className="image">
                <img src={link} />
                <button onClick={() => removePicture(link)} className="remove">
                  X
                </button>
              </div>
            );
          })
        : undefined}
    </div>
  );
};

// copy above from here only for TestDome

const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
const rootElement = document.getElementById("root");
createRoot(rootElement).render(<ImageGallery links={links} />);
