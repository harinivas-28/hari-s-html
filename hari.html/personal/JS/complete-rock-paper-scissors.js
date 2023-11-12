// JSON.parse('score')
    // let score = localStorage.getItem('score')
    let savedScore = JSON.parse(localStorage.getItem('score'));
    let score =savedScore || 
    {
            Wins: 0,
            Losses: 0,
            Ties: 0
        };
    let result='';
        // let savedScore = JSON.parse(localStorage.getItem('score'));
        //     if (savedScore) {
        //         score = savedScore;
        //     }
    function Score(){
        if(result === 'You Win'){
            score.Wins += 1;
        }
        else if(result === 'You Lose'){
            score.Losses +=1
        }
        else if(result === 'Tie'){
            score.Ties +=1
        }
    }
    function resetScore(){
        score = {
            Wins: 0,
            Losses: 0,
            Ties: 0
        };
        localStorage.removeItem('score');
        scoreBoard();
    }
    function game(PlayerOption){
        let ComputerOption = ComputerChoice();
        if(PlayerOption === 'Paper')
        {
            if(ComputerOption === 'Rock'){
                result = 'You Win';
            }
            else if(ComputerOption === 'Paper'){
                result = 'Tie';
            }
            else if(ComputerOption === 'Scissors'){
                result = 'You Lose';
            }
        }
        else if(PlayerOption === 'Rock'){
            if(ComputerOption === 'Rock'){
                result = 'Tie';
            }
            else if(ComputerOption === 'Paper'){
                result = 'You Lose';
            }
            else if(ComputerOption === 'Scissors'){
                result = 'You Win';
            }
        }
        else if(PlayerOption === 'Scissors'){
            if(ComputerOption === 'Rock'){
                result = 'You Lose';
            }
            else if(ComputerOption === 'Paper'){
                result = 'You Win';
            }
            else if(ComputerOption === 'Scissors'){
                result = 'Tie';
            }
        }
        function chosen(){
        let chosenOption = document.querySelector('.Choices');
        chosenOption.innerHTML=`You <img class="chosen-icons" src="/hari.html/images/${PlayerOption}-emoji.png">  <img class="chosen-icons" src="/hari.html/images/${ComputerOption}-emoji.png"> Computer`;
    }
    Score();
    chosen();
    scoreBoard();
        console.log(result);
        localStorage.setItem('score',JSON.stringify(score));
        /*alert(`You Chose ${PlayerOption}.Computer Chose ${ComputerOption}.${result}.
Wins = ${score.Wins},Losses = ${score.Losses},Ties = ${score.Ties}`)*/
    }
    function scoreBoard(){
            let scorebe = document.querySelector('.score-board');
            scorebe.innerHTML = `Wins = ${score.Wins},Losses = ${score.Losses},Ties = ${score.Ties}`;
        }
    function ComputerChoice(){
        let ComputerOption = '';
        let OptionChosen = Math.random();
        if(OptionChosen < 1/3 && OptionChosen >=0){
                ComputerOption = 'Rock';
        }
        else if(OptionChosen < 2/3 && OptionChosen >= 1/3){
            ComputerOption = 'Paper';
        } 
        else{
            ComputerOption = 'Scissors';
        }
        console.log(ComputerOption)
        return ComputerOption;
    }