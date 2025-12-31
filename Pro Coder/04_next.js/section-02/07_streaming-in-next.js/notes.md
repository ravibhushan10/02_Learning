Streaming in next.js

<Suspense fallback="Loading Views...">
           <Views/>    
          </Suspense>
//jo components data fetch me time le raha hai only vahi components late so load hoga ,,baki sab instantly load hoga 

//jab aap suspense ka use nahi karoge tab , ek components ke late ke chakkar me whole page ko wait karna hoga jab every content ka data load hoga tab page khulega
<!-- ************************* -->
So koi bhi API ko suspense ke andar dalana chahiye chahe oo kitna tej bhi q na ho
and fallback me koi bhi string or any Other Components ko dikha sakte hai