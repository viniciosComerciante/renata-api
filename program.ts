import StartUp from "./startUp";


let port = process.env.PORT || '3008';


StartUp.app.listen(port, ()=>{
    console.log(`Servidor executando na porta ${port}`);
});