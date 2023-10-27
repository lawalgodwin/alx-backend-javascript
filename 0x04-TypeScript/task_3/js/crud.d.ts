import {RowID, RowElement} from "./interface"

// the declaration file containing all CRUD functions implemented in crud.js
declare function insertRow(row: RowElement): number
declare function deleteRow(rowId: RowID): void
declare function updateRow(rowId: RowID, row: RowElement): RowID
