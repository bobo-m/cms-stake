import React from "react";

const rewardsData = [
  {
    id: 1,
    icon: "🚀",
    title: "Bonuses every week",
    description:
      "Every week of each month, you’ll be rewarded with a bonus based on your recent games. The more you bet, the higher the bonuses.",
  },
  {
    id: 2,
    icon: "👑",
    title: "Your own VIP host",
    description:
      "Enjoy exclusive access to a dedicated VIP Host who will support and cater to your betting needs.",
  },
  {
    id: 3,
    icon: "🌲",
    title: "Level-up payouts",
    description:
      "Get paid each time you reach a new level. The higher you go, the better the level-ups get.",
  },
  {
    id: 4,
    icon: "💰",
    title: "Recent play bonuses",
    description:
      "Looking to win back your unsuccessful wagers? Stake offers money back on losses every time you level up.",
  },
];

const FifthComponent = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      {/* Main Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Wager more and see your rewards grow as a Stake VIP
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Step into a world of unique benefits, personalised service and
          exclusive bonuses, only as a Stake VIP.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
          Become a VIP
        </button>
      </div>

      {/* Rewards Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {rewardsData.map((reward) => (
          <div
            key={reward.id}
            className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            {/* Icon Section */}
            <div className="flex-shrink-0 w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-3xl mr-6">
              {reward.icon}
            </div>

            {/* Text Section */}
            <div>
              <h2 className="text-xl font-bold mb-2">{reward.title}</h2>
              <p className="text-gray-400">{reward.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthComponent;
