function mincost(arr)
{ 
//write your code here
// return the min cost
	let min_cost =0;
	Arrays.sort(arr);
	for(let i=0; i<arr.length-1; i++){
		min_cost += arr[i]+arr[i+1];
		arr[i] = arr[i]+ arr[i+1];
		// now need to remove arr[i+1]
		arr.splice(i+1,1);
	}

	return min_cost;
  
}

module.exports=mincost;
