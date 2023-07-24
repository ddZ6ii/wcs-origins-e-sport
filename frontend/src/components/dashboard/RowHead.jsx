// Packages
import PropTypes from "prop-types";

export default function RowHead({ activeTab }) {
  const titles = [
    {
      id: 1,
      name: "ID",
    },
    {
      id: 2,
      name: "Name",
    },
    {
      id: 3,
      name: "Category",
    },
    {
      id: 4,
      name: "Language",
    },
    {
      id: 5,
      name: "Status",
    },
    {
      id: 6,
      name: "Premium",
    },
    {
      id: 7,
      name: "Actions",
    },
    {
      id: 8,
      name: "Email",
    },
    {
      id: 9,
      name: "Plan",
    },
    {
      id: 10,
      name: "Watch",
    },
    {
      id: 11,
      name: "Unlike",
    },
  ];

  const filteredTitles = titles.filter((title) => {
    if (
      activeTab === "video" &&
      (title.name === "Premium" ||
        title.name === "Pseudo" ||
        title.name === "Email" ||
        title.name === "Plan" ||
        title.name === "Watch" ||
        title.name === "Unlike")
    ) {
      return false; // Exclude "Premium" for video tab
    }
    if (
      activeTab === "dashboard" &&
      (title.name === "Actions" ||
        title.name === "Pseudo" ||
        title.name === "Email" ||
        title.name === "Plan" ||
        title.name === "Watch" ||
        title.name === "Unlike")
    ) {
      return false; // Exclude "Actions" for video tab
    }
    if (
      activeTab === "userList" &&
      (title.name === "Category" ||
        title.name === "Language" ||
        title.name === "Status" ||
        title.name === "Premium" ||
        title.name === "Actions" ||
        title.name === "Watch" ||
        title.name === "Unlike")
    ) {
      return false; // Exclude "Actions" for video tab
    }
    if (
      (activeTab === "category" ||
        activeTab === "language" ||
        activeTab === "game") &&
      (title.name === "Category" ||
        title.name === "Language" ||
        title.name === "Status" ||
        title.name === "Premium" ||
        title.name === "Email" ||
        title.name === "Plan" ||
        title.name === "Watch" ||
        title.name === "Unlike")
    ) {
      return false; // Exclude headers for category, language and game tabs
    }
    if (
      activeTab === "fav" &&
      (title.name === "ID" ||
        title.name === "Status" ||
        title.name === "Premium" ||
        title.name === "Pseudo" ||
        title.name === "Email" ||
        title.name === "Plan" ||
        title.name === "Actions")
    ) {
      return false; // Exclude "Favorite" for video tab
    }
    return true; // Include other titles
  });

  return (
    <thead className="bg-primary text-neutralLightest">
      <tr>
        {filteredTitles.map((title) => (
          <th key={title.id} scope="col" className="px-4 py-3 text-base">
            {title.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}

RowHead.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
