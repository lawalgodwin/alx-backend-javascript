import {RowID, RowElement} from "./interface"

// Ambient files can be seen as C/C++ equivalent for header files
// they contain the declaration and not the implementation

// the declaration file containing all CRUD functions implemented in crud.js
declare function insertRow(row: RowElement): number
declare function deleteRow(rowId: RowID): void
declare function updateRow(rowId: RowID, row: RowElement): RowID
