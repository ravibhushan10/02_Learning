<!-- ********************** -->
md:mark down file
->next.js official documentation:nextjs.org
<!-- ********************* -->
npx create-next-app@latest
to start project in development mode: npm run dev
to start project in production mode:  npm run build
                                      npm start

to disable js : ctr+shift+p(type enable/disable)
<!-- ********* react.js ************ -->
vite(react) : use a static server to serve the file(all content written in jsx , bable convert into normal js then our vite server serve the file in browser) (client side rendring)

server se only khali(div) html aata hai and client side par jab js run hota hai then aapka page show hota hai
<!-- ******** next.js ************* -->
it use dynamic server

 next.js :whole html page comes with full content from the server(converting jsx into normal js ,all rendring done in server) and display in browser

when we use "use client" then code pahale server par run hota hai then client side par send hota hai and yaha par bhi run hota hai

but when we don't use then it run only one server and send generated html to client 

<!-- ************** SEO **************** -->
why next.js is seo: because it sends the whole html page in client side so , for the search engine easy to find what type of content present inside it.

->but in react it send the only blank html file so search engine not able to see what type of content present inside it ..so this is not seo

<!-- ********** Faster **************** -->
in react.js firstly load the blank file then execute js file then content show , sometimes blank file stay at more time

->but in next.js all content show in one step (all content show)
<!-- ********** client load less **************** -->
don't need to create the all html element by browser


<!-- ********** clone a special repo **************** -->
git clone --no-checkout https://github.com/procodrr/nextjs-course.git temp
cd temp
git sparse-checkout init --cone
git sparse-checkout set section-3/02_static-vs-dynamic-rendering-starter
git checkout main
mv section-3/02_static-vs-dynamic-rendering-starter ../
cd ..
rm -rf temp

