function mincost(arr)
{ 
//write your code here
// return the min cost
	let min_cost =0;
	arr.sort();
	for(let i=0; i<arr.length-1; i++){
		min_cost += arr[0]+arr[1];
		arr[0] = arr[0]+ arr[1];
        console.log("cost " + min_cost);
		// now need to remove arr[i+1]
		arr.splice(1,1);
        console.log(arr);
	}
    min_cost += arr[0]+arr[1];
    console.log("final cost " + min_cost);
	return min_cost;
  
}

module.exports=mincost;
