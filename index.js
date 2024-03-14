//importing json-server package
const JSONserver=require('json-server')


//creating server using create method from json -server
 const MPserver=JSONserver.create()

 //genreting path/route to server resourse
 const router=JSONserver.router('db.json')

//  initiating json-server  middelewares
const middeleware=JSONserver.defaults()

//creating port number for server
const PORT=3000| process.env.PORT

//implementing middelware resourse  to sever
MPserver.use(middeleware)

//implementing route to resourse  to sever
MPserver.use(router)



//run command for server
MPserver.listen(PORT,()=>
{
    console.log(`server is runnig:${PORT}`);
})

