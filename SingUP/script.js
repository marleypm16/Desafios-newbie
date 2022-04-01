// coletando os dados do html
const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const senha=document.getElementById('password')
const confirmaçao=document.getElementById('confirma')

form.addEventListener('submit',(e) =>{
    //nao permito que a pagina recarregue

    e.preventDefault()

    //chamo a funçao

    checkInputs()
})

function checkInputs(){
    //checo os valores das constantes
    const uservalue=username.value
    const emailvalue=email.value;
    const senhavalue=senha.value;
    const confirmaçaovalue=confirmaçao.value;
    if(uservalue ===''){
        setErrorFor(username,'Username cannot be blank')

    }
    else{
        setSucessoFor(username)
    }

    if (emailvalue ===''){
        //se o email estiver vazio chamo a funçao setErrorfor com os paranmetros(input=email,mensagem=' email cannot be blank')
        setErrorFor(email,'Email cannot be blank')
    }
    else{
        setSucessoFor(email)
    }

    if(senhavalue==''){
        setErrorFor(senha,'Password cannot be blank')
    }
    else if(senhavalue.length  < 7){
        setErrorFor(senha,'Password must be at least 7 characters')

    }
    else{
        setSucessoFor(senha)
    }

    if(confirmaçaovalue==''){
        setErrorFor(confirmaçao,'The Password Confirmation cannot be blank')
    }
    else if(confirmaçaovalue!=senhavalue){
        setErrorFor(confirmaçao,'Passwords do not match')
    }
    else{
        setSucessoFor(confirmaçao)
    }

}

function setErrorFor(input,mensagem){
    //pego o elemento pai do input
    const formControl= input.parentElement;
    //ex:
    //sendo email o input , o elemento pai dele é a div com a classe form-control

    const small= formControl.querySelector('small');
    //pego a tag small dentro das form-control
    small.innerText=mensagem;
    //recebe a mensagem 
    formControl.className='form-control erro';
    //mudo o nome da classe do form-control
}

function setSucessoFor(input){

    const formControl=input.parentElement;
    formControl.className='form-control sucesso'
}