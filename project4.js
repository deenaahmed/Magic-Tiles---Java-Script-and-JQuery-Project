	$(document).ready(function(){
		function clickableGrid( rows, cols){
	  var grid = document.createElement('table');
	  grid.className = 'grid';
	  grid.setAttribute("position", "relative");
	  grid.setAttribute("outline","2px solid #000");
	  grid.setAttribute("font-size", 0);
	  grid.setAttribute("margin","auto");
	  grid.setAttribute("padding", 0);
	  grid.setAttribute("border", "none");
	  for (var r=0;r<rows;++r){
		var tr = grid.appendChild(document.createElement('tr'));
		
		for (var c=0;c<cols;++c){
		  var cell = tr.appendChild(document.createElement('td'));
		  cell.setAttribute("id",counter);
		  cell.setAttribute("margin",0);
		cell.setAttribute("padding",0);
		cell.setAttribute("border","none");
		cell.setAttribute("outline","1px solid #000");
		cell.setAttribute("display","inline-block");
		if(n==20)
		{
		cell.style.width="20px";
		cell.style.height="20px";
		}
		else if(n==50)
		{
			cell.style.width="10px";
			cell.style.height="10px";
		}
		else if(n==100)
		{
			cell.style.width="5px";
			cell.style.height="5px";
		}
			
			cell.style.backgroundColor="white";
			counter++;
		  cell.addEventListener('click',function(){
			  if(flag_create)
			  {
			  if($(this)[0].style.backgroundColor=="white")
			{
				$(this)[0].style.backgroundColor = "black";
			}
			else
			{
				$(this)[0].style.backgroundColor="white";
			}
			  }
		  }
			);
		} //aflet tnay for
		}//aflet awl for
			 return grid;
	} //aflet l clickable grid fn
		$("#previous").attr("disabled",true);	
		function createe(){
			flag_start=false;
		$("#create").attr("disabled", true);
		if((n<0)||(!n))
		{
			//alert("board size is empty");
		}
		else
		{
			board.appendChild(clickableGrid(n,n));	
			} //afllet l else
		}
		
		function resett(){ 
		$("#previous").attr("disabled",true);	
		if($("#start").html()=="Pause")
		{
			flag_next=true;
				flag_pause=false;
		clearInterval(st);
		}
		else
		{
		}
		$("#next").attr("disabled", false);
		$("#start").html("Start");
		board.appendChild(document.createElement('br'));	
		for(var ii=1;ii<=(n*n);ii++)
			{
				document.getElementById(ii).style.backgroundColor="white";
				flag_create=true;
				document.getElementById(ii);
			}
		                }
		
		function Nextitteration(){
			//$("#previous").attr("disabled", false);
		function getstatus(myElement) {
						var flag;
						if((myElement>0)&&(myElement<=(n*n)))
					{
						if(document.getElementById(myElement).style.backgroundColor=="white")
						{
							//neighbour is inactive
							flag=2;
							
						}
						else
						{
							flag=1; //neighbour is active
						}
					}
					else
					{
						flag=0; //invalid number of neighbour
					}
					return flag	;
					}
					function countactive(array) {
						var numberofactiveneighbours=0;
					for(var prop in array)
					//	for(var prop=0;prop<array.length;prop++)
						{
							if(array[prop]==1)
							{
								numberofactiveneighbours++;
							}
						}
						return numberofactiveneighbours;
					}
			arrayofobjects[counter_array]=[];		
			for(var ii=1;ii<=(n*n);ii++)
			{
				//get neighbours
				    var row;
					var col;
					var inc=0;
					for(var r=0;r<n;r++)
					{
						for(var c=0;c<n;c++)
						{
							inc++;
							if(ii==inc)
							{
								row=r;
								col=c;
							}
                            else
                            {
                            }							
						}
					}
				var i1=ii +1;
                    if((col+1)>n)
					{
						i1=-1;
					}
					else
					{
					}
					var i2=ii -1;
					if((col-1)<0)
					{
						i2=-1;
					}
					else
					{
					}
					var i3=+ii + +n;
					var i4=ii-n;
					var i5=+ii + +n-1;
					if((col-1)<0)
					{
						i5=-1;
					}
					else
					{
					}
					var i6=+ii + +n+1;
					if((col+1)>n)
					{
						i6=-1;
					}
					else
					{
					}
					var i7=ii-n-1;
					if((col-1)<0)
					{
						i7=-1;
					}
					else
					{
					}
					var i8=ii-n+1;
					if((col+1)>n)
					{
						i8=-1;
					}
					else
					{
					}
					var flag_1,flag_2,flag_3,flag_4,flag_5,flag_6,flag_7,flag_8;
					
					flag_1=getstatus(i1);
					flag_2=getstatus(i2);
					flag_3=getstatus(i3);
					flag_4=getstatus(i4);
					flag_5=getstatus(i5);
					flag_6=getstatus(i6);
					flag_7=getstatus(i7);
					flag_8=getstatus(i8);
					
					array={flag_1,flag_2,flag_3,flag_4,flag_5,flag_6,flag_7,flag_8};
				if(document.getElementById(ii).style.backgroundColor=="white") //inactive
				{
					if(counter_array==0)
				{
				arrayofobjects[counter_array][ii]=0;	
				}
				else
				{
				}	
					
					var numberofactiveneighbours=countactive(array);
					
					if(numberofactiveneighbours==3) 
					{
						array1[ii]=1;
						//document.getElementById(ii).style.backgroundColor="black";
					}
					else
					{
						array1[ii]=0;
						//document.getElementById(ii).style.backgroundColor="white";
					}
				}
				else //active
				{
					if(counter_array==0)
				{
				arrayofobjects[counter_array][ii]=1;	
				}
				else
				{
				}
					var numberofactiveneighbours=countactive(array);
					if((numberofactiveneighbours==2)||(numberofactiveneighbours==3))
					{
						array1[ii]=1;
						//document.getElementById(ii).style.backgroundColor="black";
					}
					else
					{
						array1[ii]=0;
						//document.getElementById(ii).style.backgroundColor="white";
					}
				}
			}
			if(counter_array==0)
			{
			counter_array=counter_array+1;
			for(var cv=0;cv<(n*n);cv++)
			{
			arrayofobjects[counter_array][cv]=array1[cv];
			}
			counter_array=counter_array+1;
			}
			else
			{
				var flag_diff=0;
			for(var fr=0;fr<(n*n);fr++)
			{
			if(arrayofobjects[counter_array-1][fr]==array1[fr])
			{
			}
			else
			{
			flag_diff=1;	
			}
			}
			if(flag_diff==1)
			{
			arrayofobjects[counter_array]=[];
			for(var cv=0;cv<(n*n);cv++)
			{
			arrayofobjects[counter_array][cv]=array1[cv];
			}
			counter_array=counter_array+1;
			}
			else
			{
			}
			}
			
			for(var iin=1;iin<=(n*n);iin++)
			{
				if(array1[iin]==1)
				{
				document.getElementById(iin).style.backgroundColor="black";	
				}
				else
				{
					document.getElementById(iin).style.backgroundColor="white";
				}
			}	
		}
		
		var n;
		var counter=1;
		var flag_array=0;
		var flag_create=true;
		var flag_start=true;
		var flag_pause=false;
		var flag_next=false;
		var flag_previous=false;
		var flag_reset=false;
		var flag_play=true;
		var array1=[];
		var array=[];
		var arrayofobjects=[];
		var delay;
		var counter_array=0; 
	    var flag_intial=0;
		var st;
		var flag_delay=false;
		
		$("#sizee").on("change",function(){
	    $("#sizee").attr("disabled", true);
		n= document.getElementById("sizee").value;
		//createe;
		});
		$("#delay").on("change",function(){
			
		delay= document.getElementById("delay").value;

			if(flag_delay==false)
			{
			}
			else
			{
				clearInterval(st);
				if((delay==100)||(delay==200)||(delay==500)||(delay==1000))
			{
			$("#start").html("Pause");
				st =setInterval(Nextitteration,delay);
			}
			else
			{
				alert("you haven't choose the delay yet");	
			}
			}
		});
		$("#previous")[0].addEventListener("click",function(){ 
			for(var iin=1;iin<=(n*n);iin++)
			{
			document.getElementById(iin).style.backgroundColor="white";	
			}
			for(var ff=1;ff<=(n*n);ff++)
			{
				if(counter_array-2<0)
				{
				$("#previous").attr("disabled", true);	
				}
				else
				{
					if(arrayofobjects[counter_array-2][ff]==1)
				{
					
				document.getElementById(ff).style.backgroundColor="black";	
				}
				else
				{
					document.getElementById(ff).style.backgroundColor="white";
				}	
				}
			}
			counter_array=counter_array-1;
		});
		$("#next")[0].addEventListener("click",function (){
			$("#previous").attr("disabled",false);	
			Nextitteration();});
		$("#reset")[0].addEventListener("click",resett);
		function callback(){
				if($(this).style.backgroundColor=="white")
			{
				$(this).style.backgroundColor = "black";
			}
			else
			{
				$(this).style.backgroundColor="white";	
			}
			}
		$("#create")[0].addEventListener("click",createe);			
				
			$("#start")[0].addEventListener("click",function(){ 
			if(flag_next==true)
		{
			$("#next").attr("disabled", false);
		}
		else
		{
			$("#next").attr("disabled", true);
		}
			if(flag_start==true)
			{
				alert("the board isn't created yet");
			}
			else
			{
				flag_create=false;
			if(flag_pause==true)
			{
				$("#previous").attr("disabled",false);	
				flag_next=true;
				$("#next").attr("disabled", false);
				flag_pause=false;
		$("#start").html("Start");
		clearInterval(st);
			}
			else
			{
			flag_delay=true;	
		    flag_next=false;
			$("#next").attr("disabled", true);
				if((delay==100)||(delay==200)||(delay==500)||(delay==1000))
			{
				flag_pause=true;
			$("#start").html("Pause");
				st =setInterval(Nextitteration,delay);	
			}
			else
			{
				alert("you haven't choose the delay yet");
			}
			}
			} /////////////////////

			});
	});