"use client";

import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="p-4">
        {activeTab === 0 && <div>Content for Tab1</div>}
        {activeTab === 1 && <div>Content for Tab2</div>}
        {activeTab === 2 && <div>Content for Tab3</div>}
        {activeTab === 3 && <div>Content for Tab4</div>}
      </div>
    </div>
  );
};

export default Tabs;
