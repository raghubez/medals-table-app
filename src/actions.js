export const sortDescending = medalType => ({
  type: "SORT_DESCENDING",
  medalType
});

export const reset = () => ({
  type: "RESET"
});

export const deleteRows = () => ({
  type: "DELETE"
});

export const handleRowSelection = country => ({
  type: "HANDLE_ROW_SELECTION",
  country
});
