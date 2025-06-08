import React, { useEffect, useState } from "react";

export default function SelectAllForm() {
  const [items, setItems] = useState(
    ["item1", "item2", "item3"].map((name, index) => {
      return { id: index, name: name, selected: false };
    })
  );
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    let result = items.length > 0 && items.every((item) => item.selected);
    setAllSelected(result);
  }, [items]);

  function handleCheck(id) {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return {...item, selected: !item.selected};
        }
        return item;
      });
    });
  }
  
  function handleSelectAll() {
    if (allSelected) {
      setItems((items) => {
        return items.map((item) => {
          return {...item, selected: false};
        })
      });
    } else {
      setItems((items) => {
        return items.map((item) => {
          return {...item, selected: true};
        })
      });
    }
  }

  return (
    <div>
      SelectAllForm
      <br />
      <div>
        Selected Items:{" "}
        {items
          .filter((item) => item.selected)
          .map((item) => item.name)
          .join(",")}
      </div>
      <div>
        <label>
          <input type="checkbox" checked={allSelected} onChange={handleSelectAll}/>
          Select All
        </label>
      </div>
      {items.map((item) => {
        return (
          <div>
            <label>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleCheck(item.id)}
              />
              {item.name}
            </label>
          </div>
        );
      })}
    </div>
  );
}
