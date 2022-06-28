function ConfirmDelete(){

    let consulta = confirm ("Está seguro que desea continuar?")
    
    if (consulta == true){
        return true;
    }
    else{
        return false;
    }
}
