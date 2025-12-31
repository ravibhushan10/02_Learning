<!-- ************ Static site generation(build time par hota hai) **************** -->
jo dynamic routes hai uska jo run time par run hota hai , usko build time par hi create kar liay jaye(HTML bana liya jaye) taki jab bhi click ho to dobara se create na karna pare .

we generate at build time frequently visited pages(like listed all three blogs links)

-> To Do static site generation use: 
generateStaticParams() function banana hai.

-> iske bad bhi jab user 200 ke alwa kisi page par jata hai to SSG hota hai isko block karne ke liye use karte hai dynamicparams ka 

-> This rendring use when you data is fixed like (blog) , but when you data is frequently changed then use ISR