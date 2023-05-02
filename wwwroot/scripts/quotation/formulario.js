const form = document.querySelector("form");
const associatedName = document.querySelector("#AssociatedName");
const associatedEmail = document.querySelector("#AssociatedEmail");
const associatedPhoneNumber = document.querySelector("#AssociatedPhoneNumber");
const selectUF = document.querySelector("#uf");
const submitButton = document.querySelector("#associated-next");
const divAssociated = document.querySelector("#div-associated");
const divVehicle = document.querySelector("#div-vehicle");

const placaVeiculo = document.querySelector("#placaVeiculo");
const marca = document.querySelector("#marca");
const ano = document.querySelector("#ano");
const modelo = document.querySelector("#modelo");

let motoristaOption; // Define a variável como uma variável global

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = associatedName.value.trim();
  const emailValue = associatedEmail.value.trim();
  const phoneNumberValue = associatedPhoneNumber.value.trim();
  const selectValue = selectUF.value;

//   DADOS DO SEGUNDO FORMULARIO, CASO QUEIRA VINCULAR OS DADOS EM UMA CONST E ENVIAR PARA ALGUM BANCO OU EMAIL.

//   const placaVeiculoValue = placaVeiculo.value.trim();
//   const marcaValue = marca.value.trim();
//   const anoValue = ano.value.trim();
//   const modeloValue = modelo.value.trim();

  const optionBtns = document.querySelectorAll(".option-btn");

  optionBtns[1].classList.add("active");

  optionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

      optionBtns.forEach((btn) => {
        btn.classList.remove("active");
      });

      btn.classList.add("active");

      motoristaOption = btn.id;
      console.log(motoristaOption);
    });
  });

  if (
    nameValue !== "" &&
    emailValue !== "" &&
    phoneNumberValue !== "" &&
    selectValue !== "" 
    // placaVeiculoValue !== "" &&
    // marcaValue !== "" &&
    // anoValue !== "" &&
    // modeloValue !== "" 
  ) {
    const formData = {
      name: nameValue,
      email: emailValue,
      telefone: phoneNumberValue,
      estado: selectValue,
    //   placaVeiculo: placaVeiculoValue,
    //   marca: marcaValue,
    //   ano: anoValue,
    //   modelo: modeloValue,
    };

    divAssociated.style.display = "none";
    divVehicle.style.display = "flex";

    // console.log(formData);     <--- OS DADOS QUE PODEM SER ENVIADOS PARA O BACKEND OU EMAIL
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
});

const formVeiculo = document.getElementById('form-veiculo');

  const mainContainer = document.querySelector('.main-container');
  const modalSucesso = document.querySelector('.success-modal');

  formVeiculo.addEventListener('submit', function(event) {
    event.preventDefault();
    mainContainer.style.display = 'none';
    modalSucesso.style.display = 'flex';
});