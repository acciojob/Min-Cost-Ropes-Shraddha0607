function mincost(arr)
{ 
//write your code here
// return the min cost
	let min_cost =0;
	arr.sort();
	for(let i=0; i<arr.length-1; i++){
		min_cost += arr[0]+arr[1];
		arr[0] = arr[0]+ arr[1];
		// now need to remove arr[i+1]
		arr.splice(1,1);
	}
    min_cost += arr[0]+arr[1];
	return min_cost;
  
}

module.exports=mincost;
