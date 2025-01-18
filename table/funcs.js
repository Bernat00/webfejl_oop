/**
 * 
 * @param {string} text 
 * @param {number?} colSpan 
 * @returns 
 */
function createCell(text, colSpan){
    const cell = document.createElement('td');
    cell.innerText = text;

    if(colSpan){
        cell.colSpan = colSpan;
    }

    return cell;
}

/**
 * 
 * @param {Array<HTMLElement>} cells 
 */
function createRow(cells){
    const row = document.createElement('tr');

    for(cell of cells){
        row.appendChild(cell);
    }

    return row;
}