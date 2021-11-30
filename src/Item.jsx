import React, { memo } from "react";

const Item = ({ item, selectItem, group, subgroup }) => {
  return (
    <div
      className={`item${item.selected ? " item--selected" : ""}`}
      onClick={() => selectItem(group, subgroup, item.id)}
    >
      <div className="item-img">
        <img src="https://plchldr.co/i/64x64?&bg=f51122&fc=fff&text=zen" alt="" />
      </div>
      <span>{item.name}</span>
    </div>
  );
}

export const MemoItem = memo(Item, (prevProps, nextProps) => {
  if (prevProps.item.selected === nextProps.item.selected) {
    return true;
  }
  return false;
});