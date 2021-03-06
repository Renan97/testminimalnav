import React, { useState } from "react";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export default function App() {
  const [test, setTest] = useState("/management/projects");
  return (
    <>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId={test}
        onSelect={({ itemId }) => {
          setTest(itemId);
        }}
        items={[
          {
            title: "Dashboard",
            itemId: "/dashboard",
            // you can use your own custom Icon component as well
            // icon is optional
          },
          {
            title: "Management",
            itemId: "/management",
            subNav: [
              {
                title: "Projects",
                itemId: "/management/projects",
              },
              {
                title: "Members",
                itemId: "/management/members",
              },
            ],
          },
          {
            title: "Another Item",
            itemId: "/another",
            subNav: [
              {
                title: "Teams",
                itemId: "/management/teams",
              },
            ],
          },
        ]}
      />
    </>
  );
}
