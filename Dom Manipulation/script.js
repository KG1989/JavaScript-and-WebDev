let table = document.createElement('table'); //create table element

function buildTable() 
{
    let body = document.getElementsByTagName('body')[0] //first element
    //let table = document.createElement("table"); //create table element
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');
    let rowHead = document.createElement('tr');

    for (let i = 0; i < 4; i++) //4 columns
    {
        let ths = document.createElement('th');
        ths.textContent = 'Header ' + (i+1);
        rowHead.appendChild(ths);
        tableHead.appendChild(rowHead);
        ths.style.border = '1px solid black';
    }

    for (let a = 0; a < 3; a++)
    {
        let rowBody = document.createElement('tr');
        for (let j = 1; j < 5; j++)
        {
            let tds = document.createElement('td');
            tds.textContent = (j) + ', ' + (j);
            rowBody.appendChild(tds);
            tableBody.appendChild(rowBody);
            tds.style.border = '1px solid black';
        }
       //tableBody.appendChild(row);
    }

    table.appendChild(tableHead);
    table.appendChild(tableBody);
    body.appendChild(table);
}
function tableStyle () {
    table.style.border = '1px solid black';
    //table.style.background = '#ff787d';
}

function buildButtons()
{
    //let body = document.getElementsByTagName('body')[0]

    let upButton = document.createElement('button');
    upButton.id = 'up';
    upButton.textContent = "Up";
    document.body.appendChild(upButton);

    document.getElementById('up').style.right = '10px'

    let space = document.createElement('br');
    document.body.appendChild(space);

    let leftButton = document.createElement('button');
    leftButton.id = 'left';
    leftButton.textContent = "Left";
    document.body.appendChild(leftButton);

    let markButton = document.createElement('button');
    markButton.id = 'mark';
    markButton.textContent = "Mark";
    document.body.appendChild(markButton);

    let rightButton = document.createElement('button');
    rightButton.id = 'right';
    rightButton.textContent = "Right";
    document.body.appendChild(rightButton);

    let space2 = document.createElement('br');
    document.body.appendChild(space2);
   
    let downButton = document.createElement('button');
    downButton.id = 'down';
    downButton.textContent = "Down";
    document.body.appendChild(downButton);

}




//buildTable();
tableStyle();
//buildButtons();

function moveUp()
{
	index = document.getElementById("this");
	if (index.parentNode.rowIndex <= 1) 
	{
		return;
	}

	let tempSwap = index.cellIndex;

	index.style.borderWidth = "1px"
	index.removeAttribute("id");
	index = index.parentNode;
	index = index.previousElementSibling;
	index = index.firstElementChild;

	for (let i = 0; i < tempSwap; i++) 
	{
		index = index.nextElementSibling;
	}

	index.style.borderWidth = "3px";
	index.id = "this";
}

function moveDown()
{
  
	index = document.getElementById("this");
	if (index.parentNode.rowIndex >= 3) 
	{
		return;
	}
	
	let tempSwap = index.cellIndex;

	index.style.borderWidth = "1px"
	index.removeAttribute("id");
	index = index.parentNode;
	index = index.nextElementSibling;
	index = index.firstElementChild;

	for (let i = 0; i < tempSwap; i++) 
	{
		index = index.nextElementSibling;
	}

	index.style.borderWidth = "3px";
	index.id = "this";
}

function moveLeft()
{
    index = document.getElementById("this");
	if (index.cellIndex <= 0) 
	{
		return;
	}
	else
	{
		index.style.borderWidth = "1px"
		index.removeAttribute("id");
		index = index.previousElementSibling;
	
		index.style.borderWidth = "3px";
		index.id = "this";
		return;
	}
	
}

function moveRight()
{
	index = document.getElementById("this");
	if (index.cellIndex >= 3) 
	{
		return;
	}

	else
	{
		index.style.borderWidth = "1px"
		index.removeAttribute("id");
		index = index.nextElementSibling;
	
		index.style.borderWidth = "3px";
		index.id = "this";
		return;
	}
}

function markCell()
{
	index = document.getElementById("this");
	index.style.backgroundColor = "yellow";
}

buildTable();
buildButtons();
let index = document.getElementsByTagName("td")[0];

index.id = "this";
index.style.borderWidth = "3px";

document.getElementById("up").addEventListener("click", moveUp);
document.getElementById("down").addEventListener("click", moveDown);
document.getElementById("left").addEventListener("click", moveLeft);
document.getElementById("right").addEventListener("click", moveRight);
document.getElementById("mark").addEventListener("click",markCell)