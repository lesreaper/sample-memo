import React, { useContext } from "react";
import DataContext from "./DataContext";
import { MemoItemGroup } from "./ItemGroup";

export const ItemList = ({ items, useMemo }) => {
  const [data, setData, selectItem] = useContext(DataContext);
  const totalSize = Object.keys(data).length;

  return (
    <div className="item-list">
      <div>
        Total items: {totalSize * 64}
      </div>
      {Object.keys(data).map(key => {
        return (
          <React.Fragment key={`ig-${key}`}>
            <h1>{key}</h1>
            <MemoItemGroup
              items={data[key]}
              group={key}
              updatedAt={data[key].updatedAt}
              selectItem={selectItem}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
