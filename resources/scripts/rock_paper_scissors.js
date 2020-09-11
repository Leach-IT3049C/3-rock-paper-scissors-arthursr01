class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ]
    let index = Math.floor(Math.random() * Math.floor(acceptedValues.length));
    return acceptedValues[index];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    
    let final = "none";
    if (userSelection === cpuSelection)
    {
      final = "tie";
    }
    else if (userSelection === "rock" && cpuSelection === "scissors")
    {
      final = "win";
    }
    else if (userSelection === "paper" && cpuSelection === "rock")
    {
      final = "win";
    }
    else if (userSelection === "scissors" && cpuSelection === "paper")
    {
      final = "win";
    }
    else 
    {
      final = "lose";
    }
    return final;
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    let cpuSelection = this.generateCPUResponse();
    let outcome = this.determineWinner();
    if (outcome === "win")
    {
      this.score.user++;
    }
    else if (outcome === "lose")
    {
      this.score.cpu++;
      
  }
  this.gameHistoryLog.push(username.value + ' selected ' + userSelection + ', CPU selected ' + cpuSelection + ': ' + username.value + ' ' + outcome);
  }

}