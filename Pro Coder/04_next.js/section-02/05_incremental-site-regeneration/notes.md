suppose you 200 blogs are dynamically changing in a some time then you have to regenerate the all 200 pages again . so your fresh data will show '

-> use the ISR 

By default its value is false(means 200 page ko dobara server se nahi magana hai)
export const revalidate= 5 (in second)

-> means every 5 second you are fetching the data from the server of all 200 blogs
but when user perform some action then it will generate in every 5 second , otherwise not