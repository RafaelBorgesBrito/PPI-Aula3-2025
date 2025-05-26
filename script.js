import http from 'http';
import express from "express";

const porta = 3001;
const host = "localhost";
const app = express();
var listaFornecedores = [];
var listaUsuarios = [];


app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Login</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
     <style>
        body {
             margin: 0;
             display: grid;
             place-items: center;
             min-height: 100vh;
             background-color: rgb(156, 156, 156);
             padding: 20px 0;
             padding-top: 70px;
         }
         .formum {
             background-color: #f8f9fa;  
             border: 2px solid #019bcac0;  
             border-radius: 8px;
             padding: 30px;
             box-shadow: 
                 0 0 12px rgba(0, 255, 234, 0.3),  
                 0 4px 20px rgba(0, 0, 0, 0.1);     
             text-align: center;
             width: 900px;
             max-width: 95%;
             color: #000000;  
             position: relative;
             overflow: hidden;
         }
         .formum::after {
             content: '';
             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             height: 3px;
             background: linear-gradient(90deg, 
               rgba(0,255,157,0) 0%, 
               rgba(0, 183, 255, 0.6) 50%, 
               rgba(0,255,157,0) 100%);
             animation: shine 3s ease-in-out infinite;
         }
         .formum h1 {
             font-size: 1.8rem; 
             margin-bottom: 2rem; 
             font-weight: bold;
             color: #000000;
         }
         .form-label {
             font-weight: 500;
             color: #000000;
         }
         .formum button{
             background-color: #019bcac0;
             border: 2px solid #019bca00;
             box-shadow: 
                 0 0 12px rgba(0, 255, 234, 0.3),  
                 0 4px 20px rgba(0, 0, 0, 0.1);
         }
     </style>
 </head>
 <body>
       <div class="formum">
       <form  action="" method="post">
         <h1>Login</h1>
         <div class="mb-3">
             <label for="usuario" class="form-label">Usuario</label>
             <input type="text" class="form-control" id="usuario" name="usuario">
         </div>
         <div class="mb-3">
           <label for="senha" class="form-label">senha</label>
           <input type="password" class="form-control" id="senha" name="senha">
         </div>
         <button type="submit" class="btn btn-primary">Entrar</button>
       </form>
     </div>   
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
 </body>
 </html>
    `); 
    res.end();      
 });

 app.post("/", (req, res) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    
    if(usuario && senha) {
        res.redirect("/continuar");
    } else {
        let conteudo = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
            <style>
                body {
                    margin: 0;
                    display: grid;
                    place-items: center;
                    min-height: 100vh;
                    background-color: rgb(156, 156, 156);
                    padding: 20px 0;
                    padding-top: 70px;
                } 
                .formum {
                    background-color: #f8f9fa;  
                    border: 2px solid #019bcac0;  
                    border-radius: 8px;
                    padding: 30px;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);     
                    text-align: center;
                    width: 900px;
                    max-width: 95%;
                    color: #000000;  
                    position: relative;
                    overflow: hidden;
                }
                .formum::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, 
                      rgba(0,255,157,0) 0%, 
                      rgba(0, 183, 255, 0.6) 50%, 
                      rgba(0,255,157,0) 100%);
                    animation: shine 3s ease-in-out infinite;
                }
                .formum h1 {
                    font-size: 1.8rem; 
                    margin-bottom: 2rem; 
                    font-weight: bold;
                    color: #000000;
                }
                .form-label {
                    font-weight: 500;
                    color: #000000;
                }
                .formum button {
                    background-color: #019bcac0;
                    border: 2px solid #019bca00;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);
                }
                .text-danger {
                    display: block;
                    margin-top: 5px;
                    font-size: 0.875em;
                    color: #dc3545;
                }   
            </style>
        </head>
        <body>
            <div class="formum">
                <form method="POST" action="/" class="row g-3 needs-validation" novalidate>
                    <h1>LOGIN</h1>
                    <h1 class="text-danger">Falha ao tentar entrar</h1>
                          
        `;

        // Usuário
        if(!usuario) {
            conteudo  = conteudo +`
            <div class="col-md-12 position-relative">
                <label for="usuario" class="form-label">Usuário</label>
                <input type="text" class="form-control" id="usuario" name="usuario" required>
                <span class="text-danger">Por favor informe o usuário</span>
            </div>`;
        } else {
            conteudo  = conteudo +`
            <div class="col-md-12 position-relative">
                <label for="usuario" class="form-label">Usuário</label>
                <input type="text" class="form-control" id="usuario" name="usuario" value="${usuario}" required>
            </div>`;
        }

        // Senha
        if(!senha) {
            conteudo  = conteudo +`
            <div class="col-md-12 position-relative">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha" name="senha" required>
                <span class="text-danger">Por favor informe a senha</span>
            </div>`;
        } else {
            conteudo = conteudo + `
            <div class="col-md-12 position-relative">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha" name="senha" required>
            </div>`;
        }

        // Botão
        conteudo = conteudo + `
            <div class="col-12 mt-4">
                <button class="btn btn-primary btn-lg" type="submit">Entrar</button>
            </div>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
</body>
</html>`;

        res.send(conteudo);
        res.end();
    }
});

app.get("/continuar", (req, res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulário de empresas</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
        <style>
           body {
                margin: 0;
                display: grid;
                place-items: center;
                min-height: 100vh;
                background-color: rgb(156, 156, 156);
                padding: 20px 0;
                padding-top: 70px;
            }
            p{
             color: green;
            }
            h1{
             color: green;
            }
        </style>
    </head>
    <body>
         <div class="container mt-5">
             <div class="alert alert-info text-center">
                 <h1>Login realizado com sucesso!</h4>
                 <p>Redirecionando para o menu...</p>
             </div>
         </div>
         <script>
             setTimeout(function() {
                 const link = document.createElement('a');
                 link.href = "/home";
                 link.click();
             }, 3000);
         </script>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
     </body>
    </html>
    `);
    res.end();
 });

app.get("/home", (req, res) => {
    res.send(`  
<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Login</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
       <style>
          body {
               margin: 0;
               display: grid;
               place-items: center;
               min-height: 100vh;
               background-color: rgb(156, 156, 156);
               padding: 20px 0;
               padding-top: 70px;
           }  
           .formum {
               background-color: #f8f9fa;  
               border: 2px solid #019bcac0;  
               border-radius: 8px;
               padding: 30px;
               box-shadow: 
                   0 0 12px rgba(0, 255, 234, 0.3),  
                   0 4px 20px rgba(0, 0, 0, 0.1);     
               text-align: center;
               width: 900px;
               max-width: 95%;
               color: #000000;  
               position: relative;
               overflow: hidden;
           }
           .formum::after {
               content: '';
               position: absolute;
               top: 0;
               left: 0;
               right: 0;
               height: 3px;
               background: linear-gradient(90deg, 
                 rgba(0,255,157,0) 0%, 
                 rgba(0, 183, 255, 0.6) 50%, 
                 rgba(0,255,157,0) 100%);
               animation: shine 3s ease-in-out infinite;
           }
           .formum h1 {
               font-size: 1.8rem; 
               margin-bottom: 2rem; 
               font-weight: bold;
               color: #000000;
           }
           .form-label {
               font-weight: 500;
               color: #000000;
           }
           .formum button{
               background-color: #019bcac0;
               border: 2px solid #019bca00;
               box-shadow: 
                   0 0 12px rgba(0, 255, 234, 0.3),  
                   0 4px 20px rgba(0, 0, 0, 0.1);
           }
       </style>
   </head>
   <body>
       <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
           <div class="container-fluid">
             <a class="navbar-brand" href="/home"> Menu </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div class="navbar-nav">
                 <a class="nav-link" href="/">Login</a>
               </div>
               <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cadastros
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="/cadastroUsuario">Cadastro de Usuários</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="/cadastroempresa">Cadastro de Fornecedores</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Cadastro de Clientes</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Cadastro de Produtos</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Listas
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="/listaUsuarios">Lista de Usuários</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="/listaFornecedores">Lista de Fornecedores</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Lista de Clientes</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Lista de Produtos</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/logout">Logout</a>
                                </li>
                            </ul>
             </div>
           </div>
         </nav>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
   </body>
   </html>
    `);
    res.end();
});


app.get("/cadastroempresa",(req,res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulário de empresas</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
        <style>
           body {
                margin: 0;
                display: grid;
                place-items: center;
                min-height: 100vh;
                background-color: rgb(156, 156, 156);
                padding: 20px 0;
                padding-top: 70px;
            } 
            .formum {
                background-color: #f8f9fa;  
                border: 2px solid #019bcac0;  
                border-radius: 8px;
                padding: 30px;
                box-shadow: 
                    0 0 12px rgba(0, 255, 234, 0.3),  
                    0 4px 20px rgba(0, 0, 0, 0.1);     
                text-align: center;
                width: 900px;
                max-width: 95%;
                color: #000000;  
                position: relative;
                overflow: hidden;
            }
            .formum::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, 
                  rgba(0,255,157,0) 0%, 
                  rgba(0, 183, 255, 0.6) 50%, 
                  rgba(0,255,157,0) 100%);
            }
            .formum h1 {
                font-size: 1.8rem; 
                margin-bottom: 2rem; 
                font-weight: bold;
                color: #000000;
            }
            .form-label {
                font-weight: 500;
                color: #000000;
            }
            .formum button{
                background-color: #019bcac0;
                border: 2px solid #019bca00;
                box-shadow: 
                    0 0 12px rgba(0, 255, 234, 0.3),  
                    0 4px 20px rgba(0, 0, 0, 0.1);
            }
        </style>
    </head>
    <body>
        <div class="formum">
            <form method="POST" action="/cadastroempresa" class="row g-3 needs-validation" novalidate>
                <h1>FORMULÁRIO DE CADASTRO DE FORNECEDOR</h1>
                <div class="col-md-12 position-relative">
                    <label for="cnpj" class="form-label">CNPJ</label>
                    <input type="text" class="form-control" id="cnpj" name="cnpj" required>
                </div>
                <div class="col-md-12 position-relative">
                    <label for="razao_social" class="form-label">Razão Social/Nome do Fornecedor</label>
                    <input type="text" class="form-control" id="razao_social" name="razao_social" placeholder="Ex: Moraes & irmãos Ltda" required>
                </div>
                <div class="col-md-12 position-relative">
                    <label for="nome_fantasia" class="form-label">Nome Fantasia</label>
                    <input type="text" class="form-control" id="nome_fantasia" name="nome_fantasia" placeholder="Ex: Loja do 1,99">
                </div>
                <div class="col-md-8 position-relative">
                    <label for="endereco" class="form-label">Endereço</label>
                    <input type="text" class="form-control" id="endereco" name="endereco" required>
                </div>
                <div class="col-md-4 position-relative">
                    <label for="cidade" class="form-label">Cidade</label>
                    <input type="text" class="form-control" id="cidade" name="cidade" required>
                </div>
                <div class="col-md-6 position-relative">
                    <label for="uf" class="form-label">UF</label>
                    <select class="form-select" id="uf" name="uf" required>
                        <option selected disabled value="">Selecione...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
                <div class="col-md-6 position-relative">
                    <label for="cep" class="form-label">CEP</label>
                    <input type="text" class="form-control" id="cep" name="cep" required>
                </div>
                <div class="col-md-6 position-relative">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                
                <div class="col-md-6 position-relative">
                    <label for="telefone" class="form-label">Telefone</label>
                    <input type="tel" class="form-control" id="telefone" name="telefone" required>
                </div>
                
                <div class="col-12 mt-4">
                    <button class="btn btn-primary btn-lg" type="submit">Cadastrar Fornecedor</button>
                    <a class="btn btn-secondary" href="/home">Voltar</a>
                </div>
            </form>
        </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
    </body>
    </html>
    `);
  res.end();
});

app.post("/cadastroempresa", (req, res) => {
    const cnpj = req.body.cnpj;
    const fornecedor = req.body.razao_social;
    const nome = req.body.nome_fantasia;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;
    
    if (cnpj && fornecedor && nome && endereco && cidade && uf && cep && email && telefone) {
        listaFornecedores.push({
            cnpj: cnpj,
            fornecedor: fornecedor,
            nome: nome,
            endereco: endereco,
            cidade: cidade,
            uf: uf,
            cep: cep,
            email: email,
            telefone: telefone
        });
        res.redirect("/listaFornecedores");
    } else {
        let conteudo = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulário de empresas</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
            <style>
            body {
                margin: 0;
                display: grid;
                place-items: center;
                min-height: 100vh;
                background-color: rgb(156, 156, 156);
                padding: 20px 0;
                padding-top: 70px;
            }
            .formum {
                background-color: #f8f9fa;  
                border: 2px solid #019bcac0;  
                border-radius: 8px;
                padding: 30px;
                box-shadow: 
                    0 0 12px rgba(0, 255, 234, 0.3),  
                    0 4px 20px rgba(0, 0, 0, 0.1);     
                text-align: center;
                width: 900px;
                max-width: 95%;
                color: #000000;  
                position: relative;
                overflow: hidden;
            }
            .formum::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, 
                  rgba(0,255,157,0) 0%, 
                  rgba(0, 183, 255, 0.6) 50%, 
                  rgba(0,255,157,0) 100%);
            }
            .formum h1 {
                font-size: 1.8rem; 
                margin-bottom: 2rem; 
                font-weight: bold;
                color: #000000;
            }
            .form-label {
                font-weight: 500;
                color: #000000;
            }
            .formum button{
                background-color: #019bcac0;
                border: 2px solid #019bca00;
                box-shadow: 
                    0 0 12px rgba(0, 255, 234, 0.3),  
                    0 4px 20px rgba(0, 0, 0, 0.1);
            }
                .text-danger {
                    display: block;
                    margin-top: 5px;
                    font-size: 0.875em;
                    color: #dc3545;
                }   
            </style>
        </head>
        <body>

            <div class="formum">
                <form method="POST" action="/cadastroempresa" class="row g-3 needs-validation" novalidate>
                    <h1>FORMULÁRIO DE CADASTRO DE FORNECEDOR</h1>      
        `;

        // CNPJ
        if(!cnpj){
            conteudo = conteudo + `
            <div class="col-md-12 position-relative">
                <label for="cnpj" class="form-label">CNPJ</label>
                <input type="text" class="form-control" id="cnpj" name="cnpj" required>
                <span class="text-danger">Por favor informe o CNPJ</span>
            </div>`;
        } else {
            conteudo = conteudo + `
            <div class="col-md-12 position-relative">
                <label for="cnpj" class="form-label">CNPJ</label>
                <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}" required>
            </div>`;
        }

        // Razão Social
        if(!fornecedor){
            conteudo = conteudo + `
            <div class="col-md-12 position-relative">
                <label for="razao_social" class="form-label">Razão Social/Nome do Fornecedor</label>
                <input type="text" class="form-control" id="razao_social" name="razao_social" required>
                <span class="text-danger">Por favor informe a razão social</span>
            </div>`;
        } else {
            conteudo = conteudo + `
            <div class="col-md-12 position-relative">
                <label for="razao_social" class="form-label">Razão Social/Nome do Fornecedor</label>
                <input type="text" class="form-control" id="razao_social" name="razao_social" value="${fornecedor}" required>
            </div>`;
        }

        // Nome Fantasia
        if(!nome){
            conteudo = conteudo + `
            <div class="col-md-12 position-relative">
                <label for="nome_fantasia" class="form-label">Nome Fantasia</label>
                <input type="text" class="form-control" id="nome_fantasia" name="nome_fantasia" required>
                <span class="text-danger">Por favor informe o nome fantasia</span>
            </div>`;
        } else {
            conteudo = conteudo +`
            <div class="col-md-12 position-relative">
                <label for="nome_fantasia" class="form-label">Nome Fantasia</label>
                <input type="text" class="form-control" id="nome_fantasia" name="nome_fantasia" value="${nome}" required>
            </div>`;
        }

        // Endereço
        if(!endereco){
            conteudo = conteudo +`
            <div class="col-md-8 position-relative">
                <label for="endereco" class="form-label">Endereço</label>
                <input type="text" class="form-control" id="endereco" name="endereco" required>
                <span class="text-danger">Por favor informe o endereço</span>
            </div>`;
        } else {
            conteudo = conteudo +`
            <div class="col-md-8 position-relative">
                <label for="endereco" class="form-label">Endereço</label>
                <input type="text" class="form-control" id="endereco" name="endereco" value="${endereco}" required>
            </div>`;
        }

        // Cidade
        if(!cidade){
            conteudo = conteudo +`
            <div class="col-md-4 position-relative">
                <label for="cidade" class="form-label">Cidade</label>
                <input type="text" class="form-control" id="cidade" name="cidade" required>
                <span class="text-danger">Por favor informe a cidade</span>
            </div>`;
        } else {
            conteudo = conteudo + `
            <div class="col-md-4 position-relative">
                <label for="cidade" class="form-label">Cidade</label>
                <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}" required>
            </div>`;
        }

        // UF
        if(!uf){
            conteudo = conteudo + `
            <div class="col-md-6 position-relative">
                <label for="uf" class="form-label">UF</label>
                <select class="form-select" id="uf" name="uf" required>
                    <option selected disabled value="">Selecione...</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
                <span class="text-danger">Por favor selecione o estado</span>
            </div>`;
        } else {
            conteudo = conteudo +`
            <div class="col-md-6 position-relative">
                <label for="uf" class="form-label">UF</label>
                <select class="form-select" id="uf" name="uf" required>
                    <option ${!uf ? 'selected disabled' : ''} value="">Selecione...</option>
                    <option ${uf === 'AC' ? 'selected' : ''} value="AC">Acre</option>
                    <option ${uf === 'AL' ? 'selected' : ''} value="AL">Alagoas</option>
                    <option ${uf === 'AP' ? 'selected' : ''} value="AP">Amapá</option>
                    <option ${uf === 'AM' ? 'selected' : ''} value="AM">Amazonas</option>
                    <option ${uf === 'BA' ? 'selected' : ''} value="BA">Bahia</option>
                    <option ${uf === 'CE' ? 'selected' : ''} value="CE">Ceará</option>
                    <option ${uf === 'DF' ? 'selected' : ''} value="DF">Distrito Federal</option>
                    <option ${uf === 'ES' ? 'selected' : ''} value="ES">Espírito Santo</option>
                    <option ${uf === 'GO' ? 'selected' : ''} value="GO">Goiás</option>
                    <option ${uf === 'MA' ? 'selected' : ''} value="MA">Maranhão</option>
                    <option ${uf === 'MT' ? 'selected' : ''} value="MT">Mato Grosso</option>
                    <option ${uf === 'MS' ? 'selected' : ''} value="MS">Mato Grosso do Sul</option>
                    <option ${uf === 'MG' ? 'selected' : ''} value="MG">Minas Gerais</option>
                    <option ${uf === 'PA' ? 'selected' : ''} value="PA">Pará</option>
                    <option ${uf === 'PB' ? 'selected' : ''} value="PB">Paraíba</option>
                    <option ${uf === 'PR' ? 'selected' : ''} value="PR">Paraná</option>
                    <option ${uf === 'PE' ? 'selected' : ''} value="PE">Pernambuco</option>
                    <option ${uf === 'PI' ? 'selected' : ''} value="PI">Piauí</option>
                    <option ${uf === 'RJ' ? 'selected' : ''} value="RJ">Rio de Janeiro</option>
                    <option ${uf === 'RN' ? 'selected' : ''} value="RN">Rio Grande do Norte</option>
                    <option ${uf === 'RS' ? 'selected' : ''} value="RS">Rio Grande do Sul</option>
                    <option ${uf === 'RO' ? 'selected' : ''} value="RO">Rondônia</option>
                    <option ${uf === 'RR' ? 'selected' : ''} value="RR">Roraima</option>
                    <option ${uf === 'SC' ? 'selected' : ''} value="SC">Santa Catarina</option>
                    <option ${uf === 'SP' ? 'selected' : ''} value="SP">São Paulo</option>
                    <option ${uf === 'SE' ? 'selected' : ''} value="SE">Sergipe</option>
                    <option ${uf === 'TO' ? 'selected' : ''} value="TO">Tocantins</option>
                </select>
            </div>`;
        }

        // CEP
        if(!cep){
            conteudo = conteudo +`
            <div class="col-md-6 position-relative">
                <label for="cep" class="form-label">CEP</label>
                <input type="text" class="form-control" id="cep" name="cep" required>
                <span class="text-danger">Por favor informe o CEP</span>
            </div>`;
        } else {
            conteudo = conteudo +`
            <div class="col-md-6 position-relative">
                <label for="cep" class="form-label">CEP</label>
                <input type="text" class="form-control" id="cep" name="cep" value="${cep}" required>
            </div>`;
        }

        // Email
        if(!email){
            conteudo = conteudo + `
            <div class="col-md-6 position-relative">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" name="email" required>
                <span class="text-danger">Por favor informe o e-mail</span>
            </div>`;
        } else {
            conteudo = conteudo +`
            <div class="col-md-6 position-relative">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" name="email" value="${email}" required>
            </div>`;
        }

        // Telefone
        if(!telefone){
            conteudo += `
            <div class="col-md-6 position-relative">
                <label for="telefone" class="form-label">Telefone</label>
                <input type="tel" class="form-control" id="telefone" name="telefone" required>
                <span class="text-danger">Por favor informe o telefone</span>
            </div>`;
        } else {
            conteudo = conteudo +`
            <div class="col-md-6 position-relative">
                <label for="telefone" class="form-label">Telefone</label>
                <input type="tel" class="form-control" id="telefone" name="telefone" value="${telefone}" required>
            </div>`;
        }

        // Botões
        conteudo = conteudo +`
            <div class="col-12 mt-4">
                <button class="btn btn-primary btn-lg" type="submit">Cadastrar Fornecedor</button>
                <a class="btn btn-secondary" href="/home">Voltar</a>
            </div>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
</body>
</html>`;

        res.send(conteudo);
        res.end();
    }
});

app.get("/listaFornecedores", (req, res) => {
    let conteudo = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
            <title>Lista de Fornecedores</title>
            <style>
                body {
                    margin: 0;
                    display: grid;
                    place-items: center;
                    min-height: 100vh;
                    background-color: rgb(156, 156, 156);
                    padding: 20px 0;
                    padding-top: 70px;
                }

                .container {
                    background-color: #f8f9fa;  
                    border: 2px solid #019bcac0;  
                    border-radius: 8px;
                    padding: 30px;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);     
                    width: 95%;
                    max-width: 1200px;
                    color: #000000;
                    position: relative;
                    overflow: hidden;
                }
                .container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, 
                      rgba(0,255,157,0) 0%, 
                      rgba(0, 183, 255, 0.6) 50%, 
                      rgba(0,255,157,0) 100%);
                }
                h2 {
                    font-size: 1.8rem; 
                    margin-bottom: 2rem; 
                    font-weight: bold;
                    color: #000000;
                    text-align: center;
                }
                .table-responsive {
                    margin: 20px 0;
                }
                .table {
                    background-color: white;
                }
                .table-dark {
                    background-color: #019bcac0;
                }
                .table-dark th {
                    color: white;
                    font-weight: 500;
                }
                .table-hover tbody tr:hover {
                    background-color: rgba(1, 155, 202, 0.1);
                }
                .btn-primary {
                    background-color: #019bcac0;
                    border: 2px solid #019bca00;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);
                }
                .btn-secondary {
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.1),  
                        0 4px 20px rgba(0, 0, 0, 0.05);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Lista de Fornecedores Cadastrados</h2>
                <div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th>CNPJ</th>
                                <th>Razão Social</th>
                                <th>Nome Fantasia</th>
                                <th>Endereço</th>
                                <th>Cidade/UF</th>
                                <th>CEP</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>`;
    
    for (let i = 0; i < listaFornecedores.length; i++) {
        conteudo = conteudo + `
                            <tr>
                                <td>${listaFornecedores[i].cnpj}</td>
                                <td>${listaFornecedores[i].fornecedor}</td>
                                <td>${listaFornecedores[i].nome}</td>
                                <td>${listaFornecedores[i].endereco}</td>
                                <td>${listaFornecedores[i].cidade}/${listaFornecedores[i].uf}</td>
                                <td>${listaFornecedores[i].cep}</td>
                                <td>${listaFornecedores[i].email}</td>
                                <td>${listaFornecedores[i].telefone}</td>
                            </tr>`;
    }

    conteudo = conteudo + `
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-between mt-4">
                    <a href="/cadastroempresa" class="btn btn-primary">Cadastrar Novo Fornecedor</a>
                    <a href="/home" class="btn btn-secondary">Voltar ao Início</a>
                </div>
            </div>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </body>
    </html>`;
    
    res.send(conteudo);
    res.end();
});

app.get("/cadastroUsuario", (requisicao, resposta) => {
    resposta.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Usuários</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
            <style>
                body {
                    margin: 0;
                    display: grid;
                    place-items: center;
                    min-height: 100vh;
                    background-color: rgb(156, 156, 156);
                    padding: 20px 0;
                    padding-top: 70px;
                }
                .formum {
                    background-color: #f8f9fa;  
                    border: 2px solid #019bcac0;  
                    border-radius: 8px;
                    padding: 30px;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);     
                    text-align: center;
                    width: 900px;
                    max-width: 95%;
                    color: #000000;  
                    position: relative;
                    overflow: hidden;
                }
                .formum::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, 
                      rgba(0,255,157,0) 0%, 
                      rgba(0, 183, 255, 0.6) 50%, 
                      rgba(0,255,157,0) 100%);
                }
                .formum h1 {
                    font-size: 1.8rem; 
                    margin-bottom: 2rem; 
                    font-weight: bold;
                    color: #000000;
                }
                .form-label {
                    font-weight: 500;
                    color: #000000;
                }
                .formum button{
                    background-color: #019bcac0;
                    border: 2px solid #019bca00;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        <body>
            <div class="formum">
                <form method="POST" action="/cadastroUsuario" class="row g-3 needs-validation" novalidate>
                    <h1>Cadastro de Usuários</h1>
                    <div class="col-md-4 position-relative">
                        <label for="nome" class="form-label">Primeiro nome</label>
                        <input type="text" class="form-control" id="nome" name="nome" required>
                    </div>
                    <div class="col-md-4 position-relative">
                        <label for="sobronome" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="sobronome" name="sobronome" required>
                    </div>
                    <div class="col-md-4 position-relative">
                        <label for="nomeUsuario" class="form-label">Nome do usuário:</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="nomeUsuario" name="nomeUsuario" aria-describedby="inputGroupPrepend" required>
                        </div>
                    </div>
                    <div class="col-md-6 position-relative">
                        <label for="cidade" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" name="cidade" required>
                    </div>
                    <div class="col-md-3 position-relative">
                        <label for="uf" class="form-label">UF</label>
                        <select class="form-select" id="uf" name="uf" required>
                        <option selected disabled value="">Selecione...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        </select>
                    </div>
                    <div class="col-md-3 position-relative">
                        <label for="cep" class="form-label">CEP</label>
                        <input type="text" class="form-control" id="cep" name="cep" required>
                    </div>
                    <div class="col-12 mt-4">
                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                        <a class="btn btn-secondary" href="/home">Voltar</a>
                    </div>
                </form>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </body>
        </html>
    `);
    resposta.end();
});

app.post("/cadastroUsuario", (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const sobronome = requisicao.body.sobronome;
    const nomeUsuario = requisicao.body.nomeUsuario;
    const cidade = requisicao.body.cidade;
    const uf = requisicao.body.uf;
    const cep = requisicao.body.cep;

    if (nome && sobronome && nomeUsuario && cidade && uf && cep) {
        listaUsuarios.push({
            nome: nome,
            sobronome: sobronome,
            nomeUsuario: nomeUsuario,
            cidade: cidade,
            uf: uf,
            cep: cep
        });
        resposta.redirect("/listaUsuarios");
    }
    else {
        let conteudo = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Usuários</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
            <style>
                body {
                    margin: 0;
                    display: grid;
                    place-items: center;
                    min-height: 100vh;
                    background-color: rgb(156, 156, 156);
                    padding: 20px 0;
                    padding-top: 70px;
                }

                .formum {
                    background-color: #f8f9fa;  
                    border: 2px solid #019bcac0;  
                    border-radius: 8px;
                    padding: 30px;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);     
                    text-align: center;
                    width: 900px;
                    max-width: 95%;
                    color: #000000;  
                    position: relative;
                    overflow: hidden;
                }
                .formum::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, 
                      rgba(0,255,157,0) 0%, 
                      rgba(0, 183, 255, 0.6) 50%, 
                      rgba(0,255,157,0) 100%);
                }
                .formum h1 {
                    font-size: 1.8rem; 
                    margin-bottom: 2rem; 
                    font-weight: bold;
                    color: #000000;
                }
                .form-label {
                    font-weight: 500;
                    color: #000000;
                }
                .formum button{
                    background-color: #019bcac0;
                    border: 2px solid #019bca00;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);
                }
                .text-danger {
                    display: block;
                    margin-top: 5px;
                    font-size: 0.875em;
                    color: #dc3545;
                }
            </style>
        </head>
        <body>
            <div class="formum">
                <form method="POST" action="/cadastroUsuario" class="row g-3 needs-validation" novalidate>
                    <h1>Cadastro de Usuários</h1>
                    <div class="col-md-4 position-relative">`;

        if (!nome) {
            conteudo = conteudo + `
                        <label for="nome" class="form-label">Primeiro nome</label>
                        <input type="text" class="form-control" id="nome" name="nome" required>
                        <span class="text-danger">Por favor informe o nome</span>`;
        }
        else {
            conteudo = conteudo + `
                        <label for="nome" class="form-label">Primeiro nome</label>
                        <input type="text" class="form-control" id="nome" name="nome" value="${nome}" required>`;
        }

        conteudo = conteudo + `
                    </div>
                    <div class="col-md-4 position-relative">`;
        if (!sobronome) {
            conteudo = conteudo + `
                        <label for="sobronome" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="sobronome" name="sobronome" required>
                        <span class="text-danger">Por favor informe o sobrenome</span>`;
        }
        else {
            conteudo = conteudo + `
                        <label for="sobronome" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="sobronome" name="sobronome" value="${sobronome}" required>`;
        }

        conteudo = conteudo + `
                    </div>
                    <div class="col-md-4 position-relative">
                        <label for="nomeUsuario" class="form-label">Nome do usuário:</label>
                        <div class="input-group has-validation">`;
        if (!nomeUsuario) {
            conteudo = conteudo + `
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="nomeUsuario" name="nomeUsuario" aria-describedby="inputGroupPrepend" required>
                            <span class="text-danger">Por favor informe o nome de usuário</span>`;
        }
        else {
            conteudo = conteudo + `          
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="nomeUsuario" name="nomeUsuario" value="${nomeUsuario}" aria-describedby="inputGroupPrepend" required>`;
        }
        conteudo = conteudo + `
                        </div>
                    </div>
                    <div class="col-md-6 position-relative">`;
        if (!cidade) {
            conteudo = conteudo + `
                        <label for="cidade" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" name="cidade" required>
                        <span class="text-danger">Por favor informe a cidade</span>`;
        }
        else {
            conteudo = conteudo + `
                        <label for="cidade" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}" required>`;
        }

        conteudo = conteudo + `
                    </div>
                    <div class="col-md-3 position-relative">
                        <label for="uf" class="form-label">UF</label>`;
        if (!uf) {
            conteudo = conteudo + `
                        <select class="form-select" id="uf" name="uf" required>
                            <option selected disabled value="">Escolha um estado...</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                        <span class="text-danger">Por favor selecione o estado</span>`;
        }
        else {
            conteudo = conteudo + `
                        <select class="form-select" id="uf" name="uf" required>
                        <option ${!uf ? 'selected disabled' : ''} value="">Selecione...</option>
                        <option ${uf === 'AC' ? 'selected' : ''} value="AC">Acre</option>
                        <option ${uf === 'AL' ? 'selected' : ''} value="AL">Alagoas</option>
                        <option ${uf === 'AP' ? 'selected' : ''} value="AP">Amapá</option>
                        <option ${uf === 'AM' ? 'selected' : ''} value="AM">Amazonas</option>
                        <option ${uf === 'BA' ? 'selected' : ''} value="BA">Bahia</option>
                        <option ${uf === 'CE' ? 'selected' : ''} value="CE">Ceará</option>
                        <option ${uf === 'DF' ? 'selected' : ''} value="DF">Distrito Federal</option>
                        <option ${uf === 'ES' ? 'selected' : ''} value="ES">Espírito Santo</option>
                        <option ${uf === 'GO' ? 'selected' : ''} value="GO">Goiás</option>
                        <option ${uf === 'MA' ? 'selected' : ''} value="MA">Maranhão</option>
                        <option ${uf === 'MT' ? 'selected' : ''} value="MT">Mato Grosso</option>
                        <option ${uf === 'MS' ? 'selected' : ''} value="MS">Mato Grosso do Sul</option>
                        <option ${uf === 'MG' ? 'selected' : ''} value="MG">Minas Gerais</option>
                        <option ${uf === 'PA' ? 'selected' : ''} value="PA">Pará</option>
                        <option ${uf === 'PB' ? 'selected' : ''} value="PB">Paraíba</option>
                        <option ${uf === 'PR' ? 'selected' : ''} value="PR">Paraná</option>
                        <option ${uf === 'PE' ? 'selected' : ''} value="PE">Pernambuco</option>
                        <option ${uf === 'PI' ? 'selected' : ''} value="PI">Piauí</option>
                        <option ${uf === 'RJ' ? 'selected' : ''} value="RJ">Rio de Janeiro</option>
                        <option ${uf === 'RN' ? 'selected' : ''} value="RN">Rio Grande do Norte</option>
                        <option ${uf === 'RS' ? 'selected' : ''} value="RS">Rio Grande do Sul</option>
                        <option ${uf === 'RO' ? 'selected' : ''} value="RO">Rondônia</option>
                        <option ${uf === 'RR' ? 'selected' : ''} value="RR">Roraima</option>
                        <option ${uf === 'SC' ? 'selected' : ''} value="SC">Santa Catarina</option>
                        <option ${uf === 'SP' ? 'selected' : ''} value="SP">São Paulo</option>
                        <option ${uf === 'SE' ? 'selected' : ''} value="SE">Sergipe</option>
                        <option ${uf === 'TO' ? 'selected' : ''} value="TO">Tocantins</option>
                        </select>`;
        }
        conteudo = conteudo + `
                    </div>
                    <div class="col-md-3 position-relative">
                        <label for="cep" class="form-label">CEP</label>`;
        if (!cep) {
            conteudo = conteudo + `
                        <input type="text" class="form-control" id="cep" name="cep" required>
                        <span class="text-danger">Por favor informe o CEP</span>`;
        }
        else {
            conteudo = conteudo + `
                        <input type="text" class="form-control" id="cep" name="cep" value="${cep}" required>`;
        }
        conteudo = conteudo + `
                    </div>
                    <div class="col-12 mt-4">
                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                        <a class="btn btn-secondary" href="/home">Voltar</a>
                    </div>
                </form>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </body>
        </html>`;
        resposta.send(conteudo);
        resposta.end();
    }
});

app.get("/listaUsuarios", (requisicao, resposta) => {
    let conteudo = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
            <title>Lista de Usuários</title>
            <style>
                body {
                    margin: 0;
                    display: grid;
                    place-items: center;
                    min-height: 100vh;
                    background-color: rgb(156, 156, 156);
                    padding: 20px 0;
                    padding-top: 70px;
                }
                .container {
                    background-color: #f8f9fa;  
                    border: 2px solid #019bcac0;  
                    border-radius: 8px;
                    padding: 30px;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);     
                    width: 95%;
                    max-width: 1200px;
                    color: #000000;
                    position: relative;
                    overflow: hidden;
                }
                .container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, 
                      rgba(0,255,157,0) 0%, 
                      rgba(0, 183, 255, 0.6) 50%, 
                      rgba(0,255,157,0) 100%);
                }
                h2 {
                    font-size: 1.8rem; 
                    margin-bottom: 2rem; 
                    font-weight: bold;
                    color: #000000;
                    text-align: center;
                }
                .table-responsive {
                    margin: 20px 0;
                }
                .table {
                    background-color: white;
                }
                thead {
                    background-color: #019bcac0;
                }
                thead th {
                    color: white;
                    font-weight: 500;
                }
                .table-hover tbody tr:hover {
                    background-color: rgba(1, 155, 202, 0.1);
                }
                .btn-primary {
                    background-color: #019bcac0;
                    border: 2px solid #019bca00;
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.3),  
                        0 4px 20px rgba(0, 0, 0, 0.1);
                }
                .btn-secondary {
                    box-shadow: 
                        0 0 12px rgba(0, 255, 234, 0.1),  
                        0 4px 20px rgba(0, 0, 0, 0.05);
                    margin-right: 10px;
                }
                .btn-group {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Lista de Usuários Cadastrados</h2>
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Sobrenome</th>
                                <th scope="col">Nome do usuário</th>
                                <th scope="col">Cidade</th>
                                <th scope="col">UF</th>
                                <th scope="col">CEP</th>
                            </tr>
                        </thead>
                        <tbody>`;
    
    for (let i = 0; i < listaUsuarios.length; i++) {
        conteudo += `
                            <tr>
                                <td>${listaUsuarios[i].nome}</td>
                                <td>${listaUsuarios[i].sobronome}</td>
                                <td>@${listaUsuarios[i].nomeUsuario}</td>
                                <td>${listaUsuarios[i].cidade}</td>
                                <td>${listaUsuarios[i].uf}</td>
                                <td>${listaUsuarios[i].cep}</td>
                            </tr>`;
    }

    conteudo += `
                        </tbody>
                    </table>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <a href="/cadastroUsuario" class="btn btn-primary">Cadastrar Novo Usuario</a>
                        <a href="/home" class="btn btn-secondary">Voltar ao Início</a>
                    </div>
                </div>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </body>
    </html>`;
    
    resposta.send(conteudo);
    resposta.end();
});

app.get("/logout", (requisicao, resposta) => {
    resposta.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulário de empresas</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
        <style>
           body {
                margin: 0;
                display: grid;
                place-items: center;
                min-height: 100vh;
                background-color: rgb(156, 156, 156);
                padding: 20px 0;
                padding-top: 70px;
            }
        </style>
    </head>
    <body>
         <div class="container mt-5">
             <div class="alert alert-info text-center">
                 <h1>LOGOUT EFETUADO COM SUCESSO!</h4>
             </div>
         </div>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
     </body>
    </html>
    
    `);
    resposta.end();
});

const servidor = http.createServer(app);
servidor.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});