var perechi = ['1','1','2','2','3','3','4','4'];
var memory_values = [];
var memory_card_ids = [];
var flipped = 0;

function newBoard(){
	flipped = 0;
	var output = '';

    perechi.shuffle();

	for(var i = 0; i < perechi.length; i++){
		output += '<div id="card_'+i+'" onclick="memoryFlipCard(this,\''+perechi[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}

Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
	
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function memoryFlipCard(card,val){	
	card.innerHTML = val;	
	
	memory_values.push(val);
	memory_card_ids.push(card.id);

	if(memory_values.length == 2){
		if(memory_values[0] == memory_values[1]){
			flipped += 2;
			memory_values = [];
            memory_card_ids = [];	
			if(flipped == perechi.length){
				alert("Congrats!");			
			}
		} 
		else
		{
			function hide(){
				var card_1 = document.getElementById(memory_card_ids[0]);
				var card_2 = document.getElementById(memory_card_ids[1]);
				   
            	card_1.innerHTML = "";
            	card_2.innerHTML = "";
				   
				 memory_values = [];
            	 memory_card_ids = [];
				}
			setTimeout(hide, 1000);
			}
		}

	
}