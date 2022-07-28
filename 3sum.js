var threeSum = (nums) => {
   if(nums.length < 3) return []

   for(let i = 0;i<nums.length;i++)
   {
    for(let j=i+1;j<nums.length;j++)
    {
        for(let k=j+1;k<nums.length;k++)
        {
            if(nums[i]+nums[j]+nums[k] === 0)
            {
                return [nums[i],nums[j],nums[k]]
            }
        }
    }
   }


}