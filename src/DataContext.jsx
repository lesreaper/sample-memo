import React, { useState } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";

const DataContext = React.createContext({});

export default DataContext;

const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
  const updatedAt = Date.now();
  // let i = 0;

  const getItems = () => {
    const items = [];
    for (let i = 0; i < 32; i++) {
      const id = uniqid();
      items.push({
        name: "Item " + id,
        selected: false,
        id
      });
    }
    return items;
  };

  const init = {
    updatedAt,
    SUB_GROUPA: {
      updatedAt,
      items: [...getItems()]
    },
    SUB_GROUPB: {
      updatedAt,
      items: [...getItems()]
    }
  };

  const groups = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  let items = groups.reduce((acc, g) => {
    acc[g] = { ...init };
    return acc;
  }, {});

  const [data, setData] = useState(items);

  const selectItem = (group, subgroup, id) => {
    setData(prevState => {
      const returnData = {
        ...prevState,
        [group]: {
          ...prevState[group],
          updatedAt: Date.now(),
          [subgroup]: {
            updatedAt: Date.now(),
            items: prevState[group][subgroup].items.map(item => {
              if (item.id === id) {
                return {
                  ...item,
                  selected: !item.selected
                };
              }
              return item;
            })
          }
        }
      };
      return returnData;
    });
  }

  return <Provider value={[data, setData, selectItem]}>{children}</Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node
};
