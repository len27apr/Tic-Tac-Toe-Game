let CheckArray=Array.from(Array(9).keys());
let num=0;
let playerId=0;
let winnerArray=Array.from(Array(9).keys());
// const result=document.querySelector('div h1:last-of-type');
// console.log(result);
const listItems = [];
for(let i=0;i<9;i++)
{
    const listItem=document.getElementById(`${i}`);
    listItems.push(listItem);
}


PlayerTurn();

function PlayerTurn()
{
    const rows = document.getElementsByTagName('tr');
    for(let i=0;i<rows.length;i++)
    {
        rows[i].addEventListener('click', (event)=>
        {
            // console.log(event.target.id);
            for(j=0;j<CheckArray.length;j++)
            {
                if(CheckArray[j]==parseInt(event.target.id))
                {
                    //console.log('player element equal to array element and the playerCheckArray position is',playerCheckArray[j],'and the event target value is ',event.target.id);
                    event.target.textContent='X';
                    const splicedValue = CheckArray.splice(j,1);
                    winnerArray[parseInt(event.target.id)]=event.target.textContent;
                    if(((winnerArray[0]==winnerArray[1]) && (winnerArray[0]==winnerArray[2])) || ((winnerArray[0]==winnerArray[4]) && (winnerArray[0]==winnerArray[8])) || ((winnerArray[0]==winnerArray[3]) && (winnerArray[0]==winnerArray[6])) || ((winnerArray[2]==winnerArray[4]) && (winnerArray[2]==winnerArray[6])) || ((winnerArray[6]==winnerArray[7]) && (winnerArray[6]==winnerArray[8])) || ((winnerArray[2]==winnerArray[5]) && (winnerArray[2]==winnerArray[8])) || ((winnerArray[1]==winnerArray[4]) && (winnerArray[1]==winnerArray[7])) || ((winnerArray[3]==winnerArray[4]) && (winnerArray[3]==winnerArray[5])))
                    {
                       const result=document.querySelector('div h1:last-of-type'); 
                       result.textContent='PLAYER IS THE WINNER';
                       CheckArray.splice(0,CheckArray.length);
                       console.log('Player Lennon clicked on the column number ',event.target.id,' and emerges as the winner');
                       break;
                    }
                    console.log('Player Lennon clicked on the column number ',event.target.id);
                    ComputerTurn(event.target.id);
                }
            }
            
        })
    }  
}


function ComputerTurn(value)
{
    playerId=parseInt(value);
    let num=0;
    do
    {
    num=Math.floor(9*Math.random());
    }while((playerId===num));

    while(!(CheckArray.includes(num)))
    {
        num=Math.floor(9*Math.random());
        if(CheckArray.length==0)
        {
            const result=document.querySelector('div h1:last-of-type'); 
            result.textContent="THE GAME IS A DRAW";
            break;
        }
    }
    
    // console.log(`Does The check array not contain the number ${num} ?? ${!(CheckArray.includes(num))}`)
    for(let j=0;j<listItems.length;j++)
    {
        if(CheckArray.length==0)
        {
            //console.log(`The winner array is given by: ${winnerArray}`);
            break;
        }
        if(listItems[j].id==num)
        {
            listItems[j].textContent='O';
            winnerArray[num]='O';
            //console.log(`\nthe winner array is ${winnerArray}`);
            if(((winnerArray[0]==winnerArray[1]) && (winnerArray[0]==winnerArray[2])) || ((winnerArray[0]==winnerArray[4]) && (winnerArray[0]==winnerArray[8])) || ((winnerArray[0]==winnerArray[3]) && (winnerArray[0]==winnerArray[6])) || ((winnerArray[2]==winnerArray[4]) && (winnerArray[2]==winnerArray[6])) || ((winnerArray[6]==winnerArray[7]) && (winnerArray[6]==winnerArray[8])) || ((winnerArray[2]==winnerArray[5]) && (winnerArray[2]==winnerArray[8])) || ((winnerArray[1]==winnerArray[4]) && (winnerArray[1]==winnerArray[7])) || ((winnerArray[3]==winnerArray[4]) && (winnerArray[3]==winnerArray[5])))
            {
                const result=document.querySelector('div h1:last-of-type'); 
                result.textContent='COMPUTER IS THE WINNER';
                CheckArray.splice(0,CheckArray.length);
                console.log('Computer clicked on the column number ',num,' and emerges as the winner');
                break;
            }
            const findIndex=CheckArray.indexOf(num);
            CheckArray.splice(findIndex,1);
            console.log('Computer clicked on the column number ',num);
            console.log('\n');
        }
    }
    
         

}