function onEdit(e) {
    // Ensure the event object is passed and check if it's an edit in the right column
    const sheet = e.source.getActiveSheet();
    const range = e.range;
    const value = e.value;

    // Define acronym mappings
    const acronymMap = {
        'x': 'Push',
        'y': 'Pull',
        'z': 'Legs',
        'c': 'Chest',
        'b': 'Back',
        'a': 'Arms',
        'm': 'Abs'
    };

    // Define the column where the Type is stored (column B = 2)
    const typeColumn = 2;  // Adjust if needed for the correct column

    // Check if the edited cell is in the "TYPE" column and if the value is an acronym
    if (range.getColumn() === typeColumn && value in acronymMap) {
        // Update the cell value to the full word
        sheet.getRange(range.getRow(), range.getColumn()).setValue(acronymMap[value]);
    }
    // Check if the value entered is "q" (to insert TODAY())
  if (value === "d") {
    // Set the cell to the TODAY() function
    range.setValue('=TODAY()');
  }
}
