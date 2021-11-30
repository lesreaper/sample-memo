import React, { memo } from "react";
import { MemoItem } from "./Item";

const ItemGroup = ({ items, selectItem, group }) => {
  return (
    <div className="item-group">
      <div className="item-group--a">
        {items.SUB_GROUPA.items.map(item => (
          <MemoItem
            group={group}
            subgroup={"SUB_GROUPA"}
            key={`item-${item.id}`}
            item={item}
            selectItem={selectItem}
          />
        ))}
      </div>
      <div className="item-group--b">
        {items.SUB_GROUPB.items.map(item => (
          <MemoItem
            group={group}
            subgroup={"SUB_GROUPB"}
            key={`item-${item.id}`}
            item={item}
            selectItem={selectItem}
          />
        ))}
      </div>
    </div>
  );
}

export const MemoItemGroup = memo(ItemGroup, (prevProps, nextProps) => {
  if (prevProps.updatedAt === nextProps.updatedAt) {
    return true;
  }
  return false;
});
